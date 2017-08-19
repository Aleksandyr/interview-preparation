namespace Interviewer.WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Interviewer.WebApi.AppData;
    using Interviewer.WebApi.Common;
    using Interviewer.WebApi.Models.Account;
    using JWT;
    using JWT.Algorithms;
    using JWT.Serializers;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;


    [Route("api/[controller]")]
    public class AccountController : BaseController
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly JWTSettings _options;

        public AccountController(
            ApplicationDbContext context, 
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            IOptions<JWTSettings> optionsAccessor) 
            : base(context)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._options = optionsAccessor.Value;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Credentials credentials)
        {
            if(ModelState.IsValid)
            {
                var user = new IdentityUser { UserName = credentials.Email, Email = credentials.Email };
                var result = await this._userManager.CreateAsync(user, credentials.Password);
                if(result.Succeeded)
                {
                    await this._signInManager.SignInAsync(user, isPersistent: false, authenticationMethod: Constants.COOKIE_AUTH_SCHEME);
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(credentials.Email) },
                        { "id_token", GetIdToken(user) }
                    });
                }

                return Errors(result);
            }

            return Error("Unexpected error");
        }

        [HttpPost("sign-in")]
        public async Task<IActionResult> SignIn([FromBody] Credentials credentials)
        {
            if(ModelState.IsValid)
            {
                var result = await this._signInManager.PasswordSignInAsync(credentials.Email, credentials.Password, false, false);
                if(result.Succeeded)
                {
                    var user = await this._userManager.FindByEmailAsync(credentials.Email);
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(credentials.Email) },
                        { "id_token", GetIdToken(user) }
                    });
                }

                return new JsonResult("Unable to sign in") { StatusCode = 401 };
            }

            return Error("Unexpected error");
        }

        [HttpGet("forbidden")]
        public IActionResult Forbidden() 
        {
            return StatusCode(403);
        }

        [HttpGet("unauthorize")]
        public IActionResult Unauthorize() 
        {
            return Unauthorized();
        }

        private string GetIdToken(IdentityUser user)
        {
            var payload = new Dictionary<string, object>
            {
                { "id", user.Id },
                { "sub", user.Email },
                { "email", user.Email },
                { "emailConfirmed", user.EmailConfirmed },
            };

            return GetToken(payload);
        }

        private string GetToken(Dictionary<string, object> payload)
        {
            var secret = this._options.SecretKey;

            payload.Add("iss", this._options.Issuer);
            payload.Add("aud", this._options.Audience);
            payload.Add("nbf", ConvertToUnixTimestamp(DateTime.Now));
            payload.Add("iat", ConvertToUnixTimestamp(DateTime.Now));
            payload.Add("exp", ConvertToUnixTimestamp(DateTime.Now.AddDays(7)));
            IJwtAlgorithm algorithm = new HMACSHA256Algorithm();
            IJsonSerializer serializer = new JsonNetSerializer();
            IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
            IJwtEncoder encoder = new JwtEncoder(algorithm, serializer, urlEncoder);

            return encoder.Encode(payload, secret);
        }


        private object GetAccessToken(string email)
        {
            var payload = new Dictionary<string, object>
            {
                { "sub", email },
                { "email", email }
            };

            return GetToken(payload);
        }
       
        private object ConvertToUnixTimestamp(DateTime date)
        {
            DateTime origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            TimeSpan diff = date.ToUniversalTime() - origin;
            return Math.Floor(diff.TotalSeconds);
        }

        private IActionResult Errors(IdentityResult result)
        {
            var items = result.Errors
                .Select(x => x.Description)
                .ToArray();
            
            return new JsonResult(items) {StatusCode = 400};
        }

        private IActionResult Error(string message)
        {
            return new JsonResult(message) { StatusCode = 400 };
        }
    }
}
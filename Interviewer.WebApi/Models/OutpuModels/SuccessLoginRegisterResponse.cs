namespace Interviewer.WebApi.Models.OutputModels
{
    using Microsoft.AspNetCore.Identity;
    using Newtonsoft.Json;
    
    public class SuccessLoginRegisterResponse
    {   
        public SuccessLoginRegisterResponse(string accessToken, string idToken, IdentityUser user, bool success)
        {
            this.AccessToken = accessToken;
            this.IdToken = idToken;
            this.User = user;
            this.Success = success;
        }
        
        [JsonProperty(PropertyName = "access_token")]
        public string AccessToken { get; set; }

        [JsonProperty(PropertyName = "id_token")]
        public string IdToken { get; set; }

        [JsonProperty(PropertyName = "user")]
        public IdentityUser User { get; set; }

        [JsonProperty(PropertyName = "success")]
        public bool Success { get; set; }
    }
}
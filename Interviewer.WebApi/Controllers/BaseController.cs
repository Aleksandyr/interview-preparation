namespace Interviewer.WebApi.Controllers
{
    using System.Linq;
    using Interviewer.WebApi.AppData;
    using Interviewer.WebApi.Models;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    public class BaseController : Controller 
    {
        public readonly ApplicationDbContext context;

        protected readonly UserManager<IdentityUser> _userManager;

        public BaseController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            this._userManager = userManager;
            this.context = context;
        }
    }
}
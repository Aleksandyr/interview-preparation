using System.Linq;
using Interviewer.WebApi.AppData;
using Interviewer.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace Interviewer.WebApi.Controllers
{
    public class BaseController : Controller 
    {
        public readonly ApplicationDbContext context;

        public BaseController(ApplicationDbContext context)
        {
            this.context = context;
        }
    }
}
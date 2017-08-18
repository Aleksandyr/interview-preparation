using System.Linq;
using Interviewer.WebApi.AppData;
using Interviewer.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace Interviewer.WebApi.Controllers
{
    public class BaseController : Controller 
    {
        public readonly ApplicationDbContext _context;

        public BaseController(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}
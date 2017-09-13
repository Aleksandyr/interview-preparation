using System.Collections.Generic;
using System.Linq;
using Interviewer.WebApi.AppData;
using Interviewer.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Interviewer.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : BaseController
    {
        public QuestionsController(ApplicationDbContext context) 
            : base(context)
        {
        }

        [HttpGet("all")]
        public IActionResult getAllQuestions()
        {
            var questions = this.context.Questions.Include(q => q.Answer).ToList();

            return new JsonResult(new Dictionary<string, List<Question>>
            {
                { "questions", questions}
            });
        }
    }
}
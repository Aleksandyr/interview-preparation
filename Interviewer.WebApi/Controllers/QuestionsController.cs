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
            var questions = this.context.Questions
              .Include(q => q.Answer)
              .Include(q => q.Comments)
              .ToList();

            return new JsonResult(new Dictionary<string, List<Question>>
            {
                { "questions", questions}
            });
        }

        [HttpGet("comments")]
        public IActionResult getCommentsByQuestions([FromQuery] int id) 
        {
            var question = this.context.Questions
              .FirstOrDefault(q => q.Id == id);

            if(question == null) 
            {
                return new JsonResult(new Dictionary<string, object>
                {
                    { "success", false },
                    { "error", "This quesiton is not exist!" }
                });
            }
  
            var comments = this.context.Comments.Where(c => c.QuestionId == question.Id).ToList();

            return new JsonResult(new Dictionary<string, List<Comment>>
            {
                { "comments", comments }
            });         
        }
    }
}
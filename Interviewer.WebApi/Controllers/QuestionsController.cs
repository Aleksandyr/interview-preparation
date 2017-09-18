using System.Collections.Generic;
using System.Linq;
using Interviewer.WebApi.AppData;
using Interviewer.WebApi.Models;
using Interviewer.WebApi.Models.OutputModels;
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
            QuestionsAndComments result = new QuestionsAndComments();
          
            result.Questions = this.context.Questions
              .Include(q => q.Answer)
              .Include(q => q.Comments)
              .ToList();

            result.Questions.ForEach(q => {
              q.Comments.Add(context.Comments.Include(c => c.User).FirstOrDefault(c => c.QuestionId == q.Id));
            });

            return new JsonResult(new Dictionary<string, object>
            {
                { "questions", result.Questions}
            });
        }

        [HttpGet("comments")]
        public IActionResult getCommentsByQuestion([FromQuery] int id) 
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
  
            var comments = this.context.Comments.Where(c => c.QuestionId == question.Id).Include(c => c.User).ToList();

            return new JsonResult(new Dictionary<string, List<Comment>>
            {
                { "comments", comments }
            });         
        }
    }
}
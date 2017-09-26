namespace Interviewer.WebApi.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using Interviewer.WebApi.AppData;
    using Interviewer.WebApi.Models;
    using Interviewer.WebApi.Models.OutputModels;
  using Microsoft.AspNetCore.Authorization;
  using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]")]
    public class QuestionsController : BaseController
    {
        public QuestionsController(ApplicationDbContext context, UserManager<IdentityUser> userManager) 
            : base(context, userManager)
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

        [Authorize]
        [HttpPost("vote")]
        public IActionResult voteForQuestion([FromQuery] int id) 
        {
            var question = this.context.Questions.FirstOrDefault(q => q.Id == id);

            if(question == null) 
            {
                return new JsonResult(new Dictionary<string, object>
                {
                    { "success", false },
                    { "error", "This quesiton is not exist!" }
                });
            }

            var userName = this._userManager.GetUserName(this.User);

            var questionVotes = this.context.QuestionsVotes.Where(v => v.QuestionId == id);

            if(questionVotes != null)
            {
                if(!questionVotes.Any(qv => qv.Vote.User.UserName == userName))
                {
                    return addUserVote(userName, question);
                }
                else 
                {
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "message", "You have already voted for this question!" },
                        { "success", false }
                    });
                }
            }
            
            return addUserVote(userName, question);
        }
        private JsonResult addUserVote(string username, Question question) 
        {
            var user = this.context.Users.FirstOrDefault(u => u.UserName == username);
            question.VoteCounter++;
            Vote newVote = new Vote { User = user, Value = 1 };
            QuestionsVotes questionsVotes = new QuestionsVotes { Vote = newVote, Question = question };
            this.context.QuestionsVotes.Add(questionsVotes);
            this.context.Questions.Update(question);

            this.context.SaveChanges();

            return new JsonResult(new Dictionary<string, object>
            {
                { "success", true }
            });
        }
    }
}
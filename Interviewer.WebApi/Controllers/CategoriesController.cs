namespace Interviewer.WebApi.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using Interviewer.WebApi.AppData;
    using Interviewer.WebApi.Models;
    using Interviewer.WebApi.Models.OutputModels;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]")]
    public class CategoriesController : BaseController
    {
        public CategoriesController(ApplicationDbContext context, UserManager<IdentityUser> userManager) 
            : base(context, userManager)
        {
        }

        [HttpGet("all")]
        public IActionResult getAllQuestions()
        {          
            var categories = this.context.Categories.ToList();

            return new JsonResult(new Dictionary<string, object>
            {
                { "categories", categories}
            });
        }


        [HttpGet("questions")]
        public IActionResult questionsByCategory([FromQuery] string category)
        {

            QuestionsByCategory result = new QuestionsByCategory();

            result.Category = this.context.Categories
              .FirstOrDefault(c => c.Title.ToLowerInvariant() == category.ToLowerInvariant());
          
            if(result.Category == null) 
            {
                return new JsonResult(new Dictionary<string, object>
                {
                    { "success", false},
                    { "message", "There is no such category!"}
                });
            }
            
            result.Category.Quesitons = this.context.Questions
              .Include(q => q.Answer)
              .Include(q => q.Comments)
              .Where(q => q.CategoryId == result.Category.Id)
              .ToList();
            
            result.Category.Quesitons.ToList().ForEach(q => {
              List<Comment> comments = context.Comments.Include(c => c.User).Where(c => c.QuestionId == q.Id).ToList();
              comments.ForEach(c => {
                q.Comments.Add(c);
              });
            });

            return new JsonResult(new Dictionary<string, object>
            {
                { "category", result.Category}
            });
        }
    }
}
namespace Interviewer.WebApi.AppData
{
    using System.Linq;
    using Interviewer.WebApi.Models;

    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if(context.Questions.Any())
            {
                return;
            }

            // context.Questions.Add(new Question { Title = "Question" });
            // context.Questions.Add(new Question { Title = "Question1" });
            // context.Questions.Add(new Question { Title = "Question2" });
            // context.Questions.Add(new Question { Title = "Question3" });
            // context.SaveChanges();
        }
    }
}
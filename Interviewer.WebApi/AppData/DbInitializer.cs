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

            context.Questions.Add(new Question(0, "Question"));
            context.SaveChanges();
        }
    }
}
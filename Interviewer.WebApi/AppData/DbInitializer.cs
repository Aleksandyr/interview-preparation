namespace Interviewer.WebApi.AppData
{
    using System.Linq;
    using Interviewer.WebApi.Models;

    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if(!context.Categories.Any()) 
            {
                context.Categories.Add(new Category { Title = "C#" });
                context.Categories.Add(new Category { Title = "Javascript" });
                context.Categories.Add(new Category { Title = "Java" });

                context.SaveChanges();
            }

            if(!context.Answers.Any())
            {
                context.Answers.Add(new Answer { Content = "Inline CSS can be written directly into the HTML elements as a style attribute." +
                    "The primary advantage of inline CSS is the ability to override other style specifications in the single" +
                    "instance of an HTML element that it is applied to. However, this is only feasible if there are a small number of style definitions." +
                    "It is generally better to use embedded or external style sheets for more complex styles." +
                    "External style sheets allow the developer to separate style from content, and control multiple HTML documents from a single separate" +
                    "file, making it easy to style the entirety of a site with a single document. It enables complex styling through classes, " +
                    "selectors, and other grouping methods. The disadvantage of an external CSS file is that it must be downloaded " +
                    "first for the HTML file to be properly rendered."});
                
                context.Answers.Add(new Answer { Content = "Inline CSS can be written directly into the HTML elements as a style attribute." +
                    "The primary advantage of inline CSS is the ability to override other style specifications in the single" +
                    "instance of an HTML element that it is applied to. However, this is only feasible if there are a small number of style definitions." +
                    "It is generally better to use embedded or external style sheets for more complex styles." +
                    "External style sheets allow the developer to separate style from content, and control multiple HTML documents from a single separate" +
                    "file, making it easy to style the entirety of a site with a single document. It enables complex styling through classes, " +
                    "selectors, and other grouping methods. The disadvantage of an external CSS file is that it must be downloaded " +
                    "first for the HTML file to be properly rendered."});
                
                context.Answers.Add(new Answer { Content = "Inline CSS can be written directly into the HTML elements as a style attribute." +
                    "The primary advantage of inline CSS is the ability to override other style specifications in the single" +
                    "instance of an HTML element that it is applied to. However, this is only feasible if there are a small number of style definitions." +
                    "It is generally better to use embedded or external style sheets for more complex styles." +
                    "External style sheets allow the developer to separate style from content, and control multiple HTML documents from a single separate" +
                    "file, making it easy to style the entirety of a site with a single document. It enables complex styling through classes, " +
                    "selectors, and other grouping methods. The disadvantage of an external CSS file is that it must be downloaded " +
                    "first for the HTML file to be properly rendered."});

                context.SaveChanges();
            }

            if(!context.Questions.Any())
            {
                context.Questions.Add(new Question 
                    { Title = "What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 1), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );
                context.Questions.Add(new Question 
                    { Title = "What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 2), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );
                context.Questions.Add(new Question 
                    { Title = "What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );

                context.SaveChanges();
            }
        }
    }
}
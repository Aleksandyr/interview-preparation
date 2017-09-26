namespace Interviewer.WebApi.AppData
{
  using System.Collections.Generic;
  using System.Linq;
    using Interviewer.WebApi.Models;
  using Microsoft.AspNetCore.Identity;

  public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if(!context.Users.Any()) {
              context.Users.Add(new IdentityUser { Email="user@user.gmail.com", PasswordHash="$2y$10$kd7FU5rKbiT9FD7DpJc4Fea.THM9oO2xJdMJ4vtfzE1RB0PaSTup." });
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

            if(!context.Categories.Any()) 
            {
                // List<Question> questions1 = new List<Question>
                // {
                //     new Question { Title = "1What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                //         Answer = context.Answers.FirstOrDefault(a => a.Id == 1), Category = context.Categories.FirstOrDefault(c => c.Id == 1)},
                //     new Question { Title = "1What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                //         Answer = context.Answers.FirstOrDefault(a => a.Id == 1), Category = context.Categories.FirstOrDefault(c => c.Id == 1)},
                //     new Question { Title = "1What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                //         Answer = context.Answers.FirstOrDefault(a => a.Id == 1), Category = context.Categories.FirstOrDefault(c => c.Id == 1)},
                //     new Question { Title = "1What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                //         Answer = context.Answers.FirstOrDefault(a => a.Id == 1), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                // };

                context.Categories.Add(new Category { Title = "CSharp" });
                context.Categories.Add(new Category { Title = "Javascript" });
                context.Categories.Add(new Category { Title = "Java" });

                context.SaveChanges();
            }

            

            if(!context.Questions.Any())
            {
                context.Questions.Add(new Question 
                    { Title = "1What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 1), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );
                context.Questions.Add(new Question 
                    { Title = "2What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 2), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );
                context.Questions.Add(new Question 
                    { Title = "3What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );
                context.Questions.Add(new Question 
                    { Title = "4What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 2)}
                );
                context.Questions.Add(new Question 
                    { Title = "5What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 2)}
                );
                context.Questions.Add(new Question 
                    { Title = "6What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 2)}
                );
                context.Questions.Add(new Question 
                    { Title = "7What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 2)}
                );
                context.Questions.Add(new Question 
                    { Title = "8What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "9What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "10What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "11What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "12What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "13What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "14What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 3)}
                );
                context.Questions.Add(new Question 
                    { Title = "15What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.", 
                        Answer = context.Answers.FirstOrDefault(a => a.Id == 3), Category = context.Categories.FirstOrDefault(c => c.Id == 1)}
                );

                context.SaveChanges();
            }

            if(!context.Comments.Any()) {
              context.Comments.Add(new Comment{ Content="This is right!", 
                  Question = context.Questions.FirstOrDefault(r => r.Id == 1), 
                  User = context.Users.FirstOrDefault(u => u.Email.Equals("user@user.gmail.com")) });
              context.Comments.Add(new Comment{ Content="This is the best answer!",
                  Question = context.Questions.FirstOrDefault(r => r.Id == 1),
                  User = context.Users.FirstOrDefault(u => u.Email.Equals("user@user.gmail.com")) });
              context.Comments.Add(new Comment{ Content="Thanks for the infromation, it was useful!",
                  Question = context.Questions.FirstOrDefault(r => r.Id == 1),
                  User = context.Users.FirstOrDefault(u => u.Email.Equals("user@user.gmail.com")) });

              context.SaveChanges();
            }
        }
    }
}
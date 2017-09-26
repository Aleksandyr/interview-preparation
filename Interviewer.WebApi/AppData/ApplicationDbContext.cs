namespace Interviewer.WebApi.AppData
{
    using Interviewer.WebApi.Models;
    using JetBrains.Annotations;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityUser>().ToTable("Users");
            builder.Entity<IdentityRole>().ToTable("Roles");

            builder.Entity<QuestionsVotes>()
              .HasKey(t => new { t.QuestionId, t.VoteId });

            builder.Entity<QuestionsVotes>()
              .HasOne(q => q.Question)
              .WithMany(qv => qv.QuestionsVotes)
              .HasForeignKey(q => q.QuestionId);
            
            builder.Entity<QuestionsVotes>()
              .HasOne(q => q.Vote)
              .WithMany(qv => qv.QuestionsVotes)
              .HasForeignKey(q => q.VoteId);
        }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Question> Questions { get; set; }

        public DbSet<Answer> Answers { get; set; }

        public DbSet<Vote> Votes { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<QuestionsVotes> QuestionsVotes { get; set; }
    }
}
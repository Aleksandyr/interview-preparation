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
            // builder.Entity<IdentityUserRole>().ToTable("UserRoles");
            // builder.Entity<IdentityUserLogin>().ToTable("UserLogins");
            // builder.Entity<IdentityUserClaim>().ToTable("UserClaims");
            builder.Entity<IdentityRole>().ToTable("Roles");

            // builder.ApplyConfiguration(new UserListMap());
        }

        public DbSet<Question> Questions { get; set; }
    }
}
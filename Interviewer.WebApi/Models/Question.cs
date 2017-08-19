namespace Interviewer.WebApi.Models
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Identity;
    public class Question
    {
        private ICollection<Comment> comments;

        public Question() 
        {
            this.comments = new HashSet<Comment>();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public int AnswerId { get; set; }

        public Answer Answer { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }
        
        public ICollection<Comment> Comments { get => comments; set => comments = value; }
    }
}
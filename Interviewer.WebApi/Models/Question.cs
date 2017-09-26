namespace Interviewer.WebApi.Models
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Identity;
    public class Question
    {
        private ICollection<Comment> comments;
        private ICollection<QuestionsVotes> questionsVotes;

        public Question() 
        {
            this.comments = new HashSet<Comment>();
            this.QuestionsVotes = new HashSet<QuestionsVotes>();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public int AnswerId { get; set; }

        public Answer Answer { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }
        
        public ICollection<Comment> Comments { get => comments; set => comments = value; }

        public int VoteCounter { get; set; }

        public ICollection<QuestionsVotes> QuestionsVotes { get => this.questionsVotes; set => this.questionsVotes = value; }
    }
}
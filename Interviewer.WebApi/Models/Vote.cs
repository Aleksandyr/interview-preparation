namespace Interviewer.WebApi.Models
{
    using System.Collections.Generic;
  using Microsoft.AspNetCore.Identity;

  public class Vote
    {
        private ICollection<QuestionsVotes> questionsVotes;
        public Vote() 
        {
            this.QuestionsVotes = new HashSet<QuestionsVotes>();
        }

        public int Id { get; set; }

        public IdentityUser User { get; set; }

        public int Value { get; set; }

        public ICollection<QuestionsVotes> QuestionsVotes { get => this.questionsVotes; set => this.questionsVotes = value; }
    }
}
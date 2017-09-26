namespace Interviewer.WebApi.Models
{    
    public class QuestionsVotes
    {
        public QuestionsVotes() 
        {
        }

        public int Id { get; set; }

        public int VoteId { get; set; }

        public Vote Vote { get; set; }    

        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }
}
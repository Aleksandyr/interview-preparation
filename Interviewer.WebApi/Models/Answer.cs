namespace Interviewer.WebApi.Models
{    
    public class Answer
    {
        public Answer() 
        {
        }

        public int Id { get; set; }

        public string Content { get; set; }

        // public int QuestionId { get; set; }

        // public Question Question { get; set; }
    }
}
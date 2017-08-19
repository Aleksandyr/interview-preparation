namespace Interviewer.WebApi.Models
{    
    public class Comment
    {
        public Comment() 
        {
        }

        public int Id { get; set; }

        public string Content { get; set; }

        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }
}
namespace Interviewer.WebApi.Models
{
    public class Question
    {
        public Question() {}
        public Question(int id, string content)
        {
            this.Id = id;
            this.Content = content;
        }

        public int Id { get; set; }

        public string Content { get; set; }
    }
}
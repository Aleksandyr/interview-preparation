using System.Collections.Generic;

namespace Interviewer.WebApi.Models
{
    public class Category
    {
        private ICollection<Question> quesitons;
        
        public Category() 
        {
            this.quesitons = new HashSet<Question>();
        }

        public int Id { get; set; }

        public string Title { get; set; }
        
        public ICollection<Question> Quesitons { get => quesitons; set => quesitons = value; }
    }
}
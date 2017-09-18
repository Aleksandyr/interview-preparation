namespace Interviewer.WebApi.Models.OutputModels
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Identity;
    using Newtonsoft.Json;
    
    public class QuestionsAndComments
    {   
        public List<Question> Questions { get; set; }
    }
}
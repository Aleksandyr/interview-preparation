namespace Interviewer.WebApi.Models.OutputModels
{
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Identity;
    using Newtonsoft.Json;
    
    public class QuestionsByCategory
    {   
        public Category Category { get; set; }
    }
}
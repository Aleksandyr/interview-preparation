namespace Interviewer.WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Interviewer.WebApi.AppData;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    public class ValuesController : BaseController
    {
        public ValuesController(ApplicationDbContext context) 
            : base(context) {}

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var questions = context.Questions.FirstOrDefault(x => x.Id == 2);
            if(questions == null) 
            {
                return NotFound();
            }

            return new ObjectResult(questions);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

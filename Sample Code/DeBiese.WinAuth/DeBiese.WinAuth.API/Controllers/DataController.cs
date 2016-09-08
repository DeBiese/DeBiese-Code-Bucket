using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DeBiese.WinAuth.API.Models;

namespace DeBiese.WinAuth.API.Controllers
{
    [RoutePrefix("data")]
    public class DataController : ApiController
    {
        [HttpPost]
        [Route("save")]
        public IHttpActionResult Save(PostData data)
        {
            return Ok(data.ToString());
        }
    }
}

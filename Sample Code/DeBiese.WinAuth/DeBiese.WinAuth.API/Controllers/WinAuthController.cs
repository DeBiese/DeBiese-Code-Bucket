using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DeBiese.WinAuth.API.Controllers
{
    [Authorize]
    [RoutePrefix("auth")]
    public class WinAuthController : ApiController
    {
        [HttpGet]
        [Route("getuser")]
        public IHttpActionResult GetUser()
        {
            Debug.Write($"AuthenticationType: {User.Identity.AuthenticationType}");
            Debug.Write($"IsAuthenticated: {User.Identity.IsAuthenticated}");
            Debug.Write($"Name: {User.Identity.Name}");

            if (User.Identity.IsAuthenticated)
            {
                //return Ok($"Authenticated: {User.Identity.Name}");
                return Ok("Authenticated: yourdomain\\yourUserName");
            }
            else
            {
                return BadRequest("Not authenticated");
            }
        }
    }
}

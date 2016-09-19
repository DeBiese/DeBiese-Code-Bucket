using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DeBiese.Authorization.API.Models;

namespace DeBiese.Authorization.API.Controllers
{
    [Authorize]
    [RoutePrefix("auth")]
    public class WinAuthController : ApiController
    {
        [HttpGet]
        [Route("login")]
        public AppUser Authenticate()
        {
            Debug.Write($"AuthenticationType: {User.Identity.AuthenticationType}");
            Debug.Write($"IsAuthenticated: {User.Identity.IsAuthenticated}");
            Debug.Write($"Name: {User.Identity.Name}");

            if (User.Identity.IsAuthenticated)
            {
                //return Ok(new AppUser { DomainName = User.Identity.Name, Role = "Admin" });
                return new AppUser { DomainName = "domain\\yourusername", Role = "Admin" };
            }
            else
            {
                throw new Exception("Not Authorized");
            }
        }
    }
}

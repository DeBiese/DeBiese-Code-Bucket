using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DeBiese.Authorization.API.Models
{
    public class AppUser
    {
        public string DomainName { get; set; }
        public string Role { get; set; }
    }
}
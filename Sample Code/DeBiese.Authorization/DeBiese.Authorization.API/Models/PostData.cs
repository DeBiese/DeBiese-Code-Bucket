using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DeBiese.Authorization.API.Models
{
    public class PostData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsTrue { get; set; }
        public DateTime CreatedOn { get; set; }

        public override string ToString()
        {
            //String interpolation starting from .net 4.6
            return $"PostData with [Id: {this.Id.ToString()}] - [Name: {this.Name}] - [IsTrue: {this.IsTrue.ToString()}] - [CreatedOn: {this.CreatedOn.ToString("dd/MM/yyy")}].";
        }
    }
}
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace Spikes.RubenB.SignalRChat.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public ActionResult Index()
        {
            log.Info("Index");
            return View();
        }

        //public ActionResult About()
        //{
        //    log.Info("About");
        //    ViewBag.Message = "Your application description page.";

        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    log.Info("Contact");
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}

        //public ActionResult Chat()
        //{
        //    log.Info("Chat");
        //    return View();
        //}

        //public ActionResult Log()
        //{
        //    log.Info("Log");
        //    return View();
        //}
    }
}
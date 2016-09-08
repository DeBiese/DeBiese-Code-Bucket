using System.Web;
using System.Web.Optimization;

namespace Spikes.RubenB.SignalRChat
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //Custom bundles
            bundles.Add(new ScriptBundle("~/bundles/chat-spa/style").Include(
                "~/Content/bootstrap.css",
                "~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/chat-spa/script").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery.signalR-2.2.0.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-resource.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-signalr-hub.js",
                "~/app/SignalRChatApp.js",
                "~/app/ChatService.js",
                "~/app/ChatController.js"));


            //Bundling: REMEMBER TO MAKE YOUR JS files SAFE for minification!!!
            //Safe for minification = load functions with arrays for params
            //Must be false for debugging!!
            BundleTable.EnableOptimizations = false;
        }
    }
}

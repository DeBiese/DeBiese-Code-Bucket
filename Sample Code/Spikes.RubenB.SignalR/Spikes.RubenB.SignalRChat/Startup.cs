using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using log4net;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Cors;

[assembly: OwinStartup(typeof(Spikes.RubenB.SignalRChat.Startup))]

namespace Spikes.RubenB.SignalRChat
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            LogManager.GetLogger("").Info("SignalRChat Initializing.");
            // Branch the pipeline here for requests that start with "/signalr"
            app.Map("/signalr", map =>
            {
                // Setup the CORS middleware to run before SignalR.
                // By default this will allow all origins. You can 
                // configure the set of origins and/or http verbs by
                // providing a cors options with a different policy.
                map.UseCors(CorsOptions.AllowAll);
                var hubConfiguration = new HubConfiguration
                {
                    EnableDetailedErrors = true,
                    EnableJSONP = true,
                    EnableJavaScriptProxies = true
                };
                // Run the SignalR pipeline. We're not using MapSignalR
                // since this branch already runs under the "/signalr"
                // path.
                map.RunSignalR(hubConfiguration);
            });
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using log4net;
using System.Reflection;

namespace Spikes.RubenB.SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public void Send(String name, String message)
        {
            String msg = String.Empty;
            if (message.StartsWith("#debug:"))
            {
                msg = message.Replace("#debug:", String.Empty);
                log.Debug(String.Format("Debug Chat from {0} : {1}", name, msg));
            }
            else if (message.StartsWith("#error:"))
            {
                msg = message.Replace("#error:", String.Empty);
                log.Error(String.Format("Error Chat from {0} : {1}", name, msg));
            }
            else if (message.StartsWith("#info:"))
            {
                msg = message.Replace("#info:", String.Empty);
                log.Info(String.Format("Info Chat from {0} : {1}", name, msg));
            }
            else if (message.StartsWith("#warn:"))
            {
                msg = message.Replace("#warn:", String.Empty);
                log.Warn(String.Format("Warn Chat from {0} : {1}", name, msg));
            }
            else
            {
                msg = message;
                log.Info(String.Format("Chat from {0} : {1}", name, msg));
            }
            //Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(name, msg);
        }
    }
}
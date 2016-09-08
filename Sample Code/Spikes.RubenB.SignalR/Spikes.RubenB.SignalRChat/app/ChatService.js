angularFormsApp.factory('ChatService',
    ["$http", "$rootScope", "$location", "Hub", "$timeout",
    function ($http, $rootScope, $location, Hub, $timeout) {
        var Chats = this;

        //Chat ViewModel
        var Chat = function (chat) {
            if (!chat) chat = {};

            var Chat = {
                UserName: chat.UserName || 'UserX',
                ChatMessage: chat.ChatMessage || 'MessageY'
            }

            return Chat;
        }

        //Hub setup
        var hub = new Hub("chatHub", {
            listeners: {
                'addNewMessageToPage': function (userName, chatMessage) {
                    Chats.add(userName, chatMessage);
                    $rootScope.$apply();
                }
            },
            methods: ['send'],
            errorHandler: function (error) {
                console.error(error);
            },
            hubDisconnected: function () {
                if (hub.connection.lastError) {
                    hub.connection.start();
                }
            },
            transport: 'webSockets',
            logging: true
        });

        Chats.all = [];
        Chats.add = function (userName, chatMessage) {
            Chats.all.push(new Chat({ UserName: userName, ChatMessage: chatMessage }));
        }
        Chats.send = function (userName, chatMessage) {
            hub.send(userName, chatMessage);
        }
        
        return Chats;
    }]);
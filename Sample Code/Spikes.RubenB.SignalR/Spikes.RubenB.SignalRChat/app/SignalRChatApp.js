var angularFormsApp = angular.module('signalRChatApp', ["ngRoute", "SignalR"]);

angularFormsApp.config(
    ["$routeProvider", "$locationProvider",
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/ngchat", {
                templateUrl: "app/ChatTemplate.html",
                controller: "ChatController"
            })
            .otherwise({
                redirectTo: "/ngchat"
            });

        $locationProvider.html5Mode(true);
    }]);
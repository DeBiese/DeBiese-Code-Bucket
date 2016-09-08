
angularFormsApp.controller('ChatController',
    ["$scope", "ChatService",
    function ChatController($scope, ChatService) {
        //Enter controller code here
        $scope.chats = ChatService;
        $scope.username = prompt('Enter your name:', '');
        $scope.sendChat = function () {
            $scope.chats.send($scope.username, $scope.message);
            $('#message').val('').focus();
        }
    }]);
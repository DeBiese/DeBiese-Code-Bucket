'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Controllers;
            (function (Controllers) {
                var NotAuthorizedController = (function () {
                    function NotAuthorizedController() {
                        this.activate();
                    }
                    NotAuthorizedController.prototype.activate = function () {
                        var self = this;
                    };
                    NotAuthorizedController.$inject = [];
                    NotAuthorizedController.id = 'notAuthorizedController';
                    return NotAuthorizedController;
                }());
                Controllers.NotAuthorizedController = NotAuthorizedController;
                NG.app.controller(NotAuthorizedController.id, NotAuthorizedController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

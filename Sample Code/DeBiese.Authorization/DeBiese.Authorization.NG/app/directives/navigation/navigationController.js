/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Controllers;
            (function (Controllers) {
                var NavigationController = (function () {
                    function NavigationController(navigationConfiguration) {
                        this.navConfig = navigationConfiguration;
                        this.activate();
                    }
                    NavigationController.prototype.activate = function () {
                    };
                    NavigationController.$inject = [DeBiese.Authorization.NG.NavigationConfiguration.id];
                    NavigationController.id = 'navigationController';
                    return NavigationController;
                }());
                Controllers.NavigationController = NavigationController;
                NG.app.controller(DeBiese.Authorization.NG.Controllers.NavigationController.id, DeBiese.Authorization.NG.Controllers.NavigationController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

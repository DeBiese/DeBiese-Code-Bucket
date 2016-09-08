/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
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
                    NavigationController.$inject = [DeBiese.WinAuth.NG.NavigationConfiguration.id];
                    NavigationController.id = 'navigationController';
                    return NavigationController;
                }());
                Controllers.NavigationController = NavigationController;
                NG.app.controller(DeBiese.WinAuth.NG.Controllers.NavigationController.id, DeBiese.WinAuth.NG.Controllers.NavigationController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=navigationController.js.map
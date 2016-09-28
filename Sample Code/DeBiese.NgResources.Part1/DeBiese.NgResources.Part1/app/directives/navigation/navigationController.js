/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Controllers;
            (function (Controllers) {
                var NavMessages = DeBiese.NgResources.Part1.Resources.Navigation;
                var NavigationController = (function () {
                    function NavigationController(navigationConfiguration) {
                        this.navResources = NavMessages;
                        this.navConfig = navigationConfiguration;
                        this.activate();
                    }
                    NavigationController.prototype.activate = function () {
                    };
                    NavigationController.$inject = [DeBiese.NgResources.Part1.NavigationConfiguration.id];
                    NavigationController.id = 'navigationController';
                    return NavigationController;
                }());
                Controllers.NavigationController = NavigationController;
                Part1.app.controller(DeBiese.NgResources.Part1.Controllers.NavigationController.id, DeBiese.NgResources.Part1.Controllers.NavigationController);
            })(Controllers = Part1.Controllers || (Part1.Controllers = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=navigationController.js.map
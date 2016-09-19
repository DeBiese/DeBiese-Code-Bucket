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
                var C = DeBiese.NgResources.Part1.Common;
                var NavigationController = (function () {
                    function NavigationController(navigationConfiguration) {
                        this.navConfig = navigationConfiguration;
                        this.$resourceHelper = new C.Resources.ResourceHelper('Navigation');
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
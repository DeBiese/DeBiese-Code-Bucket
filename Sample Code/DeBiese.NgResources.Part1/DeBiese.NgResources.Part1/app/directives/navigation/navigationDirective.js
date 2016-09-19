/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Directives;
            (function (Directives) {
                function Navigation() {
                    return {
                        templateUrl: 'app/directives/navigation/navigationView.html',
                        restrict: 'E',
                        scope: {},
                        replace: true,
                        controller: DeBiese.NgResources.Part1.Controllers.NavigationController.id,
                        controllerAs: 'vm',
                        bindToController: {}
                    };
                }
                Directives.Navigation = Navigation;
                Part1.app.directive('navigation', DeBiese.NgResources.Part1.Directives.Navigation);
            })(Directives = Part1.Directives || (Part1.Directives = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=navigationDirective.js.map
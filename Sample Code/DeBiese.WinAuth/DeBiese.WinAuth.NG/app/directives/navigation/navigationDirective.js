/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Directives;
            (function (Directives) {
                function Navigation() {
                    return {
                        templateUrl: 'app/directives/navigation/navigationView.html',
                        restrict: 'E',
                        scope: {},
                        replace: true,
                        controller: DeBiese.WinAuth.NG.Controllers.NavigationController.id,
                        controllerAs: 'vm',
                        bindToController: {}
                    };
                }
                Directives.Navigation = Navigation;
                NG.app.directive('navigation', DeBiese.WinAuth.NG.Directives.Navigation);
            })(Directives = NG.Directives || (NG.Directives = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=navigationDirective.js.map
/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
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
                        controller: DeBiese.Authorization.NG.Controllers.NavigationController.id,
                        controllerAs: 'vm',
                        bindToController: {}
                    };
                }
                Directives.Navigation = Navigation;
                NG.app.directive('navigation', DeBiese.Authorization.NG.Directives.Navigation);
            })(Directives = NG.Directives || (NG.Directives = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

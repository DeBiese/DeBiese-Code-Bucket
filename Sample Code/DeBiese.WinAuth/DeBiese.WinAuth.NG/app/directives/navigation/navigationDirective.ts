/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.WinAuth.NG.Directives {
    export function Navigation(): ng.IDirective {
        return {
            templateUrl: 'app/directives/navigation/navigationView.html',
            restrict: 'E',
            scope: {},
            replace: true,
            controller: DeBiese.WinAuth.NG.Controllers.NavigationController.id,
            controllerAs: 'vm',
            bindToController: {

            }
        }
    }
    app.directive('navigation', DeBiese.WinAuth.NG.Directives.Navigation);
}

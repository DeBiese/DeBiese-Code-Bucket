/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.Authorization.NG.Directives {
    export function Navigation(): ng.IDirective {
        return {
            templateUrl: 'app/directives/navigation/navigationView.html',
            restrict: 'E',
            scope: {},
            replace: true,
            controller: DeBiese.Authorization.NG.Controllers.NavigationController.id,
            controllerAs: 'vm',
            bindToController: {

            }
        }
    }
    app.directive('navigation', DeBiese.Authorization.NG.Directives.Navigation);
}

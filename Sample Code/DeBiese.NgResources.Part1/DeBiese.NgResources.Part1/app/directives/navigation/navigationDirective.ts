/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.NgResources.Part1.Directives {
    export function Navigation(): ng.IDirective {
        return {
            templateUrl: 'app/directives/navigation/navigationView.html',
            restrict: 'E',
            scope: {},
            replace: true,
            controller: DeBiese.NgResources.Part1.Controllers.NavigationController.id,
            controllerAs: 'vm',
            bindToController: {

            }
        }
    }
    app.directive('navigation', DeBiese.NgResources.Part1.Directives.Navigation);
}

/// <reference path="_app.ts" />
'use strict';
module DeBiese.NgResources.Part2 {
    import M = DeBiese.NgResources.Part2.Models;
    import RES = DeBiese.NgResources.Part2.Resources;

    export var app = angular.module("DeBiese.NgResources.Part2App", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast']);

    export class Config {
        static $inject: string[] = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider

                .state('home', {
                    url: '/home',
                    template: '<home-component></home-component>'
                })

                .state('help', {
                    url: '/help',
                    template: '<help-component></help-component>'
                })

                ;
        }
    }
    app.config(Config);

    app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
    }]);

    app.config([
        'ngToastProvider', ngToast => {
            ngToast.configure({
                verticalPosition: "bottom",
                horizontalPosition: "left",
                timeout: 1500
            });
        }
    ]);

    export class NavigationConfiguration {
        static id: string = 'navigationConfiguration';

        brandState: string;
        brandTitle: string;
        navigationItems: Array<DeBiese.NgResources.Part2.Models.INavigationItem>;

        constructor() {
            this.brandState = 'home';
            this.brandTitle = RES.Navigation.title;
            this.navigationItems = [
                new M.NavigationItem({
                    State: 'home',
                    Title: RES.Navigation.navItemHome,
                    Icon: 'glyphicon-home'                   
                }),
                new M.NavigationItem({
                    State: 'help',
                    Title: RES.Navigation.navItemHelp,
                    Icon: 'glyphicon-question-sign'
                })
            ];
        }
    }
    app.constant(NavigationConfiguration.id, new NavigationConfiguration());

}
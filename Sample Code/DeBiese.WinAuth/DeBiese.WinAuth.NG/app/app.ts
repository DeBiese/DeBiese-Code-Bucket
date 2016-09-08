/// <reference path="_app.ts" />
'use strict';
module DeBiese.WinAuth.NG {
    import M = DeBiese.WinAuth.NG.Models;

    export var app = angular.module("DeBiese.WinAuth.NGApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast']);

    export class Config {
        static $inject: string[] = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {

            $urlRouterProvider.otherwise('/home/');

            $stateProvider

                .state('home', {
                    url: '/home/:applicationId',
                    templateUrl: '/app/components/home/homeView.html',
                    controller: DeBiese.WinAuth.NG.Controllers.HomeController.id,
                    controllerAs: 'vm'
                })

                .state('help', {
                    url: '/help',
                    templateUrl: '/app/components/help/helpView.html',
                    controller: DeBiese.WinAuth.NG.Controllers.HelpController.id,
                    controllerAs: 'vm'
                })

                ;

            $httpProvider.defaults.withCredentials = true;  
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
        navigationItems: Array<DeBiese.WinAuth.NG.Models.INavigationItem>;

        constructor() {
            this.brandState = 'home';
            this.brandTitle = 'DeBiese.WinAuth.NG';
            this.navigationItems = [
                new M.NavigationItem({
                    State: 'home',
                    Title: 'Home',
                    Icon: 'glyphicon-home'                   
                }),
                new M.NavigationItem({
                    State: 'help',
                    Title: 'Help',
                    Icon: 'glyphicon-question-sign'
                })
            ];
        }
    }
    app.constant(NavigationConfiguration.id, new NavigationConfiguration());

}
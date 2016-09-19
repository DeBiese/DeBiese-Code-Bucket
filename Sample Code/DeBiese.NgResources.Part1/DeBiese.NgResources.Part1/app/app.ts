/// <reference path="_app.ts" />
'use strict';
module DeBiese.NgResources.Part1 {
    import M = DeBiese.NgResources.Part1.Models;
    import RES = DeBiese.NgResources.Part1.Resources;

    export var app = angular.module("DeBiese.NgResources.Part1App", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast']);

    export class Config {
        static $inject: string[] = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $urlRouterProvider.otherwise('/home/');

            $stateProvider

                .state('home', {
                    url: '/home/:applicationId',
                    templateUrl: '/app/components/home/homeView.html',
                    controller: DeBiese.NgResources.Part1.Controllers.HomeController.id,
                    controllerAs: 'vm'
                })

                .state('help', {
                    url: '/help',
                    templateUrl: '/app/components/help/helpView.html',
                    controller: DeBiese.NgResources.Part1.Controllers.HelpController.id,
                    controllerAs: 'vm'
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
        navigationItems: Array<DeBiese.NgResources.Part1.Models.INavigationItem>;

        constructor() {
            this.brandState = 'home';
            this.brandTitle = RES.Navigation.Messages.title;
            this.navigationItems = [
                new M.NavigationItem({
                    State: 'home',
                    Title: RES.Navigation.Messages.navItemHome,
                    Icon: 'glyphicon-home'                   
                }),
                new M.NavigationItem({
                    State: 'help',
                    Title: RES.Navigation.Messages.navItemHelp,
                    Icon: 'glyphicon-question-sign'
                })
            ];
        }
    }
    app.constant(NavigationConfiguration.id, new NavigationConfiguration());

}
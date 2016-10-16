/// <reference path="_app.ts" />
'use strict';
module DeBiese.NgResources.Part3 {
    import M = DeBiese.NgResources.Part3.Models;

    export var app = angular.module("DeBiese.NgResources.Part3App",
        [
            'ui.router',
            'smart-table',
            'ui.bootstrap',
            'angular-loading-bar',
            'ngMessages',
            'ngToast',
            'debiese.common'
        ]);

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

    //Resource configuration
    app.config((resourceServiceProvider: DeBiese.Common.Resources.ResourceProvider) => {
        let resourceConfig: DeBiese.Common.Resources.IResourceConfiguration = new DeBiese.Common.Resources.ResourceConfiguration();
        resourceConfig.preferredLanguage = 'en'; //is the default setting (could be omitted here)

        resourceConfig.addResourceFile(new DeBiese.Common.Resources.ResourceFile({ keyPrefix: 'Home', fileLocation: '/app/resources/components/home/', languages: ['en', 'nl'] }));
        resourceConfig.addResourceFile(new DeBiese.Common.Resources.ResourceFile({ keyPrefix: 'Help', fileLocation: '/app/resources/components/help/', languages: ['en', 'nl'] }));
        resourceConfig.addResourceFile(new DeBiese.Common.Resources.ResourceFile({ keyPrefix: 'Nav', fileLocation: '/app/resources/directives/navigation/', languages: ['en', 'nl'] }));
        resourceConfig.addResourceFile(new DeBiese.Common.Resources.ResourceFile({ keyPrefix: 'Error', fileLocation: '/app/resources/errors/', languages: ['en', 'nl'] }));

        resourceServiceProvider.config(resourceConfig);
    });

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
        static $inject: Array<string> = []

        brandState: string;
        brandTitleResourceKey: string;
        navigationItems: Array<DeBiese.NgResources.Part3.Models.INavigationItem>;

        constructor() {
            this.brandState = 'home';
            this.brandTitleResourceKey = 'Nav.title';
            this.navigationItems = [
                new M.NavigationItem({
                    State: 'home',
                    ResourceKey: 'Nav.navItemHome',
                    Icon: 'glyphicon-home'                   
                }),
                new M.NavigationItem({
                    State: 'help',
                    ResourceKey: 'Nav.navItemHelp',
                    Icon: 'glyphicon-question-sign'
                })
            ];
        }
    }
    app.constant(NavigationConfiguration.id, new NavigationConfiguration());

}
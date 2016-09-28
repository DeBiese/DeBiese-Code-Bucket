/// <reference path="_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var M = DeBiese.NgResources.Part1.Models;
            var RES = DeBiese.NgResources.Part1.Resources;
            Part1.app = angular.module("DeBiese.NgResources.Part1App", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast']);
            var Config = (function () {
                function Config($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/home');
                    $stateProvider
                        .state('home', {
                        url: '/home',
                        template: '<home-component></home-component>'
                    })
                        .state('help', {
                        url: '/help',
                        template: '<help-component></help-component>'
                    });
                }
                Config.$inject = ["$stateProvider", "$urlRouterProvider"];
                return Config;
            }());
            Part1.Config = Config;
            Part1.app.config(Config);
            Part1.app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
                    cfpLoadingBarProvider.includeBar = false;
                }]);
            Part1.app.config([
                'ngToastProvider', function (ngToast) {
                    ngToast.configure({
                        verticalPosition: "bottom",
                        horizontalPosition: "left",
                        timeout: 1500
                    });
                }
            ]);
            var NavigationConfiguration = (function () {
                function NavigationConfiguration() {
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
                NavigationConfiguration.id = 'navigationConfiguration';
                return NavigationConfiguration;
            }());
            Part1.NavigationConfiguration = NavigationConfiguration;
            Part1.app.constant(NavigationConfiguration.id, new NavigationConfiguration());
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=app.js.map
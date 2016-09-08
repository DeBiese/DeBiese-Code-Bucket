/// <reference path="_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var M = DeBiese.WinAuth.NG.Models;
            NG.app = angular.module("DeBiese.WinAuth.NGApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast']);
            var Config = (function () {
                function Config($stateProvider, $urlRouterProvider, $httpProvider) {
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
                    });
                    $httpProvider.defaults.withCredentials = true;
                }
                Config.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];
                return Config;
            }());
            NG.Config = Config;
            NG.app.config(Config);
            NG.app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
                    cfpLoadingBarProvider.includeBar = false;
                }]);
            NG.app.config([
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
                NavigationConfiguration.id = 'navigationConfiguration';
                return NavigationConfiguration;
            }());
            NG.NavigationConfiguration = NavigationConfiguration;
            NG.app.constant(NavigationConfiguration.id, new NavigationConfiguration());
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=app.js.map
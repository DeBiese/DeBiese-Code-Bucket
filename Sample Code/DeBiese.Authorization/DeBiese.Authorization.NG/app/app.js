/// <reference path="_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var M = DeBiese.Authorization.NG.Models;
            var S = DeBiese.Authorization.NG.Services;
            NG.app = angular.module("DeBiese.Authorization.NGApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'debiese.security']);
            var Config = (function () {
                function Config($stateProvider, $urlRouterProvider, $httpProvider) {
                    $urlRouterProvider.otherwise('/home');
                    $stateProvider
                        .state('home', {
                        url: '/home',
                        templateUrl: '/app/components/home/homeView.html',
                        controller: DeBiese.Authorization.NG.Controllers.HomeController.id,
                        controllerAs: 'vm',
                        data: {
                            security: new M.StateSecurity({
                                LoginRequired: true,
                                Role: 'Admin'
                            })
                        }
                    })
                        .state('help', {
                        url: '/help',
                        templateUrl: '/app/components/help/helpView.html',
                        controller: DeBiese.Authorization.NG.Controllers.HelpController.id,
                        controllerAs: 'vm',
                        data: {
                            security: new M.StateSecurity({
                                LoginRequired: true,
                                Role: 'User'
                            })
                        }
                    })
                        .state('loading', {
                        url: '/loading',
                        templateUrl: '/app/components/loading/loadingView.html'
                    })
                        .state('unauth', {
                        url: '/unauth',
                        templateUrl: '/app/components/authorization/notAuthorizedView.html',
                        controller: DeBiese.Authorization.NG.Controllers.NotAuthorizedController.id,
                        controllerAs: 'vm'
                    });
                    $httpProvider.defaults.withCredentials = true;
                }
                Config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
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
                    this.brandTitle = 'DeBiese.Authorization.NG';
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
            var AppSecurity = (function () {
                function AppSecurity($rootScope, $state, authenticationSvc, authorizationSvc) {
                    //Make sure authentication is called
                    authenticationSvc.authenticate(true);
                    //Attach function on stateChange start, to check if a user is authorized to go to that new state if the new state requires authentication
                    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                        if (toState.data != null && toState.data.security != null) {
                            //If authentication is still in progress, prevent navigation and retry when authentication is complete
                            if (authenticationSvc.isAuthenticating()) {
                                //Navigate to unprotected route for the time being (prevents infinite digest loop)
                                //Might cause slight flicker on screen when authentication is quick.
                                $state.go('loading');
                                event.preventDefault();
                                //Stave navigation when authentication is finished
                                authenticationSvc.authenticatingPromise.then(function () {
                                    $state.go(toState, toParams);
                                });
                            }
                            else {
                                var security = toState.data.security;
                                if (security.LoginRequired && !authorizationSvc.isAuthorized(security.Role)) {
                                    $state.go('unauth');
                                    event.preventDefault();
                                }
                            }
                        }
                    });
                }
                AppSecurity.$inject = ['$rootScope', '$state', S.AuthenticationService.id, S.AuthorizationService.id];
                return AppSecurity;
            }());
            NG.AppSecurity = AppSecurity;
            NG.app.run(AppSecurity);
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

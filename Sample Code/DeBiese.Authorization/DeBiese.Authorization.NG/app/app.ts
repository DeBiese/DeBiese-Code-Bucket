/// <reference path="_app.ts" />
'use strict';
module DeBiese.Authorization.NG {
    import M = DeBiese.Authorization.NG.Models;
    import S = DeBiese.Authorization.NG.Services;

    export var app = angular.module("DeBiese.Authorization.NGApp", ['ui.router', 'smart-table', 'ui.bootstrap', 'angular-loading-bar', 'ngMessages', 'ngToast', 'debiese.security']);

    export class Config {
        static $inject: string[] = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {

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
        navigationItems: Array<DeBiese.Authorization.NG.Models.INavigationItem>;

        constructor() {
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
    }
    app.constant(NavigationConfiguration.id, new NavigationConfiguration());

    export class AppSecurity {
        static $inject: Array<string> = ['$rootScope', '$state', S.AuthenticationService.id, S.AuthorizationService.id];

        constructor(
            $rootScope: ng.IRootScopeService,
            $state: angular.ui.IStateService,
            authenticationSvc: S.IAuthenticationService,
            authorizationSvc: S.IAuthorizationService
        ) {
            //Make sure authentication is called
            authenticationSvc.authenticate(true);

            //Attach function on stateChange start, to check if a user is authorized to go to that new state if the new state requires authentication
            $rootScope.$on('$stateChangeStart',
                (event: any, toState: angular.ui.IState, toParams: angular.ui.IStateParamsService, fromState: angular.ui.IState, fromParams: angular.ui.IStateParamsService) => {
                    if (toState.data != null && toState.data.security != null) {
                        //If authentication is still in progress, prevent navigation and retry when authentication is complete
                        if (authenticationSvc.isAuthenticating()) {
                            //Navigate to unprotected route for the time being (prevents infinite digest loop)
                            //Might cause slight flicker on screen when authentication is quick.
                            $state.go('loading');
                            event.preventDefault();
                            //Stave navigation when authentication is finished
                            authenticationSvc.authenticatingPromise.then(() => {
                                $state.go(toState, toParams);
                            });
                        }
                        else {
                            let security: M.IStateSecurity = toState.data.security as M.IStateSecurity;
                            if (security.LoginRequired && !authorizationSvc.isAuthorized(security.Role)) {
                                $state.go('unauth');
                                event.preventDefault();
                            }
                        }
                    }                    
                });
        }
    }
    app.run(AppSecurity);

}
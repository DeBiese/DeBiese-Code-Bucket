/// <reference path="../_app.ts" />
'use strict';
module DeBiese.Authorization.NG.Services {
    import C = DeBiese.Authorization.NG.Common;
    import M = DeBiese.Authorization.NG.Models;

    export interface IDummyService {
        
    }

    export class DummyService implements IDummyService {
        static $inject: string[] = ['$http', '$filter', 'logService'];
        static id: string = "dummyService";

        private logSvc: ILogService;
        

        constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, logService: ILogService) {
            this.logSvc = logService;

            this.activate();
        }

        private activate(): void {
            const self = this;


        }

       
    }

    app.service(DeBiese.Authorization.NG.Services.DummyService.id, DeBiese.Authorization.NG.Services.DummyService);
}
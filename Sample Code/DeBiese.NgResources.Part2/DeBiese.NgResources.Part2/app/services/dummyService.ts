/// <reference path="../_app.ts" />
'use strict';
module DeBiese.NgResources.Part2.Services {
    import C = DeBiese.NgResources.Part2.Common;
    import M = DeBiese.NgResources.Part2.Models;

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

    app.service(DeBiese.NgResources.Part2.Services.DummyService.id, DeBiese.NgResources.Part2.Services.DummyService);
}
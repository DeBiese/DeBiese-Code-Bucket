/// <reference path="../_app.ts" />
'use strict';
module DeBiese.WinAuth.NG.Services {
    import C = DeBiese.WinAuth.NG.Common;
    import M = DeBiese.WinAuth.NG.Models;

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

    app.service(DeBiese.WinAuth.NG.Services.DummyService.id, DeBiese.WinAuth.NG.Services.DummyService);
}
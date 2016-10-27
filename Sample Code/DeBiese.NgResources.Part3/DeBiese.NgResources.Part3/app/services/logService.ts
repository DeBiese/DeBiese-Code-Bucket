/// <reference path="../_app.ts" />
'use strict';
module DeBiese.NgResources.Part3.Services {
    export interface ILogService {
        log: (msg: string) => void;
    }

    export class LogService implements ILogService {
        static $inject: string[] = [];
        static id: string = "logService";

        constructor() {
        }

        log(msg: string): void {
            console.log(msg);
        }
    }

    app.service(DeBiese.NgResources.Part3.Services.LogService.id, DeBiese.NgResources.Part3.Services.LogService);
}
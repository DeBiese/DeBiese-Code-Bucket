/// <reference path="../_app.ts" />
'use strict';
module DeBiese.Authorization.NG.Services {
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

    app.service(DeBiese.Authorization.NG.Services.LogService.id, DeBiese.Authorization.NG.Services.LogService);
}
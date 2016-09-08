/// <reference path="../_app.ts" />
'use strict';
module DeBiese.WinAuth.NG.Services {
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

    app.service(DeBiese.WinAuth.NG.Services.LogService.id, DeBiese.WinAuth.NG.Services.LogService);
}
/// <reference path="../_app.ts" />
'use strict';
module DeBiese.NgResources.Part1.Services {
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

    app.service(DeBiese.NgResources.Part1.Services.LogService.id, DeBiese.NgResources.Part1.Services.LogService);
}
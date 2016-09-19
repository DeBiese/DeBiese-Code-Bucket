/// <reference path="../_app.ts" />
'use strict';
module DeBiese.Authorization.NG.Common.Configuration {
    export class AppConfig {
        static serviceBaseUrl: string = 'http://localhost:8361/';
    }

    export class DefaultGridPagerConfig {
        static pageSize: number = 20;
        static pagesToShow: number = 5;
    }
}
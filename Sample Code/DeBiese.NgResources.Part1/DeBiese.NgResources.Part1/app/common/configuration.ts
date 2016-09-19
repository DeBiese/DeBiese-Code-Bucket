/// <reference path="../_app.ts" />
'use strict';
module DeBiese.NgResources.Part1.Common.Configuration {
    export class AppConfig {
        static serviceBaseUrl: string = 'http://localhost/';
    }

    export class DefaultGridPagerConfig {
        static pageSize: number = 20;
        static pagesToShow: number = 5;
    }
}
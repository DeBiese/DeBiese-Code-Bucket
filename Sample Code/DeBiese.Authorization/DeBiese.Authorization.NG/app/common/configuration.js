/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Common;
            (function (Common) {
                var Configuration;
                (function (Configuration) {
                    var AppConfig = (function () {
                        function AppConfig() {
                        }
                        AppConfig.serviceBaseUrl = 'http://localhost:8361/';
                        return AppConfig;
                    }());
                    Configuration.AppConfig = AppConfig;
                    var DefaultGridPagerConfig = (function () {
                        function DefaultGridPagerConfig() {
                        }
                        DefaultGridPagerConfig.pageSize = 20;
                        DefaultGridPagerConfig.pagesToShow = 5;
                        return DefaultGridPagerConfig;
                    }());
                    Configuration.DefaultGridPagerConfig = DefaultGridPagerConfig;
                })(Configuration = Common.Configuration || (Common.Configuration = {}));
            })(Common = NG.Common || (NG.Common = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

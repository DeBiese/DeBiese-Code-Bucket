/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Common;
            (function (Common) {
                var Configuration;
                (function (Configuration) {
                    var AppConfig = (function () {
                        function AppConfig() {
                        }
                        AppConfig.serviceBaseUrl = 'http://localhost/';
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
            })(Common = Part1.Common || (Part1.Common = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=configuration.js.map
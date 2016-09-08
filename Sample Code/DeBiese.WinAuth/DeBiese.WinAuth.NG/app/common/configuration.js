/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Common;
            (function (Common) {
                var Configuration;
                (function (Configuration) {
                    var AppConfig = (function () {
                        function AppConfig() {
                        }
                        AppConfig.serviceBaseUrl = 'http://localhost:30014/';
                        return AppConfig;
                    }());
                    Configuration.AppConfig = AppConfig;
                })(Configuration = Common.Configuration || (Common.Configuration = {}));
            })(Common = NG.Common || (NG.Common = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=configuration.js.map
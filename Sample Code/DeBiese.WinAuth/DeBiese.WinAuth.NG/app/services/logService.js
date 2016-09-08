/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Services;
            (function (Services) {
                var LogService = (function () {
                    function LogService() {
                    }
                    LogService.prototype.log = function (msg) {
                        console.log(msg);
                    };
                    LogService.$inject = [];
                    LogService.id = "logService";
                    return LogService;
                }());
                Services.LogService = LogService;
                NG.app.service(DeBiese.WinAuth.NG.Services.LogService.id, DeBiese.WinAuth.NG.Services.LogService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=logService.js.map
/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
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
                NG.app.service(DeBiese.Authorization.NG.Services.LogService.id, DeBiese.Authorization.NG.Services.LogService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

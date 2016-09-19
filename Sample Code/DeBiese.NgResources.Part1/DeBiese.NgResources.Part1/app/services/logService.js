/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
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
                Part1.app.service(DeBiese.NgResources.Part1.Services.LogService.id, DeBiese.NgResources.Part1.Services.LogService);
            })(Services = Part1.Services || (Part1.Services = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=logService.js.map
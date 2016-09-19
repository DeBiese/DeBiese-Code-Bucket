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
                var DummyService = (function () {
                    function DummyService($http, $filter, logService) {
                        this.$http = $http;
                        this.$filter = $filter;
                        this.logSvc = logService;
                        this.activate();
                    }
                    DummyService.prototype.activate = function () {
                        var self = this;
                    };
                    DummyService.$inject = ['$http', '$filter', 'logService'];
                    DummyService.id = "dummyService";
                    return DummyService;
                }());
                Services.DummyService = DummyService;
                Part1.app.service(DeBiese.NgResources.Part1.Services.DummyService.id, DeBiese.NgResources.Part1.Services.DummyService);
            })(Services = Part1.Services || (Part1.Services = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=dummyService.js.map
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
                var ToastService = (function () {
                    function ToastService(ngToast) {
                        this.ngToast = ngToast;
                    }
                    ToastService.prototype.toastMessage = function (toastMsg) {
                        var self = this;
                        self.ngToast.create(toastMsg);
                    };
                    ToastService.prototype.toastCustom = function (toastMsg) {
                        var self = this;
                        self.ngToast.create(toastMsg);
                    };
                    ToastService.prototype.toastError = function (msg) {
                        var self = this;
                        self.toastMessage({
                            className: 'danger',
                            content: "<span>" + msg + "</span>",
                            dismissOnTimeout: false,
                            dismissButton: true
                        });
                    };
                    ToastService.prototype.toastInfo = function (msg) {
                        var self = this;
                        self.toastMessage({
                            className: 'info',
                            content: "<span>" + msg + "</span>"
                        });
                    };
                    ToastService.prototype.toastSuccess = function (msg) {
                        var self = this;
                        self.toastMessage({
                            className: 'success',
                            content: "<span>" + msg + "</span>"
                        });
                    };
                    ToastService.prototype.toastWarning = function (msg) {
                        var self = this;
                        self.toastMessage({
                            className: 'warning',
                            content: "<span>" + msg + "</span>"
                        });
                    };
                    ToastService.$inject = ['ngToast'];
                    ToastService.id = 'toastService';
                    return ToastService;
                }());
                Services.ToastService = ToastService;
                Part1.app.service(DeBiese.NgResources.Part1.Services.ToastService.id, DeBiese.NgResources.Part1.Services.ToastService);
            })(Services = Part1.Services || (Part1.Services = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=toastService.js.map
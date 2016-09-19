/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Controllers;
            (function (Controllers) {
                var HelpController = (function () {
                    function HelpController() {
                        this.activate();
                    }
                    HelpController.prototype.activate = function () {
                    };
                    HelpController.$inject = [];
                    HelpController.id = 'helpController';
                    return HelpController;
                }());
                Controllers.HelpController = HelpController;
                NG.app.controller(DeBiese.Authorization.NG.Controllers.HelpController.id, DeBiese.Authorization.NG.Controllers.HelpController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

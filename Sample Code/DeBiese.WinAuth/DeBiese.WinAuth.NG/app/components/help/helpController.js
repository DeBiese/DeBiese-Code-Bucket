/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
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
                NG.app.controller(DeBiese.WinAuth.NG.Controllers.HelpController.id, DeBiese.WinAuth.NG.Controllers.HelpController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=helpController.js.map
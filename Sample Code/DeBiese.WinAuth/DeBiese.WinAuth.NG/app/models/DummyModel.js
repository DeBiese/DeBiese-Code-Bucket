'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Models;
            (function (Models) {
                var DummyModel = (function () {
                    function DummyModel(obj) {
                        this.Id = null;
                        if (obj != null) {
                            this.Id = obj.Id;
                        }
                    }
                    return DummyModel;
                }());
                Models.DummyModel = DummyModel;
            })(Models = NG.Models || (NG.Models = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=DummyModel.js.map
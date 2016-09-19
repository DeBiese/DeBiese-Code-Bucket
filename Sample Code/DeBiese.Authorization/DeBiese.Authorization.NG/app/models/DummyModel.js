'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
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
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=DummyModel.js.map
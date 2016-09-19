'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Models;
            (function (Models) {
                var StateSecurity = (function () {
                    function StateSecurity(obj) {
                        if (obj != null) {
                            this.LoginRequired = obj.LoginRequired;
                            this.Role = obj.Role;
                        }
                    }
                    return StateSecurity;
                }());
                Models.StateSecurity = StateSecurity;
            })(Models = NG.Models || (NG.Models = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

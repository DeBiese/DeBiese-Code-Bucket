'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Models;
            (function (Models) {
                var AppUser = (function () {
                    function AppUser(obj) {
                        if (obj != null) {
                            this.DomainName = obj.DomainName;
                            this.Role = obj.Role;
                        }
                    }
                    return AppUser;
                }());
                Models.AppUser = AppUser;
            })(Models = NG.Models || (NG.Models = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

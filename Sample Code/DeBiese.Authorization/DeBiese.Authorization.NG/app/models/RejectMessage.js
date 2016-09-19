var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Models;
            (function (Models) {
                var RejectMessage = (function () {
                    function RejectMessage(obj) {
                        this.Message = null;
                        if (obj != null) {
                            this.Message = obj.Message;
                        }
                    }
                    return RejectMessage;
                }());
                Models.RejectMessage = RejectMessage;
            })(Models = NG.Models || (NG.Models = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

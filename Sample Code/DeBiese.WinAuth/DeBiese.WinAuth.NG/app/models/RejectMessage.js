var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
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
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=RejectMessage.js.map
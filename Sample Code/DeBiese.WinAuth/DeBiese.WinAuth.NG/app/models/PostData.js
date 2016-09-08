var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Models;
            (function (Models) {
                var PostDataModel = (function () {
                    function PostDataModel(obj) {
                        if (obj != null) {
                            this.Id = obj.Id;
                            this.Name = obj.Name;
                            this.IsTrue = obj.IsTrue;
                            this.CreatedOn = obj.CreatedOn;
                        }
                    }
                    return PostDataModel;
                }());
                Models.PostDataModel = PostDataModel;
            })(Models = NG.Models || (NG.Models = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=PostData.js.map
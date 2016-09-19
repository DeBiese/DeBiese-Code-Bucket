'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
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
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));

'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Common;
            (function (Common) {
                var Resources;
                (function (Resources) {
                    var ResourceHelper = (function () {
                        function ResourceHelper(resourceClass) {
                            this._resourceClass = '';
                            this._resourceClass = resourceClass;
                        }
                        ResourceHelper.prototype.getLocalResource = function (resourceId) {
                            var self = this;
                            return DeBiese.Authorization.NG.Resources[self._resourceClass].Messages[resourceId];
                        };
                        return ResourceHelper;
                    }());
                    Resources.ResourceHelper = ResourceHelper;
                })(Resources = Common.Resources || (Common.Resources = {}));
            })(Common = NG.Common || (NG.Common = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=resourceHelper.js.map
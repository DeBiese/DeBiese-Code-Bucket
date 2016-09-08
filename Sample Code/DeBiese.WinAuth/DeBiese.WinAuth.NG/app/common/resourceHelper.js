'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
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
                            return DeBiese.WinAuth.NG.Resources[self._resourceClass].Messages[resourceId];
                        };
                        return ResourceHelper;
                    }());
                    Resources.ResourceHelper = ResourceHelper;
                })(Resources = Common.Resources || (Common.Resources = {}));
            })(Common = NG.Common || (NG.Common = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));

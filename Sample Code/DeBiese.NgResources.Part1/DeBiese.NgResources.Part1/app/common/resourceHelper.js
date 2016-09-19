'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
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
                            return DeBiese.NgResources.Part1.Resources[self._resourceClass].Messages[resourceId];
                        };
                        return ResourceHelper;
                    }());
                    Resources.ResourceHelper = ResourceHelper;
                })(Resources = Common.Resources || (Common.Resources = {}));
            })(Common = Part1.Common || (Part1.Common = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=resourceHelper.js.map
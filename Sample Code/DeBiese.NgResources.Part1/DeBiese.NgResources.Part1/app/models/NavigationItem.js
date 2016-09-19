'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Models;
            (function (Models) {
                var NavigationItem = (function () {
                    function NavigationItem(navItem) {
                        this.IconBase = 'glyphicon';
                        if (navItem != null) {
                            this.State = navItem.State;
                            this.Title = navItem.Title;
                            if (navItem.IconBase != null)
                                this.IconBase = navItem.IconBase;
                            if (navItem.Icon != null)
                                this.Icon = navItem.Icon;
                        }
                    }
                    return NavigationItem;
                }());
                Models.NavigationItem = NavigationItem;
            })(Models = Part1.Models || (Part1.Models = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=NavigationItem.js.map
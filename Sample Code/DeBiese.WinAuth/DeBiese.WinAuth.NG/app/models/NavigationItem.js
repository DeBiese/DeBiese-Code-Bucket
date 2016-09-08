'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
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
            })(Models = NG.Models || (NG.Models = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=NavigationItem.js.map
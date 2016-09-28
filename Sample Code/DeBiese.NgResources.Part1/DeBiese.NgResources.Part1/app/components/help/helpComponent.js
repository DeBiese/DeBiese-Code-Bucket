'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Components;
            (function (Components) {
                var ctrls = DeBiese.NgResources.Part1.Controllers;
                var HelpComponent = (function () {
                    function HelpComponent() {
                        this.templateUrl = '/app/components/help/helpView.html';
                        this.controllerAs = 'vm';
                        this.controller = ctrls.HelpController;
                    }
                    HelpComponent.id = 'helpComponent';
                    return HelpComponent;
                }());
                Components.HelpComponent = HelpComponent;
                Part1.app.component(HelpComponent.id, new HelpComponent());
            })(Components = Part1.Components || (Part1.Components = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=helpComponent.js.map
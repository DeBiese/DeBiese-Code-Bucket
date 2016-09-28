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
                var HomeComponent = (function () {
                    function HomeComponent() {
                        this.templateUrl = '/app/components/home/homeView.html';
                        this.controllerAs = 'vm';
                        this.controller = ctrls.HomeController;
                    }
                    HomeComponent.id = 'homeComponent';
                    return HomeComponent;
                }());
                Components.HomeComponent = HomeComponent;
                Part1.app.component(HomeComponent.id, new HomeComponent());
            })(Components = Part1.Components || (Part1.Components = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=homeComponent.js.map
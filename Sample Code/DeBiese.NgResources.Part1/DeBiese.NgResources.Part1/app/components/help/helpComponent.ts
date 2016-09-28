'use strict';
module DeBiese.NgResources.Part1.Components {
    import ctrls = DeBiese.NgResources.Part1.Controllers;

    export class HelpComponent implements ng.IComponentOptions {
        static id = 'helpComponent';

        templateUrl = '/app/components/help/helpView.html';
        controllerAs = 'vm';
        controller = ctrls.HelpController;

        constructor() {

        }
    }

    app.component(HelpComponent.id, new HelpComponent());
}
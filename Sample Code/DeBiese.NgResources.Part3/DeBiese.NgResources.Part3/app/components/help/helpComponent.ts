'use strict';
module DeBiese.NgResources.Part3.Components {
    import ctrls = DeBiese.NgResources.Part3.Controllers;

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
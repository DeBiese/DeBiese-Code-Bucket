'use strict';
module DeBiese.WinAuth.NG.Models {

    export interface IDummyModel {

        Id: string
    }

    export class DummyModel implements IDummyModel {

        public Id: string = null;
       

        constructor(obj?: IDummyModel) {
            if (obj != null) {
                this.Id = obj.Id;
            }
        }
    }
}
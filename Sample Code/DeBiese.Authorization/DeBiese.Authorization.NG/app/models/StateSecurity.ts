'use strict';
module DeBiese.Authorization.NG.Models {
    export interface IStateSecurity {
        LoginRequired: boolean;
        Role: string;
    }

    export class StateSecurity implements IStateSecurity {

        LoginRequired: boolean;
        Role: string;


        constructor(obj?: IStateSecurity) {
            if (obj != null) {
                this.LoginRequired = obj.LoginRequired;
                this.Role = obj.Role;
            }
        }
    }
}
'use strict';
module DeBiese.Authorization.NG.Models {
    export interface IAppUser {
        DomainName: string;
        Role: string;
    }

    export class AppUser implements IAppUser {

        DomainName: string;
        Role: string;


        constructor(obj?: IAppUser) {
            if (obj != null) {
                this.DomainName = obj.DomainName;
                this.Role = obj.Role;
            }
        }
    }
}
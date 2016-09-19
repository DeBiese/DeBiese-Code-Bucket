'use strict';
module DeBiese.Authorization.NG.Models {
    export interface IPostDataModel {
        Id: number;
        Name: string;
        IsTrue: boolean;
        CreatedOn: Date;
    }

    export class PostDataModel implements IPostDataModel {

        public Id: number;
        public Name: string;
        public IsTrue: boolean;
        public CreatedOn: Date;


        constructor(obj?: IPostDataModel) {
            if (obj != null) {
                this.Id = obj.Id;
                this.Name = obj.Name;
                this.IsTrue = obj.IsTrue;
                this.CreatedOn = obj.CreatedOn;
            }
        }
    }
}
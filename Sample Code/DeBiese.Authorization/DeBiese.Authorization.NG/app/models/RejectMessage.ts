module DeBiese.Authorization.NG.Models {

    export interface IRejectMessage {

        Message: any;
    }

    export class RejectMessage implements IRejectMessage {

        public Message: any = null;


        constructor(obj?: IRejectMessage) {
            if (obj != null) {
                this.Message = obj.Message;
            }
        }
    }
}
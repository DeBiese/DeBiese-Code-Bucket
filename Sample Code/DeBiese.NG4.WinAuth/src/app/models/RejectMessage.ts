export interface IRejectMessage {

    Message: any;
}

export class RejectMessage implements IRejectMessage {

    public Message: any = null;


    constructor(obj?: IRejectMessage) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}
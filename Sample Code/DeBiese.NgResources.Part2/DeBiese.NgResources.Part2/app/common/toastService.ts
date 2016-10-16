/// <reference path="../_app.ts" />
'use strict';
module DeBiese.NgResources.Part2.Services {
    export interface IToastService {
        toastCustom(toastMsg: ngToast.IToastMessage): void;
        toastError(msg: string): void;
        toastInfo(msg: string): void;
        toastSuccess(msg: string): void;
        toastWarning(msg: string): void;
    }

    export class ToastService implements IToastService {
        static $inject: Array<string> = ['ngToast'];
        static id: string = 'toastService';

        constructor(private ngToast: ngToast.IToastProvider) {

        }

        private toastMessage(toastMsg: ngToast.IToastMessage): void {
            const self = this;
            self.ngToast.create(toastMsg);
        }

        toastCustom(toastMsg: ngToast.IToastMessage): void {
            const self = this;
            self.ngToast.create(toastMsg);
        }

        toastError(msg: string): void {
            const self = this;
            self.toastMessage({
                className: 'danger',
                content: `<span>${msg}</span>`,
                dismissOnTimeout: false,
                dismissButton: true
            });
        }

        toastInfo(msg: string): void {
            const self = this;
            self.toastMessage({
                className: 'info',
                content: `<span>${msg}</span>`
            });
        }

        toastSuccess(msg: string): void {
            const self = this;

            self.toastMessage({
                className: 'success',
                content: `<span>${msg}</span>`
            });
        }

        toastWarning(msg: string): void {
            const self = this;
            self.toastMessage({
                className: 'warning',
                content: `<span>${msg}</span>`
            });
        }
    }

    app.service(DeBiese.NgResources.Part2.Services.ToastService.id, DeBiese.NgResources.Part2.Services.ToastService);
}
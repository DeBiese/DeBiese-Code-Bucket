'use strict';
module DeBiese.NgResources.Part1.Common.Resources {
    export interface IResourceHelper {
        getLocalResource(resourceId: string): string;
    }

    export class ResourceHelper implements IResourceHelper {
        private _resourceClass: string = '';

        constructor(resourceClass: string) {
            this._resourceClass = resourceClass;
        }

        getLocalResource(resourceId: string): string {
            const self = this;
            return DeBiese.NgResources.Part1.Resources[self._resourceClass].Messages[resourceId];
        }
    }
}
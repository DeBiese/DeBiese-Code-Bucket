'use strict';
module DeBiese.NgResources.Part2.Models {
    export interface INavigationItem {
        State: string;
        ResourceKey: string;
        IconBase?: string;
        Icon?: string;
    }

    export class NavigationItem implements INavigationItem {
        State: string;
        ResourceKey: string;
        IconBase: string;
        Icon: string;

        constructor(navItem?: INavigationItem) {
            this.IconBase = 'glyphicon';
            if (navItem != null) {
                this.State = navItem.State;
                this.ResourceKey = navItem.ResourceKey;
                if (navItem.IconBase != null) this.IconBase = navItem.IconBase;
                if (navItem.Icon != null) this.Icon = navItem.Icon;
            }
        }
    }
}
'use strict';
module DeBiese.WinAuth.NG.Models {
    export interface INavigationItem {
        State: string;
        Title: string;
        IconBase?: string;
        Icon?: string;
    }

    export class NavigationItem implements INavigationItem {
        State: string;
        Title: string;
        IconBase: string;
        Icon: string;

        constructor(navItem?: INavigationItem) {
            this.IconBase = 'glyphicon';
            if (navItem != null) {
                this.State = navItem.State;
                this.Title = navItem.Title;
                if (navItem.IconBase != null) this.IconBase = navItem.IconBase;
                if (navItem.Icon != null) this.Icon = navItem.Icon;
            }
        }
    }
}
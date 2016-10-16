'use strict';
module DeBiese.NgResources.Part2.Resources {
    import C = DeBiese.Common;

    export class NavigationResources extends C.Resources.ResourceBase {
        constructor() {
            super('Nav');
        }

        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'DeBiese.NgResources.Part2' },
                { key: 'navItemHome', value: 'Home' },
                { key: 'navItemHelp', value: 'Help' },
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'DeBiese.NgResources.Part2' },
                { key: 'navItemHome', value: 'Home' },
                { key: 'navItemHelp', value: 'Help' },
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };        
    }
}
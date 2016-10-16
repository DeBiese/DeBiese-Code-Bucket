'use strict';
module DeBiese.NgResources.Part2.Resources {
    import C = DeBiese.Common;

    export class HomeResources extends C.Resources.ResourceBase {
        constructor() {
            super('Home');
        }

        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Home Title' },
                { key: 'helloWorld', value: 'Hello World!' }
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Home Titel' },
                { key: 'helloWorld', value: 'Hallo wereld!' }
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };        
    }
}
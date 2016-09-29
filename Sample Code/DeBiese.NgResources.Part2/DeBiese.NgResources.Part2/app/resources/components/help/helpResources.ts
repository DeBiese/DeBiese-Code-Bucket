'use strict';
module DeBiese.NgResources.Part2.Resources {
    import C = DeBiese.Common;

    export class HelpResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Help' },
                { key: 'helpText', value: 'Contact developers@spikes.be when you encounter problems or errors.' }
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'title', value: 'Help' },
                { key: 'helpText', value: 'Contacteer developers@spikes.be voor eventuele vragen of opmerkingen.' }
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Help');
        }
    }
}
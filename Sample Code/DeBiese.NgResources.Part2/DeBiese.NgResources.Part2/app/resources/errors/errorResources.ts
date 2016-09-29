'use strict';
module DeBiese.NgResources.Part2.Resources {
    import C = DeBiese.Common;

    export class ErrorResources extends C.Resources.ResourceBase {
        protected setLanguageDictionary(): void {
            const self = this;
            let Translations_en: Array<C.KeyValuePair<string, string>> = [
                { key: 'unExpectedError', value: 'An unexpected error occurred. Contact IT support if the error persists.' },
                { key: 'somethingWrong', value: 'Something went wrong. Try again please.' }
            ];

            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
                { key: 'unExpectedError', value: 'Er heeft zich een onverwachte fout voorgedaan. Contacteer IT support als het probleem zich blijft voordoen.' },
                { key: 'somethingWrong', value: 'Er is iets fout gegaan. Probeer a.u.b. opnieuw.' }
            ];

            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
                { key: 'en', value: new C.Dictionary(Translations_en) },
                { key: 'nl', value: new C.Dictionary(Translations_nl) }
            ]);
        };

        constructor() {
            super('Error');
        }
    }
}
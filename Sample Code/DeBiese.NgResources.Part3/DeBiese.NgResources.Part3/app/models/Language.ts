module DeBiese.NgResources.Part3.Models {
    export interface ILanguage {
        Code: string;
        DisplayText: string;
    }

    export class Language implements ILanguage {
        Code: string;
        DisplayText: string;

        constructor(lang?: ILanguage) {
            if (lang != null) {
                this.Code = lang.Code;
                this.DisplayText = lang.DisplayText;
            }
        }
    }
}
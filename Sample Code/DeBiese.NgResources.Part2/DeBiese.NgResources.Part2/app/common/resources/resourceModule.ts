'use strict';
module DeBiese.Common.Resources {
    //**********************************************************************************************
    // Base class for resource classes
    //**********************************************************************************************
    //Structure of the resource files is as follows:
    //module DeBiese.NgResources.Part2.Resources {
    //    import C = DeBiese.Common;

    //    export class ComponentResources extends C.Resources.ResourceBase {
    //        protected setLanguageDictionary(): void {
    //            const self = this;
    //            let Translations_en: Array<C.KeyValuePair<string, string>> = [
    //                { key: 'title', value: 'Title' }
    //            ];

    //            let Translations_nl: Array<C.KeyValuePair<string, string>> = [
    //                { key: 'title', value: 'Titel' }
    //            ];

    //            self.languageDictionary = new C.Dictionary<string, C.Dictionary<string, string>>([
    //                { key: 'en', value: new C.Dictionary(Translations_en) },
    //                { key: 'nl', value: new C.Dictionary(Translations_nl) }
    //            ]);
    //        };

    //        constructor() {
    //            super('Component');
    //        }
    //    }
    //}
    //**********************************************************************************************
    export abstract class ResourceBase {
        protected resourceName: string;
        protected languageDictionary: Dictionary<string, Dictionary<string, string>> = null;

        constructor(name: string) {
            this.resourceName = name;
            this.setLanguageDictionary();
        }

        protected setLanguageDictionary(): void {
            throw new Error('setLanguageDictionary not implemented!');
        };

        getLanguages(): Dictionary<string, Dictionary<string, string>> {
            const self = this;
            return self.languageDictionary;
        }

        getResourceName(): string {
            const self = this;
            return self.resourceName;
        }

        getTranslations(language: string): Dictionary<string, string> {
            const self = this;
            if (self.languageDictionary == null)
                self.setLanguageDictionary();
            if (self.languageDictionary.containsKey(language))
                return self.languageDictionary.getValue(language);
            else
                throw new Error(`Language '${language}' does not exist.`);
        }
    }

    //**********************************************************************************************
    // Interface describing the configuration object expected by the ResourceService.
    //**********************************************************************************************
    //**********************************************************************************************
    export interface IResourceConfiguration {
        preferredLanguage: string;
        addResource: (resource: ResourceBase) => void;
        getResources: () => Array<ResourceBase>;
    }

    //**********************************************************************************************
    // Interface describing the ResourceService
    //**********************************************************************************************
    //**********************************************************************************************
    export interface IResourceService {
        getLocalResource: (resourceKey: string, resourceFile?: string) => string;
        setLanguage: (language: string) => void;
    }

    //**********************************************************************************************
    // Class implementing the IResourceConfiguration interface.
    //**********************************************************************************************
    //**********************************************************************************************
    export class ResourceConfiguration implements IResourceConfiguration {
        private $resources: Array<ResourceBase>;
        preferredLanguage: string = 'en';

        constructor() {
            this.$resources = [];
        }

        addResource(resource: ResourceBase): void {
            const self = this;
            self.$resources.push(resource);
        }

        getResources(): Array<ResourceBase> {
            const self = this;
            return self.$resources;
        }
    }

    //**********************************************************************************************
    // Class implementing the IResourceService.
    //**********************************************************************************************
    //**********************************************************************************************
    class ResourceService implements IResourceService {
        private $resourceDictionary: Dictionary<string, Dictionary<string, string>> = null;
        private $dictionary: Dictionary<string, string> = null;

        constructor() {
            this.$resourceDictionary = new Dictionary<string, Dictionary<string, string>>();
        }

        configure(resourceConfig: IResourceConfiguration): void {
            const self = this;
            if (resourceConfig != null) {
                if (resourceConfig.getResources().length === 0)
                    throw new Error('At least one resource must be configured!');
                if (resourceConfig.preferredLanguage === '')
                    throw new Error('A preferred language must be set');
            }
            else {
                throw new Error('Resource configuration can not be NULL!');
            }

            resourceConfig.getResources().forEach(rb => {
                if (rb.getLanguages() != null && rb.getLanguages().count() > 0) {
                    let languageDictionary = rb.getLanguages();
                    languageDictionary.keys().forEach(k => {
                        let tmpDictionary: Dictionary<string, string> = null;
                        if (self.$resourceDictionary.containsKey(k)) {
                            tmpDictionary = self.$resourceDictionary.getValue(k);
                        }
                        else {
                            tmpDictionary = new Dictionary<string, string>();
                            self.$resourceDictionary.add(k, tmpDictionary);
                        }

                        let translationDictionary = languageDictionary.getValue(k);
                        if (translationDictionary != null && translationDictionary.count() > 0) {
                            translationDictionary.keys().forEach(tr => {
                                tmpDictionary.add(`${rb.getResourceName()}.${tr}`, translationDictionary.getValue(tr));
                            });
                        }
                    });
                }
            });

            self.setLanguage(resourceConfig.preferredLanguage);
        }

        getLocalResource(resourceKey: string): string {
            const self = this;

            if (self.$dictionary.containsKey(resourceKey))
                return self.$dictionary.getValue(resourceKey);
            else
                return 'Unknown resourceKey';
        }

        setLanguage(language: string): void {
            const self = this;
            if (self.$resourceDictionary.containsKey(language))
                self.$dictionary = self.$resourceDictionary.getValue(language);
            else
                throw new Error(`Language ${language} has not been configured!`);
        }
    }

    //**********************************************************************************************
    // Class implementing the ng.IServiceProvider.
    //**********************************************************************************************
    //**********************************************************************************************
    export class ResourceProvider implements ng.IServiceProvider {
        static id: string = 'resourceService';
        private $resourceService: ResourceService;

        constructor() {
            this.$resourceService = new ResourceService();
        }

        public config(resourceConfig: IResourceConfiguration): void {
            this.$resourceService.configure(resourceConfig);
        }

        public $get(): IResourceService {
            return this.$resourceService;
        }
    }

    angular.module('debiese.common', [])
        .provider(DeBiese.Common.Resources.ResourceProvider.id, DeBiese.Common.Resources.ResourceProvider);
}
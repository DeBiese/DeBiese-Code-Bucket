'use strict';
module DeBiese.Common.Resources {
    
    //**********************************************************************************************
    // Interface describing a ResourceFile
    //**********************************************************************************************
    //**********************************************************************************************
    export interface IResourceFile {
        fileLocation: string;
        keyPrefix: string;
        languages: Array<string>;
    }    

    //**********************************************************************************************
    // Interface describing the configuration object expected by the ResourceService.
    //**********************************************************************************************
    //**********************************************************************************************    
    export interface IResourceConfiguration {   
        preferredLanguage?: string;
        addResourceFile: (file: IResourceFile) => void;
        getResourceFiles: () => Array<IResourceFile>;
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
    // Class implementing the IResourceFile interface.
    //**********************************************************************************************
    //**********************************************************************************************
    export class ResourceFile implements IResourceFile {
        fileLocation: string;
        keyPrefix: string;
        languages: Array<string>;

        constructor(resource?: IResourceFile) {
            if (resource != null) {
                this.fileLocation = resource.fileLocation;
                this.keyPrefix = resource.keyPrefix;
                this.languages = resource.languages;
            }
        }
    }

    //**********************************************************************************************
    // Class implementing the IResourceConfiguration interface.
    //**********************************************************************************************
    //**********************************************************************************************
    export class ResourceConfiguration implements IResourceConfiguration {
        private $resourceFiles: Array<IResourceFile>;
        preferredLanguage: string = 'en';

        constructor() {
            this.$resourceFiles = [];
        }

        addResourceFile(file: IResourceFile): void {
            const self = this;
            self.$resourceFiles.push(file);
        }

        getResourceFiles(): Array<IResourceFile>{
            const self = this;
            return self.$resourceFiles;
        }
    }

    //**********************************************************************************************
    // Class implementing the IResourceService.
    //**********************************************************************************************
    //**********************************************************************************************
    class ResourceService implements IResourceService {
        private $resourceDictionary: Dictionary<string, Dictionary<string, string>> = null;
        private $dictionary: Dictionary<string, string> = null;

        constructor(private $http: ng.IHttpService) {
            this.$resourceDictionary = new Dictionary<string, Dictionary<string, string>>();
            this.$dictionary = new Dictionary<string, string>();
        }

        private loadResourceFile(resourceFile: IResourceFile, languageToLoad: string): ng.IPromise<boolean> {
            const self = this;
            let defer = Q.defer();

            self.$http.get(`${resourceFile.fileLocation}${resourceFile.keyPrefix.toLowerCase()}.${languageToLoad}.json`)
                .success((data, status, headers, config) => {
                    let resources: Dictionary<string, string> = new Dictionary(data as Array<KeyValuePair<string, string>>);
                    let tmpDictionary: Dictionary<string, string> = null;
                    if (self.$resourceDictionary.containsKey(languageToLoad)) {
                        tmpDictionary = self.$resourceDictionary.getValue(languageToLoad);
                    }
                    else {
                        tmpDictionary = new Dictionary<string, string>();
                        self.$resourceDictionary.add(languageToLoad, tmpDictionary);
                    }

                    resources.keys().forEach(tr => {
                        tmpDictionary.add(`${resourceFile.keyPrefix}.${tr}`, resources.getValue(tr));
                    });

                    defer.resolve(true);
                })
                .error((data, status, headers, config) => {
                    //TODO: do something with this?
                    console.log('ERROR:');
                    console.log(data);
                    defer.resolve(false);
                });

            return defer.promise;
        }

        configure(resourceConfig: IResourceConfiguration): void {
            const self = this;
            if (resourceConfig != null) {
                if (resourceConfig.getResourceFiles().length === 0)
                    throw new Error('At least one resource file must be configured!');
                if (resourceConfig.preferredLanguage === '')
                    throw new Error('A preferred language must be set');
            }
            else {
                throw new Error('Resource configuration can not be NULL!');
            }


            let loadPromises: Array<any> = [];
            resourceConfig.getResourceFiles().forEach(rf => {
                rf.languages.forEach(lang => {
                    loadPromises.push(self.loadResourceFile(rf, lang));
                })
            });

            Q.all(loadPromises).then(() => { self.setLanguage(resourceConfig.preferredLanguage); });
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
        private $resourceConfiguration: IResourceConfiguration;

        constructor() {
            
        }

        public config(resourceConfig: IResourceConfiguration): void {
            this.$resourceConfiguration = resourceConfig;
        }

        public $get($http): IResourceService {
            this.$resourceService = new ResourceService($http);
            this.$resourceService.configure(this.$resourceConfiguration);
            return this.$resourceService;
        }
    }

    angular.module('debiese.common', [])
        .provider(DeBiese.Common.Resources.ResourceProvider.id, DeBiese.Common.Resources.ResourceProvider);
}
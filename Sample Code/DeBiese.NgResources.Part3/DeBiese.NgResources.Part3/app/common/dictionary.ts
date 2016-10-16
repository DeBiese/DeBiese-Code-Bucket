'use strict';

/*
Copyright (c) 2015 Fabio Landoni (http://fabiolandoni.ch/)


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
module DeBiese.Common {
    export class Dictionary<T extends number | string, U extends any>{
        private _keys: T[] = [];
        private _values: U[] = [];

        private undefinedKeyErrorMessage: string = "Key is either undefined, null or an empty string.";

        constructor(values?: Array<KeyValuePair<T, U>>) {
            if (values != null) {
                this.load(values);
            }
        }

        private isEitherUndefinedNullOrStringEmpty(object: any): boolean {
            return (typeof object) === "undefined" || object === null || object.toString() === "";
        }

        private checkKeyAndPerformAction(action: { (key: T, value?: U): void | U | boolean }, key: T, value?: U): void | U | boolean {

            if (this.isEitherUndefinedNullOrStringEmpty(key)) {
                throw new Error(this.undefinedKeyErrorMessage);
            }

            return action(key, value);
        }

        public add(key: T, value: U): void {

            var addAction = (key: T, value: U): void => {
                if (this.containsKey(key)) {
                    throw new Error("An element with the same key already exists in the dictionary.");
                }

                this._keys.push(key);
                this._values.push(value);
            };

            this.checkKeyAndPerformAction(addAction, key, value);
        }

        public changeValueForKey(key: T, newValue: U): void {

            var changeValueForKeyAction = (key: T, newValue: U): void => {
                if (!this.containsKey(key)) {
                    throw new Error("In the dictionary there is no element with the given key.");
                }

                var index = this._keys.indexOf(key);
                this._values[index] = newValue;
            }

            this.checkKeyAndPerformAction(changeValueForKeyAction, key, newValue);
        }

        public clear(): void {
            this._keys = [];
            this._values = [];
        }

        public containsKey(key: T): boolean {

            var containsKeyAction = (key: T): boolean => {
                if (this._keys.indexOf(key) === -1) {
                    return false;
                }
                return true;
            };

            return <boolean>this.checkKeyAndPerformAction(containsKeyAction, key);
        }

        public count(): number {
            return this._values.length;
        }

        public getValue(key: T): U {

            var getValueAction = (key: T): U => {
                if (!this.containsKey(key)) {
                    return null;
                }

                var index = this._keys.indexOf(key);
                return this._values[index];
            }

            return <U>this.checkKeyAndPerformAction(getValueAction, key);
        }

        public keys(): T[] {
            return this._keys;
        }

        public load(values: Array<KeyValuePair<T, U>>, clearDictionary?: boolean): void {
            const self = this;

            if (clearDictionary != null && clearDictionary == true)
                self.clear();

            values.forEach(kvp => {
                self.add(kvp.key, kvp.value);
            });
        }

        public remove(key: T): boolean {

            var removeAction = (key: T): boolean => {
                if (!this.containsKey(key)) {
                    return false;
                }

                var index = this._keys.indexOf(key);
                this._keys.splice(index, 1);
                this._values.splice(index, 1);

                return true;
            };

            return <boolean>(this.checkKeyAndPerformAction(removeAction, key));
        }

        public values(): U[] {
            return this._values;
        }
    }
}
window.onload = () => {
    removeOldInstances();
}

function removeOldInstances() {
    var collectionInstances = [];
    var localStorageItems = [];

    for (var key in window) {
        if (window[key] instanceof Collection) {
            collectionInstances.push(window[key].collectionName);
        }
    }

    for (var key in localStorage) {
        localStorageItems.push(key);
    }

    for (var c = 0; c < collectionInstances.length; c++) {
        for (var l = 0; l < localStorageItems.length; l++) {
            if (collectionInstances[c] === localStorageItems[l]) {
                localStorageItems.splice(l, 1);
            }
        }
    }

    for (var l = 0; l < localStorageItems.length; l++) {
        localStorage.removeItem(localStorageItems[l]);
    }
}

class Collection {

    constructor(collectionName) {
        this.collectionName = collectionName;
        this.createCollection();
    }

    collectionExist() {
        var keysArray = [];
        var exist;
        for (var key in localStorage) {
            keysArray.push({
                [key]: localStorage[key]
            })
        }
        exist = keysArray.some((elem, index) => {
            if (localStorage.key(index) === this.collectionName) {
                return true;
            } else {
                return false;
            }
        });
        return exist;
    }

    createCollection() {
        if (!this.collectionExist()) {
            localStorage.setItem(this.collectionName, JSON.stringify([]));
        }
    }

    stringifyCollection(collection) {
        localStorage.setItem(this.collectionName, JSON.stringify(collection));
    }

    generateID() {
        var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var jumble = function() {
            var jumbleString = '';
            for (let i = 0; i < 5; i++) {
                jumbleString += alpha.charAt(Math.floor(Math.random() * alpha.length));
            }
            return jumbleString;
        }
        return `${jumble()}${jumble()}`;
    }

    parameterType(parameter) {
        return Object.prototype.toString.call(parameter);
    }

    findAll() {
        return JSON.parse(localStorage.getItem(this.collectionName));
    }

    reset() {
        var collection = this.findAll();
        collection = [];
        this.stringifyCollection(collection);
        return `Your collection ${this.collectionName} has been reset successfully.`;
    }

    count() {
        return this.findAll().length;
    }

    insert(data = {}) {
        var collection = this.findAll();
        var type = this.parameterType(data);
        if (type === '[object Object]') {
            data['_id'] = this.generateID();
            collection.push(data);
            this.stringifyCollection(collection);
            return `Your document '${data._id}' has been inserted into ${this.collectionName} collection.`;
        } else {
            return `Argument must be an object.`;
        }
    }

    findIndex(documentID) {
        var collection = this.findAll();
        var type = this.parameterType(documentID);
        if (type === '[object String]') {
            var documentIndex = function() {
                for (var i = 0; i < collection.length; i++) {
                    if (collection[i]._id === documentID) {
                        return i;
                    }
                }
            }
            if (documentIndex() === undefined) {
                return `Document doesn't exist.`;
            } else {
                return documentIndex();
            }
        } else {
            return `Argument must be a string.`;
        }
    }

    find(documentID) {
        var collection = this.findAll();
        var type = this.parameterType(documentID);
        if (type === '[object String]') {
            var currentDocument = collection[this.findIndex(documentID)];
            if (currentDocument === undefined) {
                return `Document doesn't exist.`;
            } else {
                return currentDocument;
            }
        } else {
            return `Argument must be a string.`;
        }
    }

    remove(documentID) {
        var collection = this.findAll();
        var type = this.parameterType(documentID);
        if (type === '[object String]') {
            var currentIndex = this.findIndex(documentID);
            if (typeof currentIndex === 'number') {
                collection.splice(currentIndex, 1);
                this.stringifyCollection(collection);
                return `Your document '${documentID}' has been removed successfully.`;
            } else {
                return `Document doesn't exist.`
            }
        } else {
            return `Argument must be a string.`;
        }
    }

    update(documentID, data = {}) {
        var collection = this.findAll();
        var typeString = this.parameterType(documentID);
        var typeObject = this.parameterType(data);
        if (typeObject === '[object Object]' && typeString === '[object String]') {
            var currentIndex = this.findIndex(documentID);
            if (typeof currentIndex === 'number') {
                var currentDocument = this.find(documentID);
                var currentDocumentID = currentDocument._id;
                data['_id'] = currentDocumentID;
                collection[currentIndex] = data;
                this.stringifyCollection(collection);
                return `Your document '${data._id}' has been updated successfully.`;
            } else {
                return currentIndex;
            }
        } else {
            return `First argument must be a string and second argument must be an object.`;
        }
    }
}

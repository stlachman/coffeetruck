(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        this.data = {};
    }
    // Give DataStore.prototype the property add and assign function
    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };
    // Accepts key, looks up value, returns it
    DataStore.prototype.get = function (key) {
        return this.data[key];
    };
    // Returns reference to data propery
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    // Removes key/value pair from object
    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
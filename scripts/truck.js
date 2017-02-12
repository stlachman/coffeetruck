(function (window) {
    'use strict';
    var App = window.App || {};

// Declare parameters and assign properties to instance
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }
// Store order info using add method
    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };
// Remove order from db upon delivery
    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;
})(window);
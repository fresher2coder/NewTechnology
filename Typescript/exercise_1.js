// 1. A function that takes a tuple as an argument
// Let's assume we have a function to process user orders, where each order is represented by a tuple with product name (string) and quantity (number).
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function processOrder(order) {
    var product = order[0], quantity = order[1];
    return "Order received for ".concat(quantity, " of ").concat(product, ".");
}
var order = ["Laptop", 2];
console.log(processOrder(order)); // Output: "Order received for 2 of Laptop."
// Creating a customer and a product using the above interface and type
var customer = {
    id: 1,
    name: "Dineshkumar Thangavel",
    email: "dinesh@mail.com",
};
var product = {
    id: 101,
    name: "Laptop",
    price: 1200,
};
console.log("Customer: ".concat(customer.name, ", Product: ").concat(product.name, ", Price: $").concat(product.price));
var user1 = customer; // A customer
var user2 = { name: "Divya", guest: true }; // A guest user
console.log(user1);
console.log(user2);
var orderDetails = __assign(__assign({}, customer), product);
console.log(orderDetails);

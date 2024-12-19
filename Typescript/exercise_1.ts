// 1. A function that takes a tuple as an argument
// Let's assume we have a function to process user orders, where each order is represented by a tuple with product name (string) and quantity (number).

function processOrder(order: [string, number]): string {
  const [product, quantity] = order;
  return `Order received for ${quantity} of ${product}.`;
}

const order: [string, number] = ["Laptop", 2];
console.log(processOrder(order)); // Output: "Order received for 2 of Laptop."

// 2. An object using both interface and type

// Interface to represent a customer
interface Customer {
  id: number;
  name: string;
  email: string;
}

// Type to represent a product
type Product = {
  id: number;
  name: string;
  price: number;
};

// Creating a customer and a product using the above interface and type
const customer: Customer = {
  id: 1,
  name: "Dineshkumar Thangavel",
  email: "dinesh@mail.com",
};

const product: Product = {
  id: 101,
  name: "Laptop",
  price: 1200,
};

console.log(
  `Customer: ${customer.name}, Product: ${product.name}, Price: $${product.price}`
);

// 3. mails of union and intersection types

// Union Type: A user can either be a customer or a guest (not both at the same time)
type UserA = Customer | { name: string; guest: true };

const user1: UserA = customer; // A customer
const user2: UserA = { name: "Divya", guest: true }; // A guest user

console.log(user1);
console.log(user2);

// Intersection Type: An order can include both customer information and product details
type OrderDetails = Customer & Product;

const orderDetails: OrderDetails = {
  ...customer,
  ...product,
  // We now have an order with both customer and product details
};

console.log(orderDetails);

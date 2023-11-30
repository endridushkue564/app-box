/* 
Filename: ComplexApp.js
Content: A complex and sophisticated JavaScript application
*/

// Define a class for managing user information
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
    console.log(`${this.name} logged in successfully.`);
  }

  logout() {
    this.loggedIn = false;
    console.log(`${this.name} logged out successfully.`);
  }
}

// Create users
const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

// Define a class for managing products
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}

// Create products
const product1 = new Product("iPhone 12", 999.99);
const product2 = new Product("MacBook Pro", 1999.99);

// Define a class for managing shopping cart
class ShoppingCart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addToCart(product) {
    this.items.push(product);
    console.log(`${product.name} added to the cart.`);
  }

  removeFromCart(product) {
    const index = this.items.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${product.name} removed from the cart.`);
    } else {
      console.log(`${product.name} is not in the cart.`);
    }
  }

  checkout() {
    let totalPrice = 0.0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    this.items = [];
    console.log("Checkout completed.");
  }
}

// Create shopping carts for users
const cart1 = new ShoppingCart(user1);
const cart2 = new ShoppingCart(user2);

// Interact with the application
user1.login();
cart1.addToCart(product1);
cart1.addToCart(product2);

user2.login();
cart2.addToCart(product1);
cart2.removeFromCart(product1);
cart2.addToCart(product2);

cart1.checkout();
user1.logout();

cart2.checkout();
user2.logout();

/* 
This is just a simplified example to demonstrate the use of classes to manage user, product, and shopping cart information. In a real-world application, you would have more complex logic, data persistence, user authentication, and other features.
*/
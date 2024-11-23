console.log("Hello World");

// 1
class Car {
  constructor(model, year, make) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(model, year, make);
    this.batteryLevel = batteryLevel;
  }
}

const electricCar = new ElectricCar(2009, "Mercedes", 3, 87);

// 3

class Employee {
  calculateSalery = (hourlyRate, hoursWorked) => {
    const salery = hourlyRate * hoursWorked;
    console.log(salery);
  };
}
const newEmployee = new Employee();

newEmployee.calculateSalery(20, 20);

// 4

class ShoppingCart {
  #cart = [];
  addItem = (name, price, amount) => {
    this.#cart = [...prev, { name, price, amount }];
  };
  deleteItem = (name) => {
    this.#cart = this.#cart.filter((element) => element.name !== name);
  };
  updateItem(name, amount) {
    this.#cart.forEach((element) => {
      if (element.name === name) {
        element.amount = amount;
      }
    });
  }
  calculateTotal() {
    let total = 0;
    this.#cart.forEach(
      (element) => (totalPrice += element.itemAmount * element.itemPrice)
    );
    console.log(total);
  }
}

const cart = new ShoppingCart();

// 2

class Library {
  #list = [];
  addBook = (author, book, year) => {
    this.#list = [...prev, { author, book, year }];
  };
  removeBook = (book) => {
    this.#list = this.#list.filter((element) => element.book !== book);
  };
  listBooks = () => {
    console.log(this.#list);
  };
}

const library = new Library();

// 5

class CarFactory {
  #list = [];
  addCar = (model, price) => {
    this.#list = [
      ...prev,
      {
        year: Math.floor(Math.random() * 14) + 2010,
        model: model,
        price: price,
      },
    ];
  };
  deleteCar = (model) => {
    this.#list = this.#list.filter((element) => {
      element !== model;
    });
  };
  updateCar = (price, name) => {
    this.#list.forEach((element) => {
      if (element.name === name) {
        element.price = price;
      }
    });
  };
  getAllCars = () => {
    console.log(this.#list);
  };
}

const carFactory = new CarFactory();

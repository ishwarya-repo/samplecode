//This keyword
let student = {
    name: "Raj",
    speak() {
      console.log("Hi, I'm " + this.name);
    }
  };
  
  student.speak(); // Hi, I'm Raj

  //Factory Function (One function creates multiple students.)
  function createStudent(name, age) {
    return {
      name,
      age,
      intro() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
      }
    };
  }
  
  let s1 = createStudent("Priya", 17);
  s1.intro(); // Hi, I'm Priya, 17 years old

  //Constructor Function 
  //Imagine you have a blueprint for a house. Using that blueprint, you can build many houses, each with the same design.

  function House(type) {
    this.type = type;
  }
  
  let myHouse = new House("Bungalow");
  console.log(myHouse.type);  // Output: "Bungalow"

  //Object.create()
  //Think of a child learning things from their parent. The child might not know everything, but they inherit some things (like behavior or habits) from the parent.
  let parent = {
    talk: function() {
      console.log("Talking...");
    }
  };
  
  let child = Object.create(parent);
  child.talk();  // Output: "Talking..."

  
//PROTOTYPE 
  //A dog inherits certain traits from its parent animal, like barking.
  function Animal() {
    this.type = "Animal";
  }
  
  Animal.prototype.speak = function() {
    console.log("Animal speaks");
  };
  
  let dogs = new Animal();
  dogs.speak();  // Output: "Animal speaks"

  

  //Inheritance 
  class Animal {
    speak() {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Dog barks");
    }
  }
  
  let dogie = new Dog();
  dogie.speak(); // Dog barks


  //CLASSES
//A recipe tells you how to make a cake. You can use the recipe multiple times to create different cakes.

function Animal() {
    this.type = "Animal";
}

Animal.prototype.speak = function() {
  console.log("Animal speaks");
};

let dog = new Animal();
dog.speak();  // Output: "Animal speaks"

//ENCAPSULATION
//Your bank account keeps your balance private. You can't directly access the balance; you only do it using methods like deposit() or withdraw().
class BankAccount {
    #balance = 0;  // private property
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  let account = new BankAccount();
  account.deposit(500);
  console.log(account.getBalance());  // Output: 500

  
  //Abstraction
  //When you use a car, you don’t need to know exactly how the engine works. You just press the gas pedal.

  class Car {
    start() {
      this.#startEngine();
      console.log("Car started");
    }
  
    #startEngine() {
      console.log("Engine starting...");
    }
  }
  
  let myCar = new Car();
  myCar.start();  // Output: "Engine starting... Car started"

  //Polymorphism . A person and a robot both know how to drive a car, but they do it in different ways.
  class Car {
    drive() {
      console.log("Driving a car");
    }
  }
  
  class RobotCar extends Car {
    drive() {
      console.log("Robot is driving the car");
    }
  }
  
  let car = new Car();
  let robotCar = new RobotCar();
  
  car.drive();      // Output: "Driving a car"
  robotCar.drive(); // Output: "Robot is driving the car"
  

  //Synchronous (Sync) programming is like waiting in line. You can’t do anything until it’s your turn.
//Asynchronous (Async) programming is like ordering food, then going off to do something else while waiting.
console.log("Step 1");
setTimeout(() => {
  console.log("Step 2");
}, 1000);
console.log("Step 3");  // Step 3 happens first (Async)

//Callback Hell
//Imagine calling one friend, who then calls another friend, and so on. This leads to a messy situation.

function first(callback) {
    setTimeout(() => {
      console.log("First done");
      callback();
    }, 1000);
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log("Second done");
      callback();
    }, 1000);
  }
  
  first(() => {
    second(() => {
      console.log("Both done");
    });
  });

  
  //Promise 
  //Promises are like ordering pizza. The pizza will arrive later, but you don’t have to wait doing nothing. You can do other things while waiting.

  let pizza = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza is ready!");
    }, 2000);
  });
  
  pizza.then(result => {
    console.log(result);  // Output: "Pizza is ready!"
  });
  
// method -> object
// function -> window, global

// Arrow functions take the scope of the parent function 
// and don't bind themselves to the global scope
const book = {
  title: 'The title',
  authors: ["John", "Mark", "Rob"], 
  read() {
    console.log(this)
  },
  printAuthors() {
    this.authors.forEach((author) => {
      console.log(this.title, ' - ', author);
    })
  }
}

// book.printAuthors();

// book.read()
// book.stopReading = function() {
//   console.log(this) // this = book
// }

// book.stopReading()

// function watchMovie() {
//   console.log(this); // this = window
// }

// watchMovie();

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.points = 0;
//   }

//   login() {
//     console.log(this.name, "has logged in");
//   }

//   logout() {
//     console.log(this.name, "has logged out");
//   }

//   addPoint() {
//     this.points++;
//     console.log('total points', this.points);
//   }
// }

// const user = new User("John", "john@gmail.com");
// console.log(user)

// constructor functions always generate an empty object first
function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User.prototype.login = function() {
  console.log(this.name, "has logged in");
}

User.prototype.logout = function() {
console.log(this.name, "has logged out");
}

User.prototype.addPoint = function() {
  this.points++;
  console.log('total points', this.points);
}

function AdminUser(name, email, peopleReporting) {
  User.apply(this, [name, email]);
  this.peopleReporting = peopleReporting;
}
AdminUser.prototype = Object.create(User.prototype);
AdminUser.prototype.updatePeopleReporting = function(newNumber) {
  this.peopleReporting = newNumber;
}

const user = new User("John", "john@gmail.com");
const adminUser = new AdminUser("Mark", "mark@gmail.com", 10);
// console.log(adminUser);
// console.log(user);
// user.login();
// user.addPoint();

const book2 = {
  title: "The title",
  pages: 300,
  author: "John"
}

// const book3 = new Object();
// book3.title = "Book 2 title";
// book3.pages = 350;
// book3.author = "Mark";

// console.log(book3);

// Property descriptors
// value => The value of the property
// writable (boolean) -> weather this property in question is writable or not
// enumerable (boolean) -> weather you can enumerate or loop through this property
// configurable (boolean) -> The configurable property tells weather the user has permission to change property descriptor such as to change the value of writable and enumerable settings

// console.log(Object.getOwnPropertyDescriptors(book2));

const bookObj = new Object();

Object.defineProperty(bookObj, "title", {value: "This is the title", writable: true, enumerable: true, configurable: true});
Object.defineProperty(bookObj, "author", {value: "John", writable: false, enumerable: true, configurable: true});

console.log(bookObj);
bookObj.author = "Mark";
console.log(bookObj);


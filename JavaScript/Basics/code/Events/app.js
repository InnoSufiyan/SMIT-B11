// function User(firstName, lastName, age, email) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.email = email;
//   this.fullName = firstName + " " + lastName;
//   // this.dateOfBirth = function() {
//   //   var date = new Date()
//   //   return date.getFullYear() - this.age
//   // }
// }

// User.prototype.dateOfBirth = function () {
//   var date = new Date();
//   return date.getFullYear() - this.age;
// };
// const user1 = new User("Muhammad", "Sufiyan", 33, "inno@gmail.com");
// const user2 = new User("Umer", "Farooq", 18, "umer@gmail.com");
// const user3 = new User("aqib", "Yousuf", 18, "aqib@gmail.com");
// const user4 = new User("Tanzeel", "khan", 18, "tanzeel@gmail.com");
// const user5 = new User("Umer", "Farooq", 18, "umer@gmail.com");
// const user6 = new User("Umer", "Farooq", 18, "umer@gmail.com");
// const user7 = new User("Umer", "Farooq", 18, "umer@gmail.com");
// const user8 = new User("Umer", "Farooq", 18, "umer@gmail.com");
// const user9 = new User("Umer", "Farooq", 18, "umer@gmail.com");
// const user10 = new User("Umer", "Farooq", 18, "umer@gmail.com");

try {
  const password = prompt('Write your password')
  if(password.length < 8) {
    throw new Error('password should be minimum 8 characters long')
  }
} catch (err) {
  console.log('mera code phata hai', err)
}

console.log("hellooooooooo");

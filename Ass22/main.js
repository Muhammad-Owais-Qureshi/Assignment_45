"use strict";
// 28 Task Stages of Life:Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
Object.defineProperty(exports, "__esModule", { value: true });
let PersonAge = 25;
//• If the person is less than 2 years old, print a message that the person is a baby.
if (PersonAge < 3) {
    console.log('The person is a baby.');
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (PersonAge < 4) {
    console.log("The person is a toddler.");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (PersonAge < 13) {
    console.log("The person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (PersonAge < 13) {
    console.log("The person is a teenager.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (PersonAge < 35) {
    console.log("The person is a adult.");
}
//if the person is age 65 or older, print a message that the person is an elder.
else if (PersonAge <= 65) {
    console.log("The person is a elder.");
}
// Task 29 Favorite Fruit:Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let FavFruit = ['Mango', 'Banana', 'Orange'];
//Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (FavFruit[1]) {
    console.log("such as i really like bananas!");
}
;
if (FavFruit[2]) {
    console.log("such as i really like Oranges!");
}
;
if (FavFruit[0]) {
    console.log("such as i really like Mango!");
}
if (FavFruit[0]) {
    console.log("Mango arrive in summer");
}
if (FavFruit[2]) {
    console.log("Oranges arrive in winter");
}
let Admin = ['Farooq', 'Rehan', 'Mudabbir', 'Ahmad', 'Ali', 'Admin Owais'];
for (let i = 0; i < 4; i++) {
    console.log(`"Hello ${Admin[i]}, thank you for logging in again."`);
}
if (Admin[5]) {
    console.log(Admin[5], "Hello Admin, would you like to see a status report ? ");
}
else {
    console.log("Not Found");
}
// Task 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
let Admin1 = ['Farooq', 'Rehan', 'Mudabbir', 'Ahmad', 'Ali', 'Admin Owais'];
Admin1.splice(0, 6);
if (Admin1) {
    console.log('We need to find some users!');
}
// Task 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
const CurrentUser = ['Farooq', 'Rehan', 'Mudabbir', 'Ahmad', 'Ali'];
const NewUserName = ['Farooq', 'Rehan', 'Kashif', 'Imran', 'Rahil'];
for (const CUser of NewUserName) {
    if (CurrentUser.includes(CUser)) {
        console.log(`${CUser} you will need to enter a new username.`);
    }
    else {
        console.log(`${CUser} username is available.`);
    }
}
// Task 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const arry of arr) {
    let Ordinal;
    if (arry === 1) {
        Ordinal = "st";
    }
    else if (arry === 2) {
        Ordinal = "nd";
    }
    else if (arry === 3) {
        Ordinal = "rd";
    }
    else if (arry === 4) {
        Ordinal = "th";
    }
    else if (arry === 5) {
        Ordinal = "th";
    }
    else if (arry === 6) {
        Ordinal = "th";
    }
    else if (arry === 7) {
        Ordinal = "th";
    }
    else if (arry === 8) {
        Ordinal = "th";
    }
    else if (arry === 9) {
        Ordinal = "th";
    }
    console.log(`${arry}${Ordinal}`);
}
// Task 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
const pizza = ['peperoni pizza', 'BBQ pizza', 'Italian pizza'];
for (const piz of pizza) {
    let sentance;
    if (piz === 'peperoni pizza') {
        sentance = 'i love peperoni pizza';
    }
    else if (piz === 'BBQ pizza') {
        sentance = 'Mostly people like BBQ pizza';
    }
    else if (piz === 'Italian pizza') {
        sentance = 'I realy like Italian pizza';
    }
    console.log(sentance);
}
console.log('peperoni pizza Spicy & satisfying classic, perfect for meat lovers.');
console.log('BBQ pizza a delicious adventure for your taste buds!');
console.log('Italian pizza authentic Italian pizza thin, crispy crust, simple & fresh toppings, symphony of flavors in every bite');
console.log('i like pizza');
// Task 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! 
const Aniaml = ['goat', 'cow', 'camel'];
for (let i = 0; i < Aniaml.length; i++) {
    console.log(Aniaml[i]);
}
for (const ani of Aniaml) {
    let habbit;
    if (ani === 'goat') {
        habbit = 'goat is a very cleaver pet';
    }
    else if (ani === 'cow') {
        habbit = 'cow is a make a great pet';
    }
    else if (ani === 'camel') {
        habbit = 'i like camel';
    }
    console.log(habbit);
}
console.log('cow,goat,camel, a great pet for milk ');

"use strict";
// Task 14 Guest List:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ['Farooq', 'Mudabbir', 'Owais'];
console.log('Salam', "", Guest[0], ' i invite tonight dinner with me');
console.log('Salam', "", Guest[1], ' i invite tonight dinner with me');
console.log('Salam', "", Guest[2], ' i invite tonight dinner with me');
// Task 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let Guest2 = ['Farooq', 'Mudabbir', 'Owais'];
console.log('Salam', "", Guest2[0], ' i invite tonight dinner with me');
console.log('Salam', "", Guest2[1], ' i invite tonight dinner with me');
console.log('Salam', "", Guest2[2], ' i invite tonight dinner with me');
console.log(Guest2.pop(), '"Sorry you can`t make it"');
// Task 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let Guests4 = ['Farooq', 'Mudabbir', 'Owais'];
console.log("Hi", Guests4[0], "I got new big table for dinner");
console.log("Hi", Guests4[1], "I got new big table for dinner");
console.log("Hi", Guests4[2], "I got new big table for dinner");
//  Add one new guest to the beginning of your array.
Guests4.unshift("Ali");
console.log(Guests4);
// Add one new guest to the middle of your array
Guests4.splice(2, 0, "Imran");
console.log(Guests4);
// Use append() to add one new guest to the end of your list.
Guests4.push("Jibran");
// Print a new set of invitation messages, one for each person in your list.
console.log(Guests4);
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('Hi', Guests4[0], "i invite you tonight dinner with me");
console.log('Hi', Guests4[1], "i invite you tonight dinner with me");
console.log('Hi', Guests4[2], "i invite you tonight dinner with me");
console.log('Hi', Guests4[3], "i invite you tonight dinner with me");
console.log('Hi', Guests4[4], "i invite you tonight dinner with me");
console.log('Hi', Guests4[5], "i invite you tonight dinner with me");
console.log("i can invite only two people for dinner");
// Task 17 Shrinking Guest List:
let NewGuests = ['Farooq', 'Mudabbir', 'Rehan', 'Ali', 'Imran', 'Jibran'];
for (let i = 0; i < 4; i++) {
    console.log(NewGuests[i], 'i am sorry you can`t invite them to dinner.');
}
// Delete Guest
NewGuests.splice(0, 4);
// remaining Guest
console.log(NewGuests);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(NewGuests[0], "you stile Invited");
console.log(NewGuests[1], "you stile Invited");
// Delete Guest
console.log(NewGuests.pop());
console.log(NewGuests.pop());
// empty arry
console.log(NewGuests);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(Guest2.push('Ali'));
// Print a second set of invitation messages, one for each person who is still in your list.
console.log(Guest2);
//Task 18 Seeing the World: Think of at least five places in the world you’d like to visit.
const Country = ['Makkah', 'Madina', 'Sawat', 'phalistine', 'iran'];
console.log(Country);
// Alphabatical
let sort = Country.slice().sort();
console.log(sort);
//Orignal Arry
console.log(Country);
// Reverse
console.log(Country.slice().reverse());
// Orignal Arry
console.log(Country);
// again Reverse
console.log(Country.slice().reverse());
// Orignal
console.log(Country);
// Alphabetical
console.log(sort);
// Again 2 Reverse
console.log(sort.slice().reverse());
//Task 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
for (let i = 0; i < Guest.length; i++) {
    console.log(Guest[i], 'you invite tonight dinner with me');
}

"use strict";
// Task 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let AlienCoulur = "red";
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (AlienCoulur === "red") {
    console.log('Player1 earn 5 points');
}
let Version = 2.0;
if (Version === 2.0) {
    console.log("Your Version Succasfully Match");
}
//  Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
else {
    console.log('version not found');
}
//Task 26 Alien Colors #2:Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let AlienClr = 'red';
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (AlienClr === 'red') {
    console.log('player just earned 5 points');
}
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if (AlienClr !== "red") {
    console.log('player just earned 10 points.');
}
let Version1 = 2.02;
if (Version1 === 2.02) {
    console.log('version complete');
}
let version2 = 2.03;
if (version2 == 2.0) {
    console.log('version complete');
}
else {
    console.log(version2, 'version update');
}
// 27 Task Alien Colors #3:Turn your if-else chain from Exercise 5-4 into an if-else chain.
let AlienGreen = 'green';
let AlienRed = "red";
let AlienYellow = "yellow";
// If the alien is green, print a message that the player earned 5 points.
if (AlienGreen === "green") {
    console.log('player earned 5 points.');
}
//f the alien is yellow, print a message that the player earned 10 points.
else if (AlienRed === "red") {
    console.log('player earned 10 points.');
}
// If the alien is red, print a message that the player earned 15 points.
else if (AlienYellow === "yellow") {
    console.log('player earned 15 points.');
}
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
let version0 = 2.2;
let version20 = 3.3;
let version3 = 4.4;
console.log(version0, AlienGreen, 'Old version');
console.log(version20, AlienRed, 'current version');
console.log(version3, AlienYellow, 'updated version');

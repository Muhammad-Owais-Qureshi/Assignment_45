"use strict";
// Task 40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_Album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_Album('Muhammad Owais', 'Hamd O Sana.');
const album2 = make_Album('Sudais Qari', 'Al Quran');
const album3 = make_Album('Tahir Qadri', 'Naat', 16);
console.log(album1);
console.log(album2);
console.log(album3);
// Task 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians)
        console.log(magician);
}
const array2 = ['jony', 'alex', 'Imran'];
show_magicians(array2);
// Task 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magic) {
    for (let i = 0; i < array2.length; i++) {
        console.log(array2[i] + " " + "The Great");
    }
}
make_great(array2);
show_magicians(array2);
// Task 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great_new(copy) {
    let newmagician = [];
    for (let i = 0; i < array2.length; i++) {
        newmagician.push(array2[i] + " " + "The Great");
    }
    return newmagician;
}
const nmagic = ['jony', 'alex', 'Imran'];
const newmagic = make_great_new(nmagic);
console.log(nmagic);
console.log(newmagic);
// Task 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log("Sandwich Order :");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwich('Chicken', 'mayo', 'salad');
sandwich('Egg', 'Chesse');
sandwich('Chili souce');
function carInfo(manufacturer, Model, optional) {
    return Object.assign({ manufacturer,
        Model }, optional);
}
const carmodel = carInfo('Toyota', 'Supra', { Colour: 'Black', year: "2020" });
console.log(carmodel);

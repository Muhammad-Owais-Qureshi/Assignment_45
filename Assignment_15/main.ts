// Task 20 Array Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains = [
    ["Mount Everest", 8848.86], 
    ["K2", 8611],
]

  console.log(mountains[0])
  console.log(mountains[1])
  

  
// Task 21 TypeScript Object They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let Jungle = {
  Diameter: '1900Km',
  animal: "Elephant"

};

console.log(Jungle.Diameter)
console.log(Jungle.animal)

// Task 22 Intentional error:

// Task 23 Conditional Tests:  Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:


let num = 5
let car = 'red'
let fruit = 'Orange'
let num2 = "25"
let vegitable = 'Onion'
let num3 = 5
let city = 'karachi'
let Education = 'matric'
let Mob = "Oppo"
let cloth = "kurta"

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log(num == 5,'i predict its')
console.log(car == 'red')
console.log(fruit === 'Orange')
console.log(vegitable !== "chilli")
console.log(num3 !== 7 )
console.log(num2 !== "25")
console.log(cloth !== "kurta" )
console.log(Mob !== "Oppo")
console.log(Education === "master")
console.log(city === 'lahore')

// Task 24 More Conditional Tests:  You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let str = 'Karachi'
//  Tests for equality and inequality with strings
console.log(str === "kaRAcHi")
console.log(str === "Karachi")

// Tests using the lower case function
let name1 = "34"
console.log(name1!==name1.toLowerCase())


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num0 = 100
console.log(num0 < 200)
console.log(num0 > 90)
console.log(num0 <= 50)
console.log(num0 >= 50)

// Tests using "and" and "or" operators
let age = 30
let waight = 25
if(age === 30 && waight > 30 ){
    console.log('Not Allowed')
}
else if (age === 30 || waight < 30 ){
    console.log('Allowed')
}

//  Test whether an item is in a array
let arrChq = ['karachi','lahore','islamabad'] 

console.log(arrChq.includes('karachi'))

// Test whether an item is not in a array
console.log(arrChq.includes('pishawar'))

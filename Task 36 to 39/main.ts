// Task 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt (){
  let size = 'medium 20'
  let message = 'i like programming'
  console.log(`Size:${size}\n${message}`)
}

make_shirt()

//Task 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

function make_shirt1 (){
  let size1 = 'medium 20'
  let message1 = 'i like programming'
  let small = 'Small 17'
  let SmMessage = 'i like JavaScript'
  let large = 'lerge 23'
  let larMessage = 'i like TypeScript'
  console.log(`Size:${size1}\n${message1}`)
  console.log(`Size:${small}\n${SmMessage}`)
  console.log(`Size:${large}\n${larMessage}`)
  
}

make_shirt1()

// Task 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city (city:string,country = 'pakistan' ):void{
  console.log(`${city.charAt(0).toUpperCase()}${city.slice(1)} is in ${country.charAt(0).toUpperCase()}${country.slice(1)}`)
  
}
describe_city('karachi')
describe_city('riyad','saudiarab')
describe_city('gaza','phalistine')


// Task 39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

function country_city (city:string,country:string){
  console.log(`"${city}${','} ${country}"`)
  
}

country_city('karachi','Pakistan')
country_city('riyadh','saudiarab')
country_city('gaza','phalistine')

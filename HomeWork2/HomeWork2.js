/////// task 1 /////// 

let x = 1
let y = 2

let res1 = "" + x + y

console.log(res1)
console.log(typeof res1)

let res2 = "" + Boolean(x) + y

console.log(res2)
console.log(typeof res2)

let res3 = Boolean(y - x)

console.log(res3)
console.log(typeof res3)

let res4 = parseInt(Boolean(x))

console.log(res4)
console.log(typeof res4)

/////// task 2 /////// 

let entry_number = prompt('Enter number:')

if ((entry_number % 2) == 0 && entry_number >= 0) {
    console.log("Entered value is even and positive number")
} else if ((entry_number % 7) == 0) {
    console.log("Entered number is multiple of seven")
} else {
    console.log('Unrecognized value')
}

/////// task 3 /////// 

let Arr = [];

Arr[0] = 24;
Arr[1] = "How are you?"
Arr[2] = true
Arr[3] = null

let arr_length = Arr.length
document.write("Elements in the array: " + arr_length)

let newArrItem = prompt("Enter any value:")

Arr[4] = newArrItem

document.write("<br>" + Arr[4])

Arr.shift()

document.write("<br>" + Arr)

/////// task 4 /////// 

let cities = ["Rome", "Lviv", 'Warsaw']
let joined_cities = cities.join('*')
document.write(joined_cities)

/////// task 5 /////// 

let isAdult = prompt("Please enter your age:")

switch (isAdult >= 18) {
    case true:
        console.log("You are adult")
        break;
    case false:
        console.log("You are to young")
        break;
    default:
        console.log("Unrecognized value")
}

/////// task 6 /////// 

let a = parseFloat(prompt("Enter the first side of the triangle:"))
let b = parseFloat(prompt("Enter the second side of the triangle:"))
let c = parseFloat(prompt("Enter the third side of the triangle:"))

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Incorrect data")
} else {
    let p = (a + b + c) / 2
    let area = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2)
    console.log("Area of a triangle = " + area.toFixed(3))
}

/////// task 7 /////// 

let current = new Date();
let hour = current.getHours();

// ---- case1
if (hour >= 5 && hour < 11) {
    console.log("Good morning")
} else if (hour >= 11 && hour < 17) {
    console.log("Good day")
} else if (hour >= 17 && hour < 23) {
    console.log("Good evening")
} else {
    console.log("Good night")
}

// ---- case2
switch (hour) {
    case (hour >= 5 && hour < 11):
        console.log("Good morning");
        break;
    case (hour >= 11 && hour < 17):
        console.log("Good day");
        break;
    case (hour >= 17 && hour < 23):
        console.log("Good evening")
        break;
    default:
        console.log("Good night")
}


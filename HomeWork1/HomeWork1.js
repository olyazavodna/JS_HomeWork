// Task2
console.log("Zavodna")

// Task3
let a
let b
a = "First"
b = "Second"
document.write(a, "<br>", b, "<br>")
a = b
document.write(a, "<br>", b, "<br>")

// Task4
let Pet = {}
Pet = {
    name: "Napolean",
    age: 12,
    isCat: true,
    weight: undefined,
    temper: null
}

// Task5
let isAdult = confirm("Сonfirm that you are an adult")
alert(isAdult)

// Task6
let firstName
let lastName
let group
let yearOfBirth

firstName = "Olha"
lastName = "Zavodna"
group = "JavaScript"
yearOfBirth = 1986

let isMarried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof group)
console.log(typeof yearOfBirth)
console.log(typeof isMarried)

console.log(yearOfBirth,isMarried,firstName)

let itIsNull
itIsNull = null

let unknown

console.log(typeof itIsNull)
console.log(typeof unknown)

// Task7

let login = prompt("What is your login?")
let mail = prompt("What is your email?")
let password = prompt("What is your password?")

document.write("Dear "+login+", your email is "+mail+", your password is "+password+".")

// Task8

const minute = 60

let hour = minute * 60
let day = hour * 24
let month = day * 31

document.write("<br>Seconds in 1 hour = "+hour+" Seconds in 24 hours = "+day+" Seconds in 1 month = "+month)

/////// task 1 /////// 

function checkUpperCase(str) {
    let regExp1 = /^[A-Z]/
    if (regExp1.test(str) == true) {
        return console.log("String's starts with uppercase character")
    } else {
        return console.log("String's not starts with uppercase character")
    }
}
let str1 = "regexp";
let str2 = "RegExp"

checkUpperCase(str1)
checkUpperCase(str2)

/////// task 2 /////// 

function checkEmail(email) {
    let regExp = /[a-zA-Z0-9]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,5}/
    if (regExp.test(email) == true) {
        return console.log("true")
    } else {
        return console.log("false")
    }
}
checkEmail("Qmail2@gmail.com")

/////// task 5 /////// 

let str = 'Java Script'
str.replace(/(\w+)\s(\w+)/, "$2, $1")

/////// task 6 /////// 

function checkEmail(email) {
    let regExp = /^[a-zA-Z0-9]+[-\w]*[\w]*@[a-zA-Z]+\.[a-zA-Z]{2,5}$/
    if (regExp.test(email) == true) {
        return console.log("Email is correct!")
    } else {
        return console.log("Email is not correct!")
    }
}
checkEmail("my_mail1-mail2_mai3@gmail.com")
checkEmail("#my_mail@gmail.com")

/////// task 7 /////// 

function checkLogin(login) {
    let regExp = /^(?=.{2,10}$)([A-Za-z]+(\d+([.]\d+)?)?)+$/
    let regExpNumbers = /\d+(\.\d+)?/g
    if (regExp.test(login) == true) {
        return console.log("true" + "\n" + login.match(regExpNumbers))
    } else {
        return console.log("false" + "\n" + login.match(regExpNumbers))
    }
}
checkLogin("ee1.1ret3")
checkLogin("ee1*1ret3")


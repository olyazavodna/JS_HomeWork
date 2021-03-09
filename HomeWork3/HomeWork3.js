/////// task 1 /////// 

let Arr = [2, 3, 4, 5]

// case 1
let res = 1
for (let i in Arr) {
    res *= Arr[i]
}
console.log("result:" + res)

// case 2
let res1 = 1
let i = 0
while (i < Arr.length) {
    res1 *= Arr[i];
    i++;
}
console.log("result1:" + res1)

/////// task 2 /////// 

for (let count = 0; count <= 15; count++) {
    if ((count % 2) == 0) {
        document.write(count + " is even" + "<br>")
    } else {
        document.write(count + " is odd" + "<br>")
    }
}

/////// task 3 /////// 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randArray(count) {
    let randArr = [];
    for (let i = 1; i <= count; i++) {
        let random = getRandomIntInclusive(1, 500)
        randArr.push(random)
    }
    return randArr
}

/////// task 4 /////// 

let x = parseInt(prompt("Enter first number"));
let y = parseInt(prompt("Enter second number"));

(function raiseToDegree(a, b) {
    if (isNaN(a) || isNaN(b)) {
        document.write("Entered values are incorrect")
    } else {
        result = (a ** b)
        document.write(result)
    }
    return
}(x, y))

/////// task 5 /////// 

function findMin() {
    let min = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        }
    }
    return min
}

/////// task 6 /////// 

function findUnique(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                return false
            }
        }
    }
    return true
}

/////// task 7 ///////

function lastElem(array, count) {
    if (count === undefined) {
        count = 1;
    }
    return array.slice(array.length - count, array.length)

}

/////// task 8 ///////

function capitalize(str) {
    return str
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1) })
        .join(" ")
}
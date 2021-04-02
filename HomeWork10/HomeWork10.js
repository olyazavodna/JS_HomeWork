/////// task 1 /////// 

function getPromise(message, delay) {
    return new Promise(
        resolve => { setTimeout(() => resolve(message), delay) }
    )
}

getPromise("test promise", 2000).then(function (data) {
    console.log(data);
})

/////// task 2 /////// 

function calcArrProduct(arr) {

    return new Promise(function (resolve, reject) {
        let res = 1
        for (let i of arr) {
            if (typeof i === "number") {
                res *= i
            } else {
                resolve(" Error! Incorrect array! ")
            }
        }
        resolve(res)
    })
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

/////// task 3 /////// 

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    let promise = delay(0, Math.floor(Math.random() * 3000))
    for (let i = 1; i <= 10; i++) {
        promise = promise.then(result => {
            console.log(result)
            return delay(i, Math.floor(Math.random() * 3000))
        })
    }
    promise.then(result => {
        console.log(result)
    })
}
showNumbers();


/////// task 4 /////// 

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        let timeOut = Math.floor(Math.random() * 3000)
        let result = await delay(i, timeOut)
        console.log(result)
    }
}
showNumbers();
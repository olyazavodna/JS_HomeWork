/////// task 1 /////// 


function calcRectangleArea(h, w) {
    if (typeof h !== "number" || typeof w !== "number" || isNaN(h) || isNaN(w)) {
        throw new Error("Error: entry parameters are not numbers");
    } else return h * w
}

try {
    console.log(calcRectangleArea(5, "qqq"))
} catch (err) {
    console.log(err);
}

/////// task 2 /////// 

function checkAge() {
    try {
        let age = prompt("Enter your age:");
        let ageInt = parseInt(age);

        if (ageInt < 14) {
            throw new Error("You are to young");
        } else if (age === null || age.length === 0) {
            throw new Error("The field is empty");
        } else if (isNaN(ageInt)) {
            throw new Error("Age is not a number");
        }
        alert("Now you can watch the movie")

    } catch (err) {
        alert(err);
    }
}
checkAge()

/////// task 3 /////// 


class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    if (month >= 1 && month <= 12) {
        return months[month - 1]
    } else {
        throw new MonthException("Incorrect month number")
    }
}

try {
    console.log(showMonthName(7));
    console.log(showMonthName(19));
} catch (err) {
    console.log(err)
}

/////// task 4 /////// 

function showUser(id) {
    if (id < 0) {
        throw new Error("Id must not be negative")
    } else {
        return { id: id }
    }
}

function showUsers(ids) {
    let newIds = [];
    for (let i in ids) {
        try {
            newIds.push(showUser(ids[i]))
        } catch (err) {
            console.log(err)
        }
    } return newIds
}

showUsers([7, -12, 44, 22])

/////// task 1 /////// 

function propsCount(currentObject) {
    let count = 0;
    for (k in currentObject)
        if (currentObject.hasOwnProperty(k)) count++;
    return count;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

propsCount(mentor)

/////// task 2 ///////

let employee = {
    firstName: "James",
    lastName: "Bond",
    age: 45,
    job: "agent",
    number: "007"
}

function showProps(obj) {
    let keys = [];
    let values = [];
    for (let key in obj) {
        keys.push(key);
        values.push(obj[key])
    }
    return [keys, values]
}

showProps(employee)

/////// task 3 ///////

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return this.surname + " " + this.name + " " + midleName
    }
    showCourse() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year

    }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse())

/////// task 4 ///////

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #experience = 1.2;

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }
}

let sortedSalary = []

let worker1 = new Worker("John Johnson", 20, 23);
let fullName1 = worker1.fullName
console.log(fullName1);
console.log(fullName1 + " salary: " + worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log(fullName1 + " salary: " + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(fullName1 + " salary: " + worker1.showSalaryWithExperience());
let newestSalary1 = {
    name: fullName1,
    salary: worker1.showSalaryWithExperience(),
}
sortedSalary.push(newestSalary1)

let worker2 = new Worker("Tom Tomson", 125, 15);
let fullName2 = worker2.fullName
console.log(fullName2);
console.log(fullName2 + " salary: " + worker2.showSalary());
console.log("New experience: " + worker2.experience);
console.log(fullName2 + " salary: " + worker2.showSalaryWithExperience());
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(fullName2 + " salary: " + worker2.showSalaryWithExperience());
let newestSalary2 = {
    name: fullName2,
    salary: worker2.showSalaryWithExperience(),
}
sortedSalary.push(newestSalary2)

let worker3 = new Worker("Andy Ander", 55, 21);
let fullName3 = worker3.fullName
console.log(fullName3);
console.log(fullName3 + " salary: " + worker3.showSalary());
console.log("New experience: " + worker3.experience);
console.log(fullName3 + " salary: " + worker3.showSalaryWithExperience());
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(fullName3 + " salary: " + worker3.showSalaryWithExperience());
let newestSalary3 = {
    name: fullName3,
    salary: worker3.showSalaryWithExperience(),
}
sortedSalary.push(newestSalary3)

sortedSalary.sort(function(a, b) { return a.salary - b.salary; })

console.log("Sorted salary: ")
sortedSalary.forEach(element => console.log(element.name + ": " + element.salary))


/////// task 5 ///////

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }
    getArea() {
        return (this.a * this.h) / 2;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return this.a ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI * (this.r ** 2)
    }
}

function handleFigures(figures) {
    let sumAreas = figures.reduce(function(sum, figure) {
        if (figure instanceof GeometricFigure) {
            let name1 = figure.toString();
            let area1 = figure.getArea();
            console.log("Geometric figure: " + name1 + " - " + "area: " + area1)
            return sum + area1
        } else {
            console.log("Not an instance of GeometricFigure: " + typeof figure)
            return sum
        }
    }, 0)
    console.log("Total area: " + sumAreas)
}

let figures = [new Triangle(4, 5), new Square(7), new Circle(5), "test"]
console.log(handleFigures(figures))
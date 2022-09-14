/* var person1 = {
    name: "john",
    age: 20,
    greet: function greet() {
        console.log("Hello, my name is " + this.name + " and i am " + this.age)
    }
}

var person2 = {
    name: "jack",
    age: 30,
    greet: function greet() {
        console.log("Hello, my name is " + this.name + " and i am " + this.age)
    }
}

var person3 = {
    name: "james",
    age: 40,
    greet: function greet() {
        console.log("Hello, my name is " + this.name + " and i am " + this.age)
    }
}
 */


/* function _Person(_name, _age, _gender) {
    return {
        name: _name,
        age: _age,
        gender: _gender,
    }
} */

/* class Person {
    constructor(_name, _age, _gender) {
        this.name = _name
        this.age = _age
        this.gender = _gender
    }

    greet(isNice) {
        if (isNice) {
            console.log("Hello, my name is " + this.name + " and i am " + this.age)
        } else {
            console.log("hum")
        }
    }
} */


function Person(_name, _age, _gender) {
    this.name = _name
    this.age = _age
    this.gender = _gender
}

Person.prototype.greet = function greet(isNice) {
    if (isNice) {
        console.log("Hello, my name is " + this.name + " and i am " + this.age)
    } else {
        console.log("hum")
    }
}

var person1 = new Person("John", 20, "male")
var person2 = new Person("James", 30, "male")
var person3 = new Person("Jack", 40, "male")

/* person1.greet(true)
person2.greet(false)
person3.greet(true) */






Array.prototype.reverseIt = function reverseIt() {
    var newArray = []

    for (var index = this.length-1; index >= 0; index--) {
        var elem = this[index];
        newArray.push(elem)
    }

    return newArray
}

var fruits1 = [ "alma", "korte" ]
var fruits2 = [ "barack", "narancs" ]

var result1 = fruits1.reverseIt() // fruits.reverse()
/* console.log(result1)
 */
var result2 = fruits2.reverseIt()
/* console.log(result2) */




/* function isLessThat10(elem) {
    return elem < 10
} */

const isLessThat10 = elem => elem < 10

function isLongerThan3(elem) {
    return elem.length > 2
}


function isAdult(elem) {
    return elem.age > 17 
}

/* Array.prototype.filterIt = function filterIt(compareFunction) {
    var newArr = []
    for (const elem of this) {
        var shouldAdd = compareFunction(elem)
        if (shouldAdd) {
            newArr.push(elem)
        }
    }
    return newArr
} */

var inputArr = [1, 2, 34, 56, 7, 8]
var result = inputArr.filter(num => num < 10)
console.log(result)


var inputArr2 = [ "John", "James", "a", "Barbara"]
var result2 = inputArr2.filter(isLongerThan3)
console.log(result2)

var personList1 = [
    { name: "John", age: 20 },
    { name: "Barbara", age: 2 },
    { name: "James", age: 12 }
]

var personList2 = [
    { name: "James", age: 10 },
    { name: "Jack", age: 22 },
]

var result3 = personList1.filter(isAdult)
console.log(result3)






/* _Person.prototype.greet = function greet(isNice) {
    if (isNice) {
        console.log("Hello, my name is " + this.name + " and i am " + this.age)
    } else {
        console.log("hum")
    }
} */

/* var person4 = _Person("Barbara", 20, "female")
person4.greet(true)

var person5 = _Person("Jane", 20, "female")
person5.greet(true) */




/* function greet(p) {
    console.log("Hello, my name is " + p.name)
}

var person = {
    name: "john"
}

greet(person) */
// 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//fibonacci.forEach((el) => console.log(el))

function consoleArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

//consoleArr(fibonacci)

// 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

let newUsers = users.map((el, id) => {
    return `member ${id + 1}: ${el}`
})

console.log(newUsers);

function newUser(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `member ${i + 1}: ${arr[i]}`
    }
    return arr
}
console.log(newUser(users));

// 3 

const numbers = [7, -4, 32, -90, 54, 32, -21]

newNumbers = numbers.filter((el) => el > 0)
console.log(newNumbers);

function newNumer(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res.push(arr[i])
        }
    }
    return res;
}
console.log(newNumer(numbers));

// 4

let sumFibonacci = fibonacci.reduce((sum, el) => sum + el)

console.log(sumFibonacci);

function sumNumbers(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i]
    }
    return res;
}
console.log(sumNumbers(fibonacci));

// 5

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

let firstEvenNumber = numbers5.find((el) => el % 2 === 0)

console.log(firstEvenNumber);

function evenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            return arr[i];
        }
    }

    return 'Чётное число не найдено'
}

console.log(evenNumber(numbers5))

console.log('ADVANCED level');

//adv 1

function Student(salary, rate, name) {
    this.salary = salary
    this.rate = rate
    this.name = name

    this.credit = function () {
        switch (rate) {
            case 'A':
                return 12 * salary;
            case 'B':
                return 9 * salary;
            case 'C':
                return 6 * salary;
            case 'D':
                return 0 * salary;
            default:
                return 0;
        }
    }
}

let kirill = new Student(1000, 'A', 'Kirill');
let sergey = new Student(1500, 'B', 'Sergey');
let polina = new Student(2000, 'C', 'Polina');
let alexey = new Student(2500, 'D', 'Alexey');
let vlad = new Student(3000, 'A', 'Vlad');

let students = [kirill, sergey, polina, alexey, vlad]

function solutionAdv1(arr){
    return arr.reduce((sum,el) => sum + +el.credit(),0)
}

console.log(solutionAdv1(students))

// adv 2

function removingVowels(str) {
    res = ''
    for (let i = 0; i < str.length; i++) {
        res = str.replace(/[aueoiаэеиыуёюя]/gi, '')
    }
    return res;
}

console.log(removingVowels('This абра кадабра website is for losers LOL!'))

// adv 3 

function solutionAdv3(str) {
    return str
        .split('')
        .map((el, id) => el[0].toUpperCase() + el.repeat(id))
        .join('-')
}

console.log(solutionAdv3('abcd'))

// adv 4 

function highAndLow(str) {
    str = str.split(' ').sort((a, b) => b - a)
    return `${str[0]} ${str[str.length - 1]}`
}

function highAndLowV2(str) {
    let arr = str.split(' ')
    return `${Math.max.apply(null , arr)} ${Math.min.apply(null, arr)}`
}

console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLowV2("1 2 -3 4 5"))

// adv 5

function isIsogram(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase().indexOf(str[i]) !== str.toLowerCase().lastIndexOf(str[i])) {
            return false;
        }
    }
    return true
}
console.log(isIsogram("mOon"));

// adv 6

function solutionAdv6(str) {
    let total1 = str.split('').map(el => el.charCodeAt()).join('')
    let total2 = total1.replace(/7/g, '1')
    return +total1 - +total2;
}
console.log(solutionAdv6('CCC'))

// adv 7

function solutionAdv7(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase().indexOf(str[i]) !== str.toLowerCase().lastIndexOf(str[i])) {
            res += ')'
        } else {
            res += '('
        }
    }
    return res
}
console.log(solutionAdv7('recede'));




// 1
const colors = ['red', 'green', 'blue']

console.log(colors.length)

// 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1])

// 3 

const numbersV1 = [5, 43, 63, 23, 90]
const numbersV2 = [5, 43, 63, 23, 90]
const numbersV3 = [5, 43, 63, 23, 90]
console.log(numbersV1.splice(numbersV1.length))

numbersV2.length = 0;
console.log(numbersV2)

while (numbersV3.length > 0) {
    numbersV3.pop();

}
console.log(numbersV3)

// 4 

const students = ['Polina', 'Dasha', 'Masha']

students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')

console.log(students)

// 5 

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}
for (let cat of cats) {
    console.log(cat)
}

// 6 

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

let newArrow = evenNumbers.concat(oddNumbers)

console.log(newArrow.indexOf(8))

// 7 

const binary = [0, 0, 0, 0]

console.log(binary.join(1))

//adv 1

function palindromeV1(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
function palindromeV2(str) {
    str = str.toLowerCase()
    let arr = str.split('').reverse().join('')
    return (arr === str) ? true : false
}

console.log(palindromeV1('Шалаш'));
console.log(palindromeV2('Шалаш'));

// adv 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function matrixAverageValue(a) {
    let res = 0;
    let f = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            res = res + a[i][j];
            f++;
        }
    }
    return res / f;

}
console.log(matrixAverageValue(matrix));

// adv 3

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]

function orderedNumbers(a) {
    let positiveNumbers = [];
    let negativeNumbers = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 0) {
            positiveNumbers.push(a[i])
        } else {
            negativeNumbers.push(a[i])
        }
    }
    return { positiveNumbers, negativeNumbers }
}
console.log(orderedNumbers(mixedNumbers));

//adv 4

function randomCube(amount) {
    let numbers = [];
    let cubeNumbers = [];
    for (let i = 0; i < amount; i++) {
        let rand = Math.floor(Math.random() * (20 - 1)) + 1;
        numbers.push(rand);
        cubeNumbers.push(rand ** 3)
    }
    return { numbers, cubeNumbers }
}

console.log(randomCube(5));




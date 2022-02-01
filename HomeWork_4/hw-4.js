// 1 

function getSum(a) {
    let res = 0;
    for (let i = 0; i <= a; i++){
        res = res + i;
    }
    return res;
}
console.log(getSum(50));

function getSumEq(n){
    return (n * (n + 1)) / 2;
}

console.log(getSumEq(50));

// 2


// 3 

const str = '123456789'

function trimString(string, a, b) {
    let res = '';
    if (a < b && b < string.length && a >=0 ) {
        for (let i = a; i <= b; i++) {
            res = res + string[i];
        }
        return res;
    }
    else {
        return ('The range is entered incorrectly')
    }
}

console.log(trimString(str, 3, 7));

// 4

const num = 55;

function getSumNumbers(a) {
    (a < 0) ? a = -a: a;
    let res = 0;
    let str = String(a);
    for (let i = 0; i < str.length; i++) {
        res = res + Number(str[i]);
    }
    return res;
}

console.log(getSumNumbers(num));

// 5

function getSum(a, b) {
    if (a < b) {
        let res = 0;
        for (let i = a; i <= b; i++) {
            res = res + i;
        }
        return res;
    }
    else {
        return ('The range is entered incorrectly')
    }
}


console.log(getSum(8, 5))

// 6

function foo(name) {
    return console.log(name);
}
function boo(lastname) {
    return console.log(lastname);
}

function fooboo(a, name, lastname) {
    if (Boolean(a) === true) {
        return foo(name);
    } else {
        return boo(lastname);
    }
}

fooboo(0, 'Kirill' , 'Ripka')

// adv 1

function checkingTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkingTriangle(5,5,5))

//adv 2

function chocolate(m, n) {
    if (m > 0 && n > 0) {
        return (m * n) - 1;
    } else {
        return 0;
    }
}

function chocolateV2(m, n) {
    if (m > 0 && n > 0) {
        return (n - 1) + ((m - 1) * n);
    } else {
        return 0;
    }
}


// 1

let task = {
    example1: 1,
    example2: 2,
}

delete task.example1
delete task.example2

console.log(task)

// 2

const task2 = {
    example1: 1,
    example2: 2,
}

function search(name) {
    for (let key in task2) {
        if (key === name) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(search('example1'))

// 3 

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key)
}
for (let key in student) {
    console.log(student[key])
}

// 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)

// 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
};

function averageSalary(obj) {
    let res = 0;
    let f = 0;
    for (let key in obj) {
        res += +obj[key];
        f++;
    }

    return res / f;
};

console.log(averageSalary(salaries));

// 6

let validator = {
    read() {
        this.login = prompt('введите логин');
        this.password = prompt('введите пароль');
    },
    check() {
        let checkLogin = prompt('подтвердите логин');
        let checkPassword = prompt('подтвердите пароль');

        if (this.login === checkLogin && this.password === checkPassword) {
            alert('Добро пожалоВать')
        } else {
            alert('Ведённые логин или пароль не совпадают')
            validator.check()
        }
    }
}

//validator.read()
//validator.check()

//adv 1

function GoalCount(str) {
    let arrWords = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    if (str.length > 3) {
        return 'счет забитых голов одной команды не может превышать 9 мячей'
    }
    return str
        .split(':').map(Number)
        .map(el => arrWords[el])
        .join(":")
}

console.log(GoalCount('0:1'));

// adv 2

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    age: 27,
    name: 'Polina',
}

function comparisonObject(obj1, obj2) {
    for (let key in obj1) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length || obj1[key] !== obj2[key]) {
            return 'Объекты разыне';
        }
    }
    return 'Объекты равны'  
}

console.log(comparisonObject(student1, student2))

// adv 3

const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    }
 }

console.log(animals?.bird?.name);
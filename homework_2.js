// Задание 1
let money = 1000;

let income = 'Freelance';

let addExpenses = 'Transport, Dosug, Relations';

let deposit = true;

let mission = 50000;

let period = 12;

// Задание 2
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('Период ' + period + ' месяцев');
console.log('Цель заработать' + ' ' + mission + ' ' + 'долларов');

/* в этом пункте не совсем понял как именно нужно вывести инфу в консоль -
одной строкой сразу общий результат или какждый результат отдельно, посему 
сделал оба варианта*/
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));
console.log(addExpenses.toLocaleLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay + ' ' + 'остаток от деления составил' + ' ' + money % 30);
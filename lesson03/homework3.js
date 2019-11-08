'use strict';

let income = 'Freelance';

let mission = 50000;

// Задание 1
let money = prompt('Ваш месячный доход?');

// Задание 2
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

// Задание 3
let deposit = confirm('Есть ли у вас депозит в банке?');

// Задание 4
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// Задание 5
let costsName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costsNumb1 = prompt('Во сколько это обойдется?');
let costsName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costsNumb2 = prompt('Во сколько это обойдется?');

// Задача 6
let budgetMonth = money - costsNumb1 - costsNumb2;
console.log("Месячный бюджет составит" + ' ' + budgetMonth);

// Задание 7
let period = mission / budgetMonth;
console.log("Цель будет достигнута через" + ' ' + Math.ceil(period) + ' ' + 'месяцев');

// Задание 8
let budgetDay = budgetMonth / 30;
console.log("Дневной бюджет составит" + ' ' + Math.floor(budgetDay));

// Задание 9
if (budgetDay >= 800){
    console.log('Высокий уровень дохода');
} else if(budgetDay < 800 && budgetDay >= 300){
    console.log('Средний уровень дохода');
} else if(budgetDay < 300 && budgetDay >= 0){
    console.log('Низкий уровень дохода');
} else {console.log('Что-то пошло не так');
}

'use strict';

let income = 'Freelance';

let mission = 50000;

// Задание 1
let money = prompt('Ваш месячный доход?');

// Задание 2
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


// Задание 3
let deposit = confirm('Есть ли у вас депозит в банке?');

// Задание 4

// Задание 5
let costsName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costsNumb1 = prompt('Во сколько это обойдется?');
let costsName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costsNumb2 = prompt('Во сколько это обойдется?');

// Задача 6
let budgetMonth = money - costsNumb1 - costsNumb2;


// Задание 7
let period = mission / budgetMonth;


// Задание 8
let budgetDay = budgetMonth / 30;

// Задание 9
/*if (budgetDay >= 800){
    console.log('Высокий уровень дохода');
} else if(budgetDay < 800 && budgetDay >= 300){
    console.log('Средний уровень дохода');
} else if(budgetDay < 300 && budgetDay >= 0){
    console.log('Низкий уровень дохода');
} else {console.log('Что-то пошло не так');
}*/


// Домашка 4

// Задание 1
function getExpensesMonth(){
    return costsNumb1 + costsNumb2;
}
getExpensesMonth();

let getAccumulatedMonth = function(a, b, c){
    return a - b - c;
};
let accumulatedMonth = getAccumulatedMonth(money, costsNumb1, costsNumb2);
getAccumulatedMonth();

function getTargetMonth(){
    return mission / accumulatedMonth;
}
getTargetMonth();

// Задание 2
let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function(){
    if (budgetDay >= 800){
        console.log('Высокий уровень дохода');
    } else if(budgetDay < 800 && budgetDay >= 300){
        console.log('Средний уровень дохода');
    } else if(budgetDay < 300 && budgetDay >= 0){
        console.log('Низкий уровень дохода');
    } else {console.log('Что-то пошло не так');
    }
};
getStatusIncome();

let savingMmoney = function(data){
    console.log("Месячный бюджет составит" + ' ' + data);
};
savingMmoney(budgetMonth);

let purpose = function(data){
    console.log("Цель будет достигнута через" + ' ' + Math.floor(data) + ' ' + 'месяцев');
};
purpose(period);
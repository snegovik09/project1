'use strict'
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

}

start(); 


let   appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };
    
    // Цикл FOR
 function chooseExpensys () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
            b = prompt("Во сколько обойдется?", '');

        if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            console.log('Bad result');
            i--;
        }
    }
 }

// Цикл WHILE
    // let i =0; 

    // while (i < 2) {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
    //         b = prompt("Во сколько обойдется?", '');

    //     if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a != '' && b != '' && a.length < 50) {
    //         appData.expenses[a] = b;
    //         i++;
    //     } else {                            
    //     console.log ("bad result");
    //     i--;
    // }
    // i++
    // }


//     Цикл DO
// let i =0;
//     do {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
//             b = prompt("Во сколько обойдется?", '');

//         if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a != '' && b != '' && a.length < 50) {
//             appData.expenses[a] = b;
//             i++;
//         } else {                            
    //     console.log ("bad result");
    //     i--;
    // }
    // i++
//     } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Сумма в день : " + appData.moneyPerDay);
}

detectDayBudget();


    function detectLevel() {                                                // Расчет уровня достатка
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    }
    detectLevel();

    function checkSavings() {
        if (appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    }

    checkSavings();

    function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i+1] = a;
        }
    }
    chooseOptExpenses();
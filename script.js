'use strict'
let money = +prompt("Ваш бюджет на месяц?"), 
    time = prompt("Введите дату в формате YYYY-MM-DD"),

    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
    
    // Цикл FOR
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

    appData.moneyPerDay = appData.budget/30;

    alert("Сумма в день : " + appData.moneyPerDay);
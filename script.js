'use strict'
let money = prompt("Ваш бюджет на месяц?"), 
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    },
    a = prompt("Введите обязательную статью расходов в этом месяце"), 
    b = prompt("Во сколько обойдется?"), 
    a1 = prompt("Введите обязательную статью расходов в этом месяце"), 
    b1 = prompt("Во сколько обойдется?");

    appData.expenses.a = b;
    appData.expenses.a1 = b1;

    alert(appData.budget/30);///
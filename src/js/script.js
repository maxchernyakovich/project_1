
// ==переменные 

let startBtn = document.getElementsByClassName('start')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
     incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money,time;


// ==доход и дата

startBtn.addEventListener('click', function() {
     time = prompt('введите дату в формате YYYY-MM-DD', '');
     money = +prompt('ваш бюджет на месяц?', '');

     while (isNaN(money) || money == '' || money == null) {
          money = +prompt('ваш бюджет на месяц?', '');
     };
     /* while (isNaN(time) || time == '' || time == null || time.length != 8) {
          time = prompt('введите дату в формате YYYY-MM-DD', '');
     }; */

     appData.budget = money;
     appData.timeData = time;
     budgetValue.textContent = money.toFixed();
     yearValue.value = new Date(Date.parse(time)).getFullYear();
     monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
     dayValue.value = new Date(Date.parse(time)).getDate();
});

// ==обязательные расходы

expensesItemBtn.addEventListener('click', function() {
     let sum = 0;

     for (let i = 0; i < expensesItem.length; i++) { // цикл будет работать пока не закончатся expensesItem
          let a = expensesItem[i].value,
              b = expensesItem[++i].value; // на выходе будет строка

          if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
               && a != '' && b != '' && a.length < 50) {
               appData.expenses[a] = b; // заносим в appData ключ [a] со значением b;
               sum += +b; // +b чтобы приходило число из expensesItem[++i].value
          } else {
               i = i - 1;
          };
     };

     expensesValue.textContent = sum;

});

// ==не обязательные расходы

optionalExpensesBtn.addEventListener('click', function() {
     for (let i = 0; i < optionalExpensesItem.length; i++) {
          let opt = optionalExpensesItem[i].value;
          appData.optionalExpenses[i] = opt;
          optionalExpensesValue.textContent += appData.optionalExpenses[i]+ ' ';
     };
});

// ==ежедневный бюджет

countBudgetBtn.addEventListener('click', function() {

     if (appData.budget != undefined) {
          appData.moneyPerDay = (appData.budget / 30).toFixed();
          dayBudgetValue.textContent = appData.moneyPerDay;

          if (appData.moneyPerDay < 100) {
               levelValue.textContent = 'низкий уровень достатка';
          } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
               levelValue.textContent = 'средний уровень достатка';
          } else if (appData.moneyPerDay > 2000) {
               console.log('max');
          } else {
               levelValue.textContent = 'произошла ошибка';
          };
     } else {
          dayBudgetValue.textContent = 'произошла ошибка';
          levelValue.textContent = 'нажмите "Начать расчет"';
     };
     
});

// ==доп доход

incomeItem.addEventListener('input', function() {
     let items = incomeItem.value;
     appData.income = items.split(', '); // запись в appData значений 
     incomeValue.textContent = appData.income;
});

// ==накопления

checkSavings.addEventListener('click', function() {
     if (appData.savings == true) {
          appData.savings = false;
     } else {
          appData.savings = true
     }; // ==включаем checkbox 
});

// ==сумма накоплений

sumValue.addEventListener('input', function() {
     if (appData.savings == true) { // ==сработает если включить checkbox
          let sum = +sumValue.value,
              percent = +percentValue.value;

          appData.monthIncome = sum / 100 / 12 * percent;
          appData.yearIncome = sum / 100 * percent;

          monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
          yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
     }
});

// ==процент накоплений

percentValue.addEventListener('input', function () {
     if (appData.savings == true) {
          let sum = +sumValue.value,
              percent = +percentValue.value;

          appData.monthIncome = sum / 100 / 12 * percent;
          appData.yearIncome = sum / 100 * percent;

          monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
          yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
     }
});

// ==объект

let appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false
};

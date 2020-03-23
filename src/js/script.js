// ==переменные 

let money,time;


// ==функция 

function start() {
     money = +prompt('ваш бюджет на месяц?', '');
     time = prompt('введите дату в формате YYYY-MM-DD', '');

     while (isNaN(money) || money == '' || money == null) {
          money = +prompt('ваш бюджет на месяц?', '');
     };
     while (isNaN(time) || time == '' || time == null || time.length != 8) {
          time = prompt('введите дату в формате YYYY-MM-DD', '');
     };
};

start();

// ==объект

let appData = {
     budjet: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: true,
};

// ==функция 

function chooseExpenses() {
     for (let i = 0; i < 2; i++) {
          let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
              b = prompt('Во сколько обойдется?', "");

          if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
               && a != '' && b != '' && a.length < 50) {
               console.log('done');
               appData.expenses[a] = b;
          } else {
               i = i - 1;
          };
     };
};

chooseExpenses();


// ==перебор_элементов

appData.moneyPerDay = (appData.budjet / 30).toFixed();

// ==вывод 

alert(`ежедневный бюджет: ${appData.moneyPerDay}`);

// ==условие

if (appData.moneyPerDay < 100) {
     console.log('min');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
     console.log('norm');
} else if (appData.moneyPerDay > 2000) {
     console.log('max');
} else {
     console.log('money not fount');
};

// ==функция 

function checkSavings() {
     if (appData.savings == true) {
          let save = +prompt('какова сумма накоплений?'),
              procent = +prompt('под какой процент?');
          
          appData.monthIncome = save / 100 / 12 * procent;
          alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
     }
};

checkSavings();
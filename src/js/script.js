

// ==переменные 

let money,time;


// ==функция-цикл

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
     // ==функция-ввод_данных
     chooseExpenses: function() {
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
     },
     // ==перебор_элементов_и_вывод
     detectDayBudget: function() {
          appData.moneyPerDay = (appData.budjet / 30).toFixed();
          alert(`ежедневный бюджет: ${appData.moneyPerDay}`);
     },
     // ==функция-условие
     detectLevel: function() {
          if (appData.moneyPerDay < 100) {
               console.log('min');
          } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
               console.log('norm');
          } else if (appData.moneyPerDay > 2000) {
               console.log('max');
          } else {
               console.log('money not fount');
          };
     },
     // ==функция-доход_с_депозита
     checkSavings: function() {
          if (appData.savings == true) {
               let save = +prompt('какова сумма накоплений?'),
                    procent = +prompt('под какой процент?');

               appData.monthIncome = save / 100 / 12 * procent;
               alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
          }
     },
     // == функция-необязательных_расходов
     chooseOptExpenses: function () {
          for (let i = 1; i < 3; i++) {
               let opt = prompt('Статья необязательных расходов?', "");
               appData.optionalExpenses[i] = opt;
          }
     },
     chooseIncome: function() {
          let items = prompt('Что принесет доп. доход? (перечислите через запятую)', "");
          appData.income = items.split(', ');
          appData.income.push(prompt('Может что-то еще?'));
          appData.income.sort();
     }
};


// ==переменные 

let  money = +prompt('ваш бюджет на месяц?'),
     time = prompt('введите дату в формате YYYY-MM-DD');

// ==объект

let appData = {
     budjet: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false,
};


// ==перебор_элементов

for(let i = 0; i < 2; i++) {
     let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
         b = prompt('Во сколько обойдется?', "");

     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
         && a != '' && b != '' && a.length < 50 ) {
          console.log('done');
          appData.expenses[a] = b;
     } else {

     };
     
};

appData.moneyPerDay = appData.budjet / 30;

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

console.log(appData);
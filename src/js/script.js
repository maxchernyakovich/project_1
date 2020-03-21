

let money = prompt('ваш бюджет на месяц?');
let time = prompt('введите дату в формате YYYY-MM-DD');
let obligatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце');
let howMuch = prompt('Во сколько обойдется?');


let appData = {
     money,
     time,
     expenses: {obligatoryExpenses, howMuch},
     optionalExpenses: {},
     income: [],
     savings: false,
};
console.log(appData);
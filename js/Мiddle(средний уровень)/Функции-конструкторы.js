//Работа с конструкторами объектов
'use strict';

//const num = new Number(3);
//const num = new Function(3);
//console.log(num);

//Реализуем создания объектов через функцию конструктор
function User(name, id) {           //создаем функцию User (работаем с name и id) выполни ниже
    this.name = name;               //свойство name
    this.id = id;                   //свойство id
    this.human = true;              //свойство human
    this.hello = function() {       //новое свойство в которое вложена функция
        console.log(`Hello ${this.name}`);          //вывести в консоль hello и значение из поля name 
    }
}
User.protottype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new User('Ivan', 28);           //создать переменую и вложить согласно конструктору параметры
const alex = new User('Alex', 20);           //создать переменую и вложить согласно конструктору параметры

ivan.exit();                //вывести в консоль сообщение
ivan.hello();               //у переменной ivan которая выше вызовем свойство hello --результат Hello Ivan
alex.hello();               //аналогично примеру выше

console.log(ivan);          //вывести в консоль
console.log(alex);          //вывести в консоль
//изучение Методов и Свойств (строки и числа) 
"use strict";                   //строгий режим

/*********************Работа с строками и символами******************************************/

const str = "teSt";             //создал переменую для тестирования можно подставлять любой текс
const arr = [1, 2, 5];          //создан массив для тестирования

//console.log(str.length);      //выведем количество символов в переменной str
//console.log(str[2]);          //показать символ с индексом 2 
console.log(str.toUpperCase());         //преобразовать все символы в верхний регситр (с большой буквы)
console.log(str.toLowerCase());         //преобразовать все символы в нижний регистр (с маленькой буквы)

let fruit = "Some fruitf";              //создание переменное и присвоение текста для тестирование
console.log(fruit.indexOf("f"));        //вывести на экран номер или индекс с какой позиции (число) начинается символ f

const logg = "Hello world";             //создание переменной и присвоение текста
console.log(logg.slice(1, 11));         //вывести символы начиная с 1 символа по 11 символ с лева(если минус то справо)

const logg = "Hello world";             //создание переменной и присвоение текста
console.log(logg.substring(1, 11));     //создание переменной и присвоение текста

const logg = "Hello world";             //создание переменной и присвоение текста
console.log(logg.substr(6, 2));         //создание переменной и присвоение текста

/*********************Работа с числами******************************************/

const num = 12.5;                       //создание фиксированной переменной (num) и присвоение числа(12.5) для тестирования 
console.log(Math.round(num));           //вывести на экран результат округления num ответ целлые числа

const test = "12.8px";                  //создание фиксир. переменно test присвоения текста для тестирования
console.log(parseInt(test));            //вывести на экран результат преобразования строки в число (целое)
console.log(parseFloat(test));          //вывести на экран результат преобразования строки в число (дробное)
'use strict';                                                   //строгий режим

const box = document.getElementById('box');                     //документ.получиЭлементПоИд(с названием box) --- произведет поиск элемента по ид номеру 

console.log(box);                                               //вывести в консоль результат

const btns = document.getElementsByTagName('button');           //присвоить = документ.получиЭлементПоТэгНазвание(название button)  --- произведет поиск по названию тега

console.log(btns);                                              //вывести в консоль результат

const circles = document.getElementsByClassName('circle');      //присвоить = документ.ПолучиЭлементПоКлассНазвание(circle) --получить элемент по названию класса

console.log(circles);                                           //вывести в консоль результат

const hearts = document.querySelectorAll('.heart');             //присвоить = документ.ЗапросСелекторВсе(.heart) --- получит все элементы 

console.log(hearts);                                            //вывести в консоль результат

hearts.forEach(item => {                                        //используем метод forEach для перебора всех элементов
    console.log(item);                                          //вывести в консоль результат
})

const oneHeart = document.querySelector('.heart');              //присвоить = документ.ЗапросСелектор(.heart) --- получит первый элемент который встретится 
console.log(oneHeart);                                          //вывести результат в консоль
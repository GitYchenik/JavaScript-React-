//Изучение callback функции
"use strict";                       //строгий режим

function first() {                  //создаем функцию first
    setTimeout(function() {        console.log(1); }, 5000)                 //выполнить с задержкой(функцию {вывести на экран}, задержка в мил.секундах )
}

function second() {                 //создадим функцию second 
    console.log(2);                 //вывести в консоль 2
}

first();                            // запускаем функцию 1
second();                           // запускаем функцию 2

function learnJS(lang, callback)    {   //создаем функцию с аргументами lang callback
    console.log(`Я учу: ${lang}`);      //вывести в консоль (я учу аргумент lang)
    callback();                         //запустить после выполнения функции
}

function done() {                       //создаем функцию done
    console.log('Я прошел этот урок!'); //выводим в консоль текст
};

learnJS('JavaScript', done);            //запускаем функцию LearnJS (передаем первый аргумент т.е. Lang = 'JavaScript', второй аргумент получить результат после функции done, т.е. что ведут в пердыдущей функции то и передает )

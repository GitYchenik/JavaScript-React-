"use strict";
//изучение функции
let num = 20;
//Первый тип функции Function Declaration
//стандартное применение функции которая выводит текст в переменную
function ShowFirstMessage(text)
{
    console.log(text);
    let num = 10;
}
ShowFirstMessage("Hello World!");
console.log(num);
//проверяем операции внутри функции при передаче аргументов
console.log(calc(41, 65));
//Самое интересное это Declaration эти функции можно получить результат до начала самой фукнкции, т.е. мы выводим результат функции которая еще не запускалась
function calc(a, b)
{
    return (a+b);
}

console.log(calc(4, 6));

function ret()
{
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);
//function expression функции которые работают после объявления
const logger = function() 
{
    console.log("Hello");
}

logger();
//Стрелочные функции

const calc = (a, b) => {return (a + b)};// а можно просто const calc = (a, b) => a+b;
  

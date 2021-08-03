//изучение массивов
"use strict";                               //строгий режим

const arr = [1, 26, 13, 6, 8, 10];          //создание массива arr и присвоить значение 
arr.sort(compareNum);                       //сортировка массива по возрастанию (символы как текст [ 1, 10, 13, 26, 6, 8 ])
console.log(arr);                           //вывести в консоль

function compareNum(a, b)  {                //создаем функцию с аргументами а и b             
    return a-b;                             //вернуть результать а - b
}
//arr[99] = 0;                              //если подставить ниже в массив ставят 99 пустых ячеек
//arr.pop();                                //удалит последнее значение

//arr.push(18);                             //добавляет в конец массива число 18
                       
//console.log(arr.length);                  //вывести в консоль число элементов 

arr.forEach(function(item, i, arr){         //метод по перебору массива с параметрами item - значение массива, i - индекс массива, arr - массив выполни ниже
    console.log(`${i}: ${item} внутри массива ${arr}`);         //вывести в экран индекс(0) массива: значение массива(1) и массив(1,6,8...)
});

console.log(arr);                           //вывести весь массив

/*for (let i=0; i < arr.length; i++) {      //начиная (переменная i=0; пока i меньше количества всем элемнтов; увеличить на 1 переменную i)
    console.log(arr[i]);                    //вывести в консоль массив с определенным индексом
}*/
for (let value of arr) {                    //начиная с переменной value в составе всего массива arr делай ниже
    console.log(value);                     //выведи в консоль результат value
}

const str = prompt("","");                  //создать переменную str и присвоить значение которое появится после ввода в окне текста через запятую (все одно страко)
const products = str.split(", ");           //создать переменую и присвоить результать = разделить полученую строку на несколько элемнтов разделить зна ","
products.sort();                            //отсортировать текст (по алфавиту)
console.log(products.join("; "));           //ввывести результат в консоль (соединить полученные части, для соединения использовать символ ;) 
//Изучаю Rest - объединяет оставшиеся элементы
const log = function(a, b, ...rest) {           //создать перменую присвоить значение функции (а b и все значения назвав пееременую rest -- можно хоть как называть)
    console.log(a, b, rest);        //вывести на экран элементы
}

log('basic', 'rest', 'operator', 'usege');      //в функцию лог передаем basic и rest (а и b) а все остальное будет в объекте [operator, usege]

//параметры по умолчанию
function calcOrDouble(number, basis = 2) {          //мы уже по умолчанию назначаем basic значение 2 при объявлении
    console.log(number * basis);
}

calc0rDouble(3);
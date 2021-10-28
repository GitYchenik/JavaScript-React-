//изучение json
'use strict';

//создание объект
const persone = {
    name: 'Alex',
    tel: '+7444444444',
    parents:{
        mom: 'Olga',
        dad: 'Mike'
    }
};
//переводим объект в json файл
let a = JSON.stringify(persone);
console.log(a);
//переводим json в обычный объект
let b = JSON.parse(a);
console.log(b);

/**************Полное клонирование***************/
const clone = JSON.parse(JSON.stringify(persone));              //запишем в переменую результат из jsonв объект( из объекта в  json)
clone.parents.mom = 'Ann';                      //запишем новое значение в объект
console.log(persone);
console.log(clone);
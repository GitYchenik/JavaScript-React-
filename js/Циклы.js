//изучение циклов

//стандартный if 

if (1) {                        //условие если 0 то ложно если 1 то правда
    console.log('ok!');         //если условие работает выведи на экран текс
}
else{                           //иначе выполни
    console.log('Error');       //выведи на экран текст
}

const num = 50;                 //объявление переменно и присвоить значение 

//вариация с IF Else

if (num <49) {                  //если mum меньша 49 выполни ниже
    console.log('Error');       //вывести на экран
}else if (num > 100) {          //иначе если num больше 100 выполни ниже
    console.log('Много');       //вывести на экран
} else {                        //иначе 
    console.log('Ok!');         //выведи сообщение ок
}
num = 50;                       //присвоить значение переменной

//Сокращенный вариант предыдущей задачи
(num == 50) ? console.log('Ok') : console.log('Error');

//проверяем switch
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('не в этот раз');
        break;
}

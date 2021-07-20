//изучаю циклы
//обычный if 
if (0) {
    console.log('ok!');
}
else{
    console.log('Error');
}

const num = 50;
//вариация с IF Else
if (num <49) {
    console.log('Error');
}else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}
num = 50;
//Сокращенный вариант
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

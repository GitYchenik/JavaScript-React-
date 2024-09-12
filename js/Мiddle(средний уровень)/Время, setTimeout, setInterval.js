//Работа с таймером setTimeout-запуск через столько то миллесекунд, setInterval - запускает каждые ххх секунд

const btn = document.querySelector('.btn');          //создали переменую = Документ.ЗапросВыбрать('btn')
let timerId4,                                       //создание переменных
    i = 0;

function myAnimation() {                    //создаем функцию 
    const elem = document.querySelector('.box');        //созначим переменной elem  = документ.ЗапросВыбор (один элемент квадрат с именем box)
    let pos = 0;        //установим переменную с позицией ноль (т.е. стартовая позиция)

    const id = setInterval(frame, 10);          //создадим переменую id - установитьИнтервал(найти и запустить frame, каждые 10 секунд)
    function frame() {          //функция frame
        if (pos == 300) {           //если (pos - позиция равна 300 т.к. конец в нашем квадрате)
            clearInterval(id);          //очистиИтервал (id) т.е. останови таймер
        } else {            //иначе
            pos++;              //увеличить позицияю на 1, т.е. здвигать на один пиксель
            elem.style.top = pos + "px";            //квадрат.стиль.верх = pos + пиксель - т.е. опускать на один вниз
            elem.style.left = pos + 'px';           //квадрат.стиль.лево = pos + пиксель - т.е. сдвигать вправо
        }
    }
}
    btn.addEventListener('click', myAnimation);             //при нажатии на кнопку мыши запустить функцию myAnimation
    
/*
btn.addEventListener('click', () => {                   //при нажатии на кнопку выполни ниже
    //const timerId3 = setTimeout(logger, 2000);        запустить другую функцию каждые 500 миллисекунд
    timerId4 = setInterval(logger, 500);
});

//clearInterval(timerId4);          //очистка задержки или остановка таймера

const timerId = setTimeout(function() {             //создать переменую = установитьТаймаут т.е. запустить функцию чере заданное время 
    console.log('Hello');           //вывести в консоль сообщение "Hello"
}, 20000);                          //параметр т.е. сработает функция через 20 сек 

clearInterval(timerId);         //остановка таймера

const timerId2 = setTimeout(logger, 2000);      //запуск функции logger через 2 000 мили секунд

function logger() {                 //функция logger выполни ниже
    if (i == 3) {                   //если (i равен 3) выполни ниже
        clearInterval(timerId4);    //остановить таймер 
    }
    console.log('text');            //вывести на экран сообщение текст
    i++;                            //увеличить i на 1 
};

let id5 = setTimeout(function log(){    //функция log выполни ниже
    console.log('Hello');               //вывести в консоль
    id5 = setTimeout(log, 500)          //выполни функцию log через 500 миллисекунд
}, 500);                                //вызвать глобальную функцию через 500 миллисекунд*/
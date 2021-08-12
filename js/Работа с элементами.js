//Работа с элементами страницы css, html - просто ненавижу эту часть за боль, страдания, заниженую самоочценку

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


/***********************************Действия с элементами на странице**********************/
//создаем объекты
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    //вариация записи так как в блок wrapper входит hearts можно записать получения элемента другим способом
    hearts = document.querySelectorAll('.heart'),
    //hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
    //oneHeart = wrapper.querySelector('.heart');

console.dir(box);                                               //выводим ы консоль свойства box

box.style.backgroundColor = 'blue';                             //меняем цвет фона на = 'синий'
box.style.width = '500px';                                      //меняем параметр ширина на 500 пикселей

box.style.cssText = 'background-color: blue; width: 500px';     //меняем параметр текста = фон синий; ширина 500 пикселей

btns[1].style.borderRadius = '100%';                            //присвоим радиус элемент = 100% --сделаем круг
circles[0].style.backgroundColor = 'red';                       //поменяем цвет на красный

/*for (let i = 0; i < hearts.length; i++) {                     //с помощью цикла береберем все элементы
    hearts[i].style.backgroundColor = 'blue';                   //каждому элементу сделаем цвет фона синий
}*/

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';                        //тоже самое только через forEach
});

const div = document.createElement('div');                      //создание нового элемента div
// const text = document.createTextNode('Тут был я');           //создание текста в странице

div.classList.add('black');                                     //добавление нового элемента black

document.body.append(div);                                      //добавление в тело документа в конец div
//wrapper.append(div);                                          //добавляет элемент в конец (черный квадрат уежает в конец обертки div)
//wrapper.appendChild(div);                                     //аналогичная команда

//Рефакторинг - переписование кода              

//wrapper.prepend(div);                                         //переносит черный элемент в начало обертки wrapper(был последним стал первым!)
//hearts[0].before(div);                                        //перенести до элемента (в данном случае до 1 сердечка)
//hearts[0].after(div);                                         //перенести после элемента (в данном случае после 1 сердечка)
//wrapper.insertBefore(div, hearts[2]);                         //вставить в обертку после (позиция div, на 3 место списка (0,1,2 -поэтому и третье))
//wrapper.removeChild(hearts[1]);                               //удалить подчиненый объект (сердечко 2 (первый занимает 0, второй 1))
//circles[0].remove();                                          //круг на 0 месте. удалить
//hearts[0].replaceWith(circles[0]);                            //сердце на 0 месте заменить (сам элемент удалиться) на круг на месте 0 
//wrapper.replaceChild(circles[0], hearts[0]);                  //замена в подчинении (поставим круг на месте 0, вместо сердечко на месте 0)
div.innerHTML = "<h1>Hello World</h1>";                         //в блок div.элемент HTML = "Hello world" - причем работает форматирования как html
//div.textContent = "<h1>Hello</h1>";                           //так же выведет текст в объект только без html вставок более безопастный
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');        //в элемент div. вставить в HTML (перед началом элемента, текст Hello заголовок 2) --- получим перед элментом
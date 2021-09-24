//Работа с элементами в мобильном приложении

//touchstart  -  касание экрана
//touchmove     - движение по экрану
//touchend      -   отрыв пальца от экрана
//touchenter    -   в движении палец косается элемента
//touchleave    -   в движении палец покинул элемент
//touchcancel   -   когда элемент покидают (к примеру сворачиваешь оперну а музыка играет)
//touches   -   свойство элемента (кординаты, с чем взаимедействоавл, все свойства)
//targetTouches -   свойство самомго элемента (пк примеру куда нажили он покажет кординаты)
//changedTouches    -   пальцы которые совершили указаное действие

window.addEventListener('DOMContentLoaded', () => {         //окно.ДобавитьДействиеСписок(загрузить элементы) выполнить ниже
    const box = document.querySelector('.box');         //документ.ЗапроснаВыборку(всю с box)

    box.addEventListener('touchstart', (event) => {         //box.ДобавитьДействиеСписком(при касании экрана) выполнить ниже
        event.preventDefault();                         //предотвратиь событие
        console.log('Start');                           //вывести в консоль (start)
        console.log(event.changedTouches);              //вывести в консоль действие.при нажатии - выводит свойства куда нажал
    });
    box.addEventListener('touchmove', (event) => {        //окно.ДобавитьДействиеСписок(при движении по экрану) выполнить ниже     
        event.preventDefault();                            //предотвратиь событие
        console.log('Move');                            //вывести в консоль (start)
        console.log(event.targetTouches[0].pageX);          //вывести в консоль (действие.параметр[0].ПарметрпоОси-Х)
    });
    box.addEventListener('touchend', (event) => {           //окно.ДобавитьДействиеСписок(при отпускании пальца от экрана) выполнить ниже
        event.preventDefault();                         //предотвратиь событие
        console.log('End');                             //вывести в консоль (end)
    });
});
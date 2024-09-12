//AJAX - нужен для асинхронных операций к примеру на сайте ДНС если менять фильтры перезагружаеться блок а НЕ ВСЯ СТРАНИЦА
'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json');        //отправим запрос
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');        //параметры запроса
    request.send();     //ответ от запроса

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    //status - код возврата к примеру 404 
    //statusText - текст возврата 
    //respone - аналог выше
    //readyState - текст возврата к примеру loading 


});
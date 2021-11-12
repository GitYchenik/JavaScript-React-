//Работа с табами (есть несколько табом но видеть должный один и перелистывать на другие)
//tab
window.addEventListener('DOMContentLoaded', () => {            //загрузка все элементы и подготовить их
    
    const tabs = document.querySelectorAll('.tabheader__item'),     //создаем переменные = документ.запросВыбратьВсе(менюшка списком)
        tabsContent = document.querySelectorAll('.tabcontent'),   //создаем переменные = документ.запросВыбратьВсе(картинкив центре)
        tabsParent = document.querySelector('.tabheader__items');     //создаем переменные = документ.запросВыбрать(описание под картинкой)

//создаем функцию для скрытия ненужных табов
    function hideTabContent() {                  //фукнция имя()
        tabsContent.forEach(item => {           //перебираем весь массив(где храняться картинки) item счетчик выполни ниже
            item.style.display = 'none';
            item.classList.add('hide');        //показать
            item.classList.remove('show', 'fade');      //скрыть
        });
//в списке убрать активность        
        tabs.forEach(item => {                  //перебираем массив с счетчиком item выполнить ниже
            item.classList.remove('tabheader__item_active');            //счетчик.КлассСписок.Удалить(подсветку списка)
        })
    }
//Функция которая будет показывать нужную картинку
    function showTabContent(i) {                //функция показать (i что при вызове положат в i с этим и работает функция)
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');     //картинке с индекосм i. Стиль. Дисплей = показать
        tabsContent[i].classList.remove('hide');       //скрыть
        tabs[i].classList.add('tabheader__item_active');        //добавить в class активити т.е. выделить строку
    }

    hideTabContent();       //запустить скрытие элементов всех
    showTabContent(0);      //показать нужный элемент с индексом(0 - по уомлчанию)

//Сделаем при клике мышки что бы показывался нужный лист с картинкой    
    tabsParent.addEventListener('click', (event) => {           //В нашем менюсписке.ДобавитьОбработчикСписком(при "клике") выполни ниже
        const target = event.target;            //в переменную таргет = элемент который мы нажали.target (получим свойство строчки куда нажали)

        if (target && target.classList.contains('tabheader__item')){            //если (строчка и строчка содержит значения списка) выполни ниже
            tabs.forEach((item, i) => {         //перебрать все 4 строчки
                if (target == item) {           //если свойство строчки равно значению то выполни ниже 
                    hideTabContent();           //запустить функцию (скрой все элементы)
                    showTabContent(i);          //запустить функцию и передать номер в i (показать тот элемент на который нажали)
                }
            });
        }
        });
        
/*****************Работа с таймером обратного отчета, к примеру акциия действует до нового года***********/

    const deadline = '2021-12-31';          //в переменую daeadline поместить 11 мая 2022 - т.е. дата до которой акция действует 
    
    //функция будет вычислять сколько милесекунд осталось до завершения акции и результат дробить на дни, минуты и т.д.

    function getTimeRemaining(endtime) {        //функция getTimeRemaining(endtime) 
        const t = Date.parse(endtime) - Date.parse(new Date()),         // в переменую = Дату переведенную в милесекунды(конечный даты) - Дату переведеную в милесекунды текущую (т.е. узнаем сколько милесекунд осталась к примеру до нового года)
            days = Math.floor(t / (1000 * 60 * 60 * 24)),           //присвоить количество милесекунд разделить (милесекунды в секунды * 60 (минуты) * 60 (часы) * 24 (дни) итог получим количество дней
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),        //аналогичено только % от дней мозьмет остаток (к примеру 20 дней 12 часа % при делении на 20 дней возмет 12)
            minutes = Math.floor(t / (1000 * 60) % 60),         //аналогично получим остаток минуты
            seconds = Math.floor((t / 1000) % 60);          //аналогично секунды
        //вернул значение каждого элемента 
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    //функция для красоты что бы  было все гда числа к пример вместо 9 стало 09        
    }
    function getZero(num) {             //подставленое значение запишем в нум
        if (num >= 0 && num < 10) {     //если подставленное значени меньше или равно 0 и меньше 10 выполни ниже
            return `0${num}`;           //интерполяция подставь 0+число
        }else {                     //иначе 
            return num;             //просто верни число 
        }
    };
    //Вносим изменения в главную страницу
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),         //находим class который передадут
            days = timer.querySelector('#days'),            //присвоим в переменую ид с указанными данными в этом случае day
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
            timeInterval = setInterval(updateClock, 1000);      //установить интервал (запуск функции updateclok, каждую 1 секунду)
            
            updateClock();
            //функция которя каждую вносит данные    
            function updateClock()  {           //
                const t = getTimeRemaining(endtime);            //в переменую присвоить значение функции
                //актуальные остаток милесекунд переноситься в переменные (к примеру сейчас 3 секунды осталаось запишет 3, через секунду 2 запишет 2)
                days.innerHTML = getZero(t.days);        //текущие значения записать в html блок - итог количество дней
                hours.innerHTML = getZero(t.hours);      //количество часов
                minutes.innerHTML = getZero(t.minutes);      //количество минут
                seconds.innerHTML = getZero(t.seconds);      //количество секунд
                //проверка на случай если акция закончиться
                if (t.total <= 0) {     //если количество милисекунд которых осталось до конца акции (к примеру осталось 10, 9, 8, 7... 0, -1,-2-3 и. т.д.) меньше 0 т.е. акция кончилась
                clearInterval(timeInterval);        //сбросить (интервальный запуск ) т.е. остановить таймер
                        }
            }

    }
    setClock('.timer', deadline);           //в функцию передать два аргумента 

/************************Работа с модальными окнами****************************************/  
   
    const modalTrigger = document.querySelectorAll('[data-modal]'),         //создаем ссылки на все классы где есть data-modal (итог попадут к примеру class data-modal times)
        modal = document.querySelector('.modal'),           //создаем ссылку на одно окно (модальное окно которое скрыто и будет появляться)
        modalCloseBtn = document.querySelector('[data-close]');         //аналогично первому

    //Реализуем при нажатии на кнопку открыть скрытое модальное окно
    modalTrigger.forEach(btn => {                               //перебираем массим и выполни ниже
        btn.addEventListener('click', openModal);                   //при нажатии на клик
    });
    //функция по открытию модального окна
    function openModal() {
        modal.style.display = 'block';                      //сделай модальное окно видимым
        //modal.classList.add('show');                      //тоже самое для css
        //modal.classList.remove('hide');
        document.body.style.overflow = 'hide';              //заблокируй скролл - т.е. не двигать колесиком мыши
        clearInterval(modalTimerId);                //если ранее запускол окно в ручную обновить интервал
    };
    //Содадим функцию для скрытия окна(в моей задаче много раз закрывать нужно)
    function closeModal () {                    //название объявление
        modal.style.display = 'none';           //закрыть модальное окно
        //modal.classList.add('hide');          //тоже самое для css
        //modal.classList.remove('show');
        document.body.style.overflow = 'show';      //заблокировать скрол
    }
    //Реализуем при нажатии на кнопку закрыть закрываем окно
    modalCloseBtn.addEventListener('click', closeModal);            //при клике вызываем функцию которая закрывает окно
    //Реализуем закрытие при нажатие за пределы окошечка - т.е. на полотно которое называется modal
    modal.addEventListener('click', (e) => {            //добавить событие при клике
        if (e.target === modal) {                       //если (в клике элемент на который нажал строго равно modal) выполни ниже
            closeModal();           //вызове функцию закрытие окна
        };
    });
    //Реализуем фукнцию при закрытие модального окна при нажатии клавиши esc
    document.addEventListener('keydown', (e)=> {            //документ.добавитьСобытиеСписком('при нажитии клавиши' выполни ниже)
        if (e.code  === 'Escape' && modal.style.display == 'block') {           //если в момент нажатия. код кнопки нажатия = Esccape и окномадальное активно выполни ниже
            closeModal();               //вызови функцию по закрытию модального окна
        }
    });

    const modalTimerId = setTimeout(openModal, 10000);              //запускать функцию открытия модальное окно автоматически по истечении 10 сек
    //Реализуем возможность при опускании экрана в самый низ вывести модальное окно
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);        //удаляем событие если оно запускалась что бы избежать повторного запуска
        }
    }
    //Реализуем возможность при опускании экрана в самый низ вывести модальное окно
    window.addEventListener('scroll', showModalByScroll);


/********************Работа с классами********************************************/

    class MenuCard {                                                    //создание нового класса
        constructor(scr, alt, title, descr, price, parentSelector, ...classes) {    //создаем все свойства
            this.src = scr;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        //создадим параметр которые будет конвертировать цену в гривны
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        //элементы которые будут отображаться
        render() {
            const element = document.createElement('div');          //создать в странице блок div и вставить в него аргументы ниже
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            }else{
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `                                   
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            `;
            this.parent.append(element);
        }
    }
    //new MenuCard().render();          //сокращеная форма создания
    const div = new MenuCard(           //создаем переменую и помещаем новый объект с параметрами
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню 'Фитнес'",
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        9,
        '.menu .container',
        'menu__item',
        'big'
    );
    div.render();               //передаем все параметры в render

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    })

    function postData(form) {
        form.addEventListener('submit', (e)=> {
            e.preventDefault();         //что бы страница не перезагружалась

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            //всегда открываем (open), указываем метод post и пусть на который ссылаемся
            request.open('POST', 'server.php');
            
            request.seyRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                }else{
                    statusMessage.textContent = message.failure;
                }
            })
        });
    }
});
// 13:37 остановка





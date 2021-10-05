//Работа с табами (есть несколько табом но видеть должный один и перелистывать на другие)

window.addEventListener('DOMContentLoaded', () => {            //загрузка все элементы и подготовить их
    
    const tabs = document.querySelectorAll('.tabheader__item'),     //создаем переменные = документ.запросВыбратьВсе(менюшка списком)
        tabsContent = document.querySelectorAll('.tabcontent'),   //создаем переменные = документ.запросВыбратьВсе(картинкив центре)
        tabsParent = document.querySelector('.tabheader__items');     //создаем переменные = документ.запросВыбрать(описание под картинкой)

//создаем функцию для скрытия ненужных табов
    function hideTabContent() {                  //фукнция имя()
        tabsContent.forEach(item => {           //перебираем весь массив(где храняться картинки) item счетчик выполни ниже
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
    });
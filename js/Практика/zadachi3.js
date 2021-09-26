'use strict';                           //строгий режим

document.addEventListener('DOMContentLoaded', () => {           //что бы все загружалось корректно все элементы создавались вовремя и загрузились
    const movieDB = {                       //создаем объект и ниже вводим свойство и значения
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const   adv = document.querySelectorAll('.promo__adv img'),     //что забрать со страници несколько блоков в массив
            movielist = document.querySelector('.promo__interactive-list'),     //забрать только один объект
            poster = document.querySelector('.promo__bg'),                  //забрать один объект (картинку на фоне)
            genre = poster.querySelector('.promo__genre'),                  //забрать один объект (строку на фоне)
            addForm = document.querySelector('form.add'),                   //забрать один объект (форма добавления фильма)
            addInput = addForm.querySelector('.adding__input'),              //забрать элемент (строка то что мы вводим)
            checkbox = addForm.querySelector('[type="checkbox"]');           //забрать элемент (проверяем  установлена ли галочка)
    
    addForm.addEventListener('submit', (event) => {                          //при выполнения действий на form.добавитьСобытияСписком(при нажатии выполнить функцию)
        event.preventDefault();                                             //событие.остановить (что бы вся страница не перезагружалась)  

        let newFilm = addInput.value;                                 //создать newFilm присвоить из строки значение (т.е. что введет пользователь в строку 
        const favorite = checkbox.checked;                              //создать переменую favorite присвоить значения checkbox (мы проверяем есть галочка или нет, ответ ждем булево) 

        if (newFilm) {                                    //проверка если переменная newFilm не пусто то выполни ниже
            
            if (newFilm.length > 21)  {                     //проверка если newfilm.Количествобукв > 21 выполни ниже
                newFilm = `${newFilm.substring(0, 22)}...`; //newFilm присвоить $Старое значение newFilm.Подстровдиапозоне(от 0 до 22) и ...
            }

        if (favorite) {                         //если чек бокс установлен выполни ниже
            console.log("Добавляем Любимый фильм");     //вывести в консоль сообщение
        }

            movieDB.movies.push(newFilm);               //обращаемся к базе фильмов . добавить (значение newFilm)
            sortArr(movieDB.movies);                    //обращаемся к функции sortArr для сортировка (по алфавиту)             
            createMovieList (movieDB.movies, movielist);    //для пересоздания списка вызовем функцию 
        }  

        addForm.reset();                //сброс формы (форма добавить новый фильм убрать текст и чек бок - галочку)

    });        
    
    const deleteADV = (arr) => {                //функция для удаления рекламы
        //для удаления рекласного блока их несколько, заберем их в массив и в массиве удалим их по элеметно
        adv.forEach(item => {       //для перебора (а мы получили массив т.к. выше all) используем метод forEach стрелосная функция выполнит ниже
        item.remove();          //удалит каждый элемент рекламного блока
        });
    };

    const makeChanges = () => {             //функция для замены текста и фона 
        //Для замены текста на блоке определим блок и присвоим текст и в этом блоке поменяем фон
        genre.textContent = 'Драма';                //жанр. текст кторый отображается присвоить = новое значени
        poster.style.backgroundImage = 'url("img/bg.jpg")';     //в блоке постера.стиль.фоноваякартинка = присвоить новое значени 'url(обязательно прописываем и другие ковычки, прописываем адрес файла)'
    };
        
    const sortArr = (arr) => {                  //создадим функцию для сортировки списка
        arr.sort();          //базу со списком объектов отсортируем методом sort по алфавиту
    };
    
    function createMovieList(films, parent) {
    //Нумерация и сортировка элементов (список фильмов)
    sortArr(films);
    parent.innerHTML = "";       //сначала поместим пустоту в блок который видит пользователь (очистим)
    
    //необходимо дабавлять каждый элемент (строку) и вставлять номер и название отсортированого фильма
    movieDB.movies.forEach((film, i) => {           //перебрать все значения в базе значения записать в film номера в i выполнить ниже, в html вставить блок и в него добавить значения
        parent.innerHTML += `                    
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
        
        document.querySelectorAll('.delete').forEach((btn, i) => {      //забираем все кнопки удалить. Перебираем все кнопки и выполнить ниже
            btn.addEventListener('click', () => {       //добавляем обработчик событий (при клике выполнить ниже)
                btn.parentElement.remove();             //удалить элемент из списка
                movieDB.movies.splice(i, 1);            //удалить элемент из базы фильмов

                createMovieList(movieDB.movies, movielist);
            }); 
        });
        });
    }
    //вызовем функции и передадим аргументы 
    deleteADV(adv);
    makeChanges();
    
    createMovieList (movieDB.movies, movielist);                
});
'use strict';

let NumbersOfFilms;

function start(){
    NumbersOfFilms = parseInt(prompt('Сколько фильмов вы уже смотрели ? ', ''));
    while (NumbersOfFilms == '' || NumbersOfFilms == null || isNaN(NumbersOfFilms)){
        NumbersOfFilms = parseInt(prompt('Сколько фильмов вы уже смотрели ?', 'Введите число к примеру 2'));
    }
}

start();

const PersonalMovieDB = {
    Count:NumbersOfFilms,
    Movies: {},
    Actors:{},
    Genres:[],
    Privat: false
};

function RememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов'),
        b = prompt('На сколько оцените его ? ', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            PersonalMovieDB.Movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

//RememberMyFilms();

function detectPersonalLevel() {
    if (PersonalMovieDB.Count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (PersonalMovieDB.Count > 10 && PersonalMovieDB.Count < 30) {
        console.log("Вы классический зритель");
    } else if (PersonalMovieDB.Count >= 30) {
        console.log("Вы киноман");
    } else {console.log("Произошла ошибка");}
    
}

//detectPersonalLevel();

function ShowMyDB (hiden) {
    if (!hiden) {
        console.log(PersonalMovieDB);
    }
}
ShowMyDB(PersonalMovieDB.Privat);

function WriteYourGenres() {
    for (let i = 1; i <= 3; i++) {
        PersonalMovieDB.Genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
WriteYourGenres();
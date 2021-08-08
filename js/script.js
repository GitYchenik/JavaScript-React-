'use strict';


const PersonalMovieDB = {
    Count: 0,
    Movies: {},
    Actors: {},
    Genres: [],
    Privat: false,
    Start: function() {
        PersonalMovieDB.Count = parseInt(prompt('Сколько фильмов вы уже смотрели ? ', ''));
        while (PersonalMovieDB.Count == '' || PersonalMovieDB.Count == null || isNaN(PersonalMovieDB.Count)){
            PersonalMovieDB.Count = parseInt(prompt('Сколько фильмов вы уже смотрели ?', 'Введите число к примеру 2'));
        }
    },
    RememberMyFilms: function() {
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
    },
    DetectPersonalLevel: function () {
        if (PersonalMovieDB.Count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (PersonalMovieDB.Count > 10 && PersonalMovieDB.Count < 30) {
            console.log("Вы классический зритель");
        } else if (PersonalMovieDB.Count >= 30) {
            console.log("Вы киноман");
        } else {console.log("Произошла ошибка");}
        
    },

    ShowMyDB: function (hiden) {
        if (!hiden) {
            console.log(PersonalMovieDB); 
        }
    },
    ToggleVisibleMyDB: function() {
        if (PersonalMovieDB.Privat) {
            PersonalMovieDB.Privat = false;
        } else {
            PersonalMovieDB.Privat = true;
        }   
    },

    WriteYourGenres: function() {
        for (let i = 1; i < 2; i++) {
           /*let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null || genre === ' ') {
                console.log('Вы ввели некоректнные данные или не ввели их вовсе');
                i--;
            } else {}
            PersonalMovieDB.Genres[i - 1] = genre;*/
            let genres = prompt(`введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null || genres === ' ') {
                console.log('Вы ввели некоректнные данные или не ввели их вовсе');
                i--;
            } else {}
            PersonalMovieDB.Genres[i - 1] = genres.split(', ');
            PersonalMovieDB.Genres.sort();
            }
        PersonalMovieDB.Genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i +1} - это ${item}`);
        });
    }
};
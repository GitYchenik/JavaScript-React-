const NumbersOfFilms= prompt('Сколько фильмов вы уже смотрели ? ', '');

const PersonalMovieDB = {
    Count:NumbersOfFilms,
    Movies: {},
    Actors:{},
    Genres:[],
    Privat: false
};

const a = prompt('Один из просмотренных фильмов'),
    b = prompt('На сколько оцените его ? ', ''),
    c = prompt('Один из просмотренных фильмов'),
    d = prompt('На сколько оцените его ? ', '');   

    PersonalMovieDB.Movies[a] = b;
    PersonalMovieDB.Movies[c] = d;

console.log(PersonalMovieDB);
const NumbersOfFilms= prompt('Сколько фильмов вы уже смотрели ? ', '');

const PersonalMovieDB = {
    Count:NumbersOfFilms,
    Movies: {},
    Actors:{},
    Genres:[],
    Privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов'),
    b = prompt('На сколько оцените его ? ', '');
    PersonalMovieDB.Movies[a] = b;
}
console.log(PersonalMovieDB);
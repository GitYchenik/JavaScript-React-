const NumbersOfFilms= prompt('Сколько фильмов вы уже смотрели ? ', '');
alert('это алерт');
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
    
    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        PersonalMovieDB.Movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (PersonalMovieDB.Count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (PersonalMovieDB.Count > 10 && PersonalMovieDB.Count < 30) {
    console.log("Вы классический зритель");
} else if (PersonalMovieDB.Count >= 30) {
    console.log("Вы киноман");
} else {console.log("Произошла ошибка");}

console.log(PersonalMovieDB);
"use strict";

let numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


let a;
let b;
let c = 0;

while(c > 2) {
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        c++;
    }
}
//debugger;


console.log(personalMovieDB);


if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов', '');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель', '');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман', '');
} else {
    alert('Произошла ошибка', '');
}

(personalMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов', '') : 
(personalMovieDB.count > 10 && personalMovieDB.count < 30) ? alert('Вы классический зритель', '') :
(personalMovieDB.count > 30) ? alert('Вы киноман', '') : alert('Произошла ошибка', '');


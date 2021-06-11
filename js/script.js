"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(a);
    }
}
writeYourGenres();


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}


function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов', '');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель', '');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман', '');
    } else {
        alert('Произошла ошибка', '');
    }
    
    // (personalMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов', '') : 
    // (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? alert('Вы классический зритель', '') :
    // (personalMovieDB.count > 30) ? alert('Вы киноман', '') : alert('Произошла ошибка', '');
    
}

detectPersonalLevel();


console.log(personalMovieDB);
"use strict";


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        let a;
        let b;
        let c = 0;
        
        while(c < 2) {
            a = prompt('Один из последних просмотренных фильмов?', '');
            b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                c++;
            }
        }
        //debugger;
    },
    detectPersonalLevel: function() {
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
        
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3;) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`);

            if (a != null && a != ' ') {
                personalMovieDB.genres.push(a);
                i++;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${(i + 1)} - это ${item}`);
        });
    },
};


// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

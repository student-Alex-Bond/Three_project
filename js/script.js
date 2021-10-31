/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    const movieList = document.querySelector('.promo__interactive-list');
    const adv = document.querySelectorAll('.promo__adv img');

    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`
        }

        if (favorite && newFilm !== '') {
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            createMOvieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });
    
        const deleteAdv = (arg) => {
        arg.forEach(el => el.remove());
    };
    deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent = 'Drama';

        poster.style.backgroundImage = `url('img/bg.jpg')`;
    };
    makeChanges();



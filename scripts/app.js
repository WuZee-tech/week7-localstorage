const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDispaly = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage =localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDispaly.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.63), rgba(0, 0, 0, 0.425)),
    url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', yearInput);
    movieTitleToDispaly.textContent = movieTitleInput;
    movieYearToDisplay.textContent = yearInput;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.63), rgba(0, 0, 0, 0.425)), 
    url('${posterUrlInput}')`
    movieTitle.value = '';
    moviePosterUrl.value ='';
    movieYear.value ='';

});
let addMovie = document.getElementById('add-movie-btn');
let movieList = document.getElementById('movie-list');
let btnSearch = document.getElementById('search-btn');


let movies = [];


const renderMovie = (filter = '') => {

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible')
    }
    movieList.innerHTML='';

    filterMovies=!filter? movies:movies.filter(el=>el.info.title===filter);

    filterMovies.forEach(el => {
            let liItem = document.createElement('li');
            let {info}=el
            let text = info.title + '-';
            for (const key in info) {
                if (key !== 'title') {
                    text = text + `${key} : ${info[key]}`
                }
            }
            liItem.textContent = text;
            console.log(liItem);
    
            movieList.appendChild(liItem)
        })
    

  

}


const handlerAddMovie = () => {
    let title = document.getElementById('title').value;
    let extraName = document.getElementById('extra-name').value;
    let extraValue = document.getElementById('extra-value').value;
    if (title.trim() === '' || extraValue === '' || extraName === '') return;
    else {

        let movie = {
            info: {
                title,
                [extraName]: extraValue
            },
            id: Math.random()
        }
        movies.push(movie);
        renderMovie();


    }
}

const handlerSearch = () => {
    let filter = document.getElementById('filter-title').value;
    renderMovie(filter);
}



addMovie.addEventListener('click', handlerAddMovie);
btnSearch.addEventListener('click', handlerSearch);






//    let liItem=document.createElement('li');
//    let text=movie.info.title+'-';
//     for (const key in movie.info) {
//        if(key!=='title'){
//         text=text+`${key} : ${movie.info[key]}`
//        }
//     }
//     liItem.textContent=text;
//     console.log(liItem);

//     movieList.appendChild(liItem)
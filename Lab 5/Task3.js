let movies = [];


const addMovie = (title, director, genre, year) =>
    movies.push({ title, director, genre, year });


const listMovies = () =>
    console.log(
        movies
            .map(m => `${m.title} (${m.year}) - ${m.director} [${m.genre}]`)
            .join("\n")
    );


const searchByDirector = d =>
    movies.filter(m => m.director.toLowerCase() === d.toLowerCase());


const searchByGenre = g =>
    movies.filter(m => m.genre.toLowerCase() === g.toLowerCase());



addMovie("Inception", "Christopher Nolan", "Sci-Fi", 2010);
addMovie("Interstellar", "Christopher Nolan", "Sci-Fi", 2014);
addMovie("Titanic", "James Cameron", "Romance", 1997);

listMovies();

console.log(searchByDirector("christopher nolan"));
console.log(searchByGenre("sci-fi"));
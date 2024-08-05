import { useEffect , useState} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=f4b96c5d';

const movie1 = {
    "Title": "Blade Runner 2049",
    "Year": "2017",
    "imdbID": "tt1856101",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Blade Runner')
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            
            <div className='search'>
                <input 
                placeholder='Search for movies' 
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img src={SearchIcon} 
                alt='search'
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
    movies !== undefined ? (
        movies.length > 0 ? (
            <div className='container'>
                {movies.map((movie) => (
                    <MovieCard key={movie.Title} movie={movie} />
                ))}
            </div>
        ) : (
            <div className='empty'>
                <h2>No movies found</h2>
            </div>
        )
    ) : (
        <div>
            <h1>We did not find this movie</h1>
        </div>
    )
}


        </div>
    );
}

export default App;
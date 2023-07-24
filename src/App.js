import {useEffect, useState} from "react";
import './App.css' ;
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=848cb44b';
const movie1= {
    "Title": "Guardians of the Galaxy: Inferno",
    "Year": "2017",
    "imdbID": "tt7131308",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGQ0YzEyNWQtNGJiMi00NTAxLThkNDctNGY2ODkzYWMxZmZkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}

const App=()=>{
    const  [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
        const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();
        setMovies(data.Search);

    }
    useEffect(()=>{
       searchMovies(`Spiderman`)
    },[])
    return (
<div className='app'>
<h1>MovieLand</h1>

<div className="search">
    <input
    placeholder="Search for movies "
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}/>
    < img  src={SearchIcon}
            alt="search" 
            onClick={()=>searchMovies(searchTerm)}/>

</div>
{(movies?.length>0) ? (
    <div className="container">
        {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}</div>)
:(<div className="empty"><h2>No movies found</h2></div>)}</div>);}
export default App;
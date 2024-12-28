import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddFavorites from "./components/AddFavorites";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import RemoveFav from "./components/RemoveFav";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";

const App = ()=>{
        // return <div>Hello</div>;
        const[movies, setMovies]= useState([]);
        const[favorites, setFavorites]=useState([]);
        const[searchValue, setSearchValue]= useState([]);
        let tempValue = "avengers"
        const getMovieRequest = async (searchValue) =>{
            // const url='http://www.omdbapi.com/?s=star wars&apikey=ddc279ba'
            const url= `http://www.omdbapi.com/?s=${searchValue}&apikey=ddc279ba`
            const response = await fetch(url);
            const responseJson = await response.json();
            // console.log(searchValue);
            // console.log(responseJson);
            
            if (responseJson.Search){
              setMovies(responseJson.Search);
            }
            
        };

        useEffect(()=>{
            getMovieRequest(searchValue);
        },[searchValue]);

        const addFavoritesM = (movie) =>{
          const newFavorite = [...favorites,movie];
          setFavorites(newFavorite);
        }
        const removeFavoritesM = (movie) =>{
          const newFavorite = favorites.filter((favorite)=> favorite.imdbID !== movie.imdbID);
          setFavorites(newFavorite);
        }

        return (
        <div className='container-fluid movie-app'>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading='Movies'/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className="row">
                <MovieList movies={movies} handleFavoriteClick={addFavoritesM}favortieComponent={AddFavorites}/>
            </div>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading='Favourites'/>
            </div>
            <div className="row">
                <MovieList movies={favorites} handleFavoriteClick={removeFavoritesM}favortieComponent={RemoveFav}/>
            </div>
        </div>);
};
export default App;
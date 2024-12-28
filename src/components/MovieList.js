import React from "react";

const MovieList = (props)=>{
        const favortieComponent=props.favortieComponent;
        return(       
        <>
        {/* console.log(props.movies) */}
        {props.movies.map((movie, index)=>(
                <div className="image-container d-flex justify-content-start m-3">
                   <img src={movie.Poster} alt="movie"></img>
                   <div onClick={()=>props.handleFavoriteClick(movie)} className="overlay d-flex align-items-center justufy-content-center">
                        <favortieComponent />
                   </div>
                </div>
        ))}
        </>)
}

export default MovieList;
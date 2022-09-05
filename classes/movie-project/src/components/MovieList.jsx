import { useEffect } from "react";
import { useState } from "react";
import { MovieCard } from "./MovieCard";

function MovieList() {
    const [movies, setMovies] = useState([]);

    async function getMovieList(url) {
        return await fetch(url);
    }

    useEffect(() => {
        console.log("Getting data");
        getMovieList("http://www.omdbapi.com/?apikey=cae4a354&s=matrix")
            .then((response) => response.json())
            .then((data) => setMovies(data.Search))
            .catch(console.error);
    }, [setMovies]);

    return (
        <div className="row">
            {movies.map((movie) => {
                return <MovieCard data={movie} key={movie.imdbID} />;
            })}
        </div>
    );
}

export { MovieList };

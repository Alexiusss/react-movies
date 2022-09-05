function MovieCard(props) {
    const movie = props.data;
    return (
        <div className="col m4">
            <div className="card">
                <div className="card-image">
                    <img src={movie.Poster} alt="Card img here"></img>
                    <span className="card-title">{movie.Title}</span>
                </div>
                <div className="card-content">
                    <p>
                        Year: {movie.Year}
                        <br />
                        Type: {movie.Type}
                    </p>
                </div>
            </div>
        </div>
    );
}

export { MovieCard };

import React from "react";
import { Movies } from "../components/Movies";

class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=cae4a354&s=matrix")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    render() {
        const { movies } = this.state;
        return (
            <main container className="content">
                {movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <h3>Loading...</h3>
                )}
            </main>
        );
    }
}

export { Main };

import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
        filmName: "",
    };

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=cae4a354&s=Matrix")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (prevState.filmName !== this.state.filmName) {
            fetch(
                `https://www.omdbapi.com/?apikey=cae4a354&s=${this.state.filmName}`
            )
                .then((response) => response.json())
                .then((data) => this.setState({ movies: data.Search }));
        }
    }

    search = (filmName) => {
        this.setState({ filmName: filmName });
    };

    render() {
        const { movies } = this.state;
        return (
            <main className="container content">
                <Search searchByFilmName={this.search} />
                {movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export { Main };

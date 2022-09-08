import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";
import { RadioButton } from "../components/RadioButton";

class Main extends React.Component {
    state = {
        movies: [],
        type: "",
    };

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=cae4a354&s=matrix&type=movie")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (str) => {
        fetch(
            `https://www.omdbapi.com/?apikey=cae4a354&s=${str}&type=${this.state.type}`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    setType = (str) => {
        this.setState({ type: str });
    };

    render() {
        const { movies } = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                <RadioButton type={this.setType} />
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

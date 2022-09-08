import React from "react";

class RadioButton extends React.Component {
    state = {
        type: "",
    };

    setType = (e) => {
        this.setState({ type: e.target.value });
        this.props.type(e.target.value);
    };

    render() {
        return (
            <div>
                <label>
                    <input
                        type="radio"
                        value=""
                        onChange={this.setType}
                        checked={this.state.type === ""}
                    />
                    <span>All</span>
                </label>

                <label>
                    <input
                        type="radio"
                        value="movie"
                        onChange={this.setType}
                        checked={this.state.type === "movie"}
                    />
                    <span>Movie</span>
                </label>

                <label>
                    <input
                        type="radio"
                        value="series"
                        onChange={this.setType}
                        checked={this.state.type === "series"}
                    />
                    <span>Series</span>
                </label>
            </div>
        );
    }
}

export { RadioButton };

import React from "react";

class Search extends React.Component {
    state = {
        search: "",
    };

    handleSearch = (e) => {
        if (e.key === "Enter") {
            this.props.searchByFilmName(this.state.search);
        }
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleSearch}
                    />
                </div>
            </div>
        );
    }
}

export { Search };

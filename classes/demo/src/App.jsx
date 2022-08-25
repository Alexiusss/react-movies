import React from "react";

class App extends React.Component {
    // Obsolete approach
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //     };
    // }

    // Modern approach
    state = {
        count: 0,
    }

    handleIncrement = () => {
       this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
       this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Hello from React!</p>

                    <button onClick={this.handleIncrement}>+</button>
                    <button>{this.state.count}</button>
                    <button onClick={this.handleDecrement}>-</button>
                </header>
            </div>
        );
    }
}

export default App;

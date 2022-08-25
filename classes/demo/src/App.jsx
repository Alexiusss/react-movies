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

    handleClick = () => {
       //this.setState({count: this.state.count + 1});
       
       this.setState((prevState) => ({count: prevState.count + 1}), () => {
        console.log('sestStateComlete', this.state.count);
       });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Hello from React!</p>

                    <button onClick={this.handleClick}>{this.state.count}</button>
                </header>
            </div>
        );
    }
}

export default App;

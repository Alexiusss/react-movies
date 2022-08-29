import React from "react";

class App extends React.Component {
    state = {
        timer: 0,
        isCounted: false,
    };

    componentDidMount() {
        if (localStorage.getItem("timer") != null) {
            this.setState({ timer: parseInt(localStorage.getItem("timer")) });
        } else {
            this.resetCounter();
        }
    }

    componentDidUpdate() {
        if (this.state.isCounted) {
            this.timerId = setTimeout(() => {
                let innerTimer = this.state.timer + 1;
                this.setState({ timer: innerTimer });
                localStorage.setItem("timer", innerTimer);
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    startCount = () => {
        this.setState({ isCounted: true });
    };

    stopCount = () => {
        clearInterval(this.timerId);
    };

    resetCounter = () => {
        this.setState({ timer: 0, isCounted: false });
        localStorage.setItem("timer", 0);
    };

    render() {
        return (
            <div className="App">
                <h1>React timer</h1>
                {this.state.timer}
                <br />
                {!this.state.isCounted ? (
                    <button id="startButton" onClick={this.startCount}>
                        Start
                    </button>
                ) : (
                    <button id="stopButton" onClick={this.stopCount}>
                        Stop
                    </button>
                )}
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

export default App;

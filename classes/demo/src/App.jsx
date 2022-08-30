import React from "react";
import { Posts } from "./components/Posts";

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
        posts: [
            { id: "abc1", name: "JS Basics" },
            { id: "abc2", name: "JS Advanced" },
            { id: "abc3", name: "React JS" },
        ],
    };

    handleSomething = () => {
        console.log("App.jsx setState update");
    };

    render() {
        return (
            <div className="App">
                <Posts posts={this.state.posts} cb={this.handleSomething} />
            </div>
        );
    }
}

export default App;

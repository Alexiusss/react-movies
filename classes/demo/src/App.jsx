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
        posts: [
            { id: "abc1", name: "JS Basics" },
            { id: "abc2", name: "JS Advanced" },
            { id: "abc3", name: "React JS" },
        ],
    };

    render() {
        return (
            <div className="App">
                {this.state.posts.map((post, index) => (
                    <h2 key={post.id}>{post.name}</h2>
                ))}
            </div>
        );
    }
}

export default App;

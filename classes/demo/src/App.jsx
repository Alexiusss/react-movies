import React from "react";
import { Posts } from "./components/Posts";

class App extends React.Component {
    state = {
        posts: [
            { id: "abc1", name: "JS Basics" },
            { id: "abc2", name: "JS Advanced" },
            { id: "abc3", name: "React JS" },
        ],
    };

    deletePost = (id) => {
        const posts = this.state.posts.filter((post) => post.id !== id);
        this.setState({ posts: posts });
    };

    render() {
        return (
            <div className="App">
                <Posts
                    posts={this.state.posts}
                    delete={(id) => this.deletePost(id)}
                />
            </div>
        );
    }
}

export default App;

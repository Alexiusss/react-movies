import React from "react";

class Form extends React.Component {
    state = {
        firstName: "",
        email: "",
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { firstName, email } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={this.handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your first email address"
                    value={email}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export { Form };

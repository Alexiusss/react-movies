import React from "react";

class Form extends React.Component {
    state = {
        firstName: "",
        email: "",
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert("Your first name can`t be less than 5 characters long.");
        }
    };

    validateEmail = () => {
        if (
            !/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-0-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                this.state.email
            )
        ) {
            alert("Please enter a valid email address.");
        }
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
                    onBlur={this.validateName}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your first email address"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
            </div>
        );
    }
}

export { Form };

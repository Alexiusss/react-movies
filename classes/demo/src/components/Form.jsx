import React from "react";

class Form extends React.Component {
    state = {
        email: "",
        terms: false,
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCheckboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    };

    validateEmail = () => {
        if (
            !/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-0-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                this.state.email
            )
        ) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    validateCheckbox = () => {
        if (!this.state.terms) {
            alert("You should accept all terms.");
            return false;
        }
        return true;
    };

    cleanForm = () => {
        this.setState({ email: "" });
        this.setState({ terms: false });
    };

    subscribe = () => {
        let isEmailValid = this.validateEmail();
        let isCheckboxValid = this.validateCheckbox();

        if (isEmailValid && isCheckboxValid) {
            alert("Congratulations! You have successfully subscribed!");
            this.cleanForm();
        }
    };

    render() {
        const { email, terms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your first email address"
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={terms}
                        onChange={this.handleCheckboxChange}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.subscribe}>Send</button>
            </div>
        );
    }
}

export { Form };

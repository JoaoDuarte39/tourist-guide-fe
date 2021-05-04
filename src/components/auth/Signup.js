import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {

    state = { email: '', password: '' }

    service = new AuthService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        this.service.signup(email, password)
            .then(response => {
                this.setState({
                    email: "",
                    password: "",
                });
                this.props.setUser(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Signup" />
                </form>

                <p>Already have account?
          <Link to={"/sign-in"}> Login</Link>
                </p>
            </div>
        )
    }
}

export default Signup;
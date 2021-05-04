import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { email: '', password: '' }

    service = new AuthService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        this.service.login(email, password)
            .then(response => {
                this.setState({ email: "", password: "" });
                console.log("response.data", response.data)
                this.props.setTheUser(response.data)
                this.props.history.push('/user/profile')
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

                    <input type="submit" value="Login" />
                </form>
                <p>Don't have account?
            <Link to={"/signup"}> Signup</Link>
                </p>
            </div>
        )
    }
}

export default Login;
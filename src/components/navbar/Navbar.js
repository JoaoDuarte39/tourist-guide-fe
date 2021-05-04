import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

class Navbar extends Component {
    service = new AuthService()

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.props.setTheUser(null);
            })
    }

    render() {
        if (this.props.loggedInUser) {
            return (
                <nav className="nav-style">
                    <ul>
                        <li>Welcome, {this.props.loggedInUser.email}</li>
                        <li><Link to='/business/list'>Business</Link></li>
                        <li><Link to='/business/add'>Add Business</Link></li>
                        <li><Link to='/course/list'>Course</Link></li>
                        <li><Link to='/course/add'>Add Course</Link></li>
                        <li><Link to='/guide/list'>Guide</Link></li>
                        <li><Link to='/guide/add'>Add Guide</Link></li>
                        <li><Link to='/monument/list'>Monument</Link></li>
                        <li><Link to='/monument/add'>Add Monument</Link></li>
                        <li>
                            <Link to='/'>
                                <button onClick={() => this.logoutUser()}>Logout</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav className="nav-style">
                    <ul>
                        <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
                        <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
                    </ul>
                </nav>
            )
        }
    }
}

export default Navbar;
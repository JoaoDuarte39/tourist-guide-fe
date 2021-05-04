import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:5000/authentication',
            withCredentials: true
        });
        this.service = service;
    }
    signup = (email, password) => {
        return this.service.post('/signup', { email, password })
            .then(response => response.data)
    }
    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }
    login = (email, password) => {
        return this.service.post('/sign-in', { email, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }
}

export default AuthService;
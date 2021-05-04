import axios from 'axios';


class MonumentService {

    constructor() {
        let Service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = Service;

    }

    createMonument = (name) => {
        return this.service.post('/monument', { name })
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }
    getMonuments = () => {
        return this.service.get('/monument')
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }

}

export default MonumentService;
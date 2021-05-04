import axios from 'axios';


class BusinessService {

    constructor() {
        let Service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = Service;

    }

    createBusiness = (name) => {
        return this.service.post('/business', { name })
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }
    getBusinesses = () => {
        return this.service.get('/business')
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }

}

export default BusinessService;
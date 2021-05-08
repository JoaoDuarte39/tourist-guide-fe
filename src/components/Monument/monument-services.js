import axios from 'axios';


class MonumentService {

    constructor() {
        let Service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = Service;

    }

    createMonument = (monumentData) => {
        return this.service.post('/monument', monumentData)
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
    getMonumentById = (monumentId) => {
        return this.service.get(`/monument/${monumentId}`)
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }
    editMonument = (monumentId, monumentToEdit) => {
        return this.service.put(`/monument/${monumentId}`, monumentToEdit)
            .then((response) => response.data)
    }

    deleteMonumentById = (monumentId) => {
        return this.service.delete(`/monument/${monumentId}`)
            .then((response) => response.data)
    }


}

export default MonumentService;
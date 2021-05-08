import axios from 'axios';


class GuideService {

    constructor() {
        let Service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = Service;

    }

    createGuide = (guideData) => {
        return this.service.post('/guide', guideData)
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }

    getGuideById = (guideId) => {
        return this.service.get(`/guide/${guideId}`)
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }
    getGuides = () => {
        return this.service.get('/guide')
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }
    editGuide = (guideId, guideToEdit) => {
        return this.service.put(`/guide/${guideId}`, guideToEdit)
            .then((response) => response.data)
    }

    deleteGuideById = (guideId) => {
        return this.service.delete(`/guide/${guideId}`)
            .then((response) => response.data)
    }

}

export default GuideService;
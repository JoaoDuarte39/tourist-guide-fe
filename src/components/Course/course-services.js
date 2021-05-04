import axios from 'axios';


class CourseService {

    constructor() {
        let Service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = Service;

    }

    createCourse = (courseData) => {
        return this.service.post('/course', courseData)
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }
    getCourses = () => {
        return this.service.get('/course')
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }

}

export default CourseService;
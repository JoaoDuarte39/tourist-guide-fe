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
    getCourseById = (courseId) => {
        return this.service.get(`/course/${courseId}`)
            .then(response => {
                console.log('response', response)
                return response.data
            })
    }

    editCourse = (courseId, courseToEdit) => {
        return this.service.put(`/course/${courseId}`, courseToEdit)
            .then((response) => response.data)
    }
    deleteCourseById = (courseId) => {
        return this.service.delete(`/course/${courseId}`)
            .then((response) => response.data)
    }

}

export default CourseService;
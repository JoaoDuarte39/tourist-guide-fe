import React, { Component } from 'react'
import AddCourse from './AddCourse';
import CourseService from "./course-services"
import { Link } from 'react-router-dom';

export default class CourseList extends Component {
    state = { courses: [] }
    CourseService = new CourseService()

    componentDidMount() {
        console.log('course list mounted', this.state.courses)
        this.CourseService.getCourses()
            .then((response) => {
                this.setState({ courses: response.data })
            })
    }

    render() {
        console.log('course list render', this.state.courses)
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    {this.state.courses.map(course => {
                        return (
                            <div key={course._id}>
                                <Link to={`/course/${course._id}`}>
                                    <h3>{course.name}</h3>
                                </Link>
                                <Link to={`/course/${course._id}/edit`}>
                                    edit
                                </Link>
                                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                            </div>
                        )
                    })
                    }
                </div>
                <div >
                    <AddCourse /> {/* <== !!! */}
                </div>
            </div>
        )
    }
}

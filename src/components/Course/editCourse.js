import React, { Component } from 'react';
import MonumentList from '../Monument/MonumentList';
import CourseService from "./course-services"

class EditCourse extends Component {
    state = { name: "", guides: [], image: "", monuments: [], reviews: [], _id: "", description: "", business: [], transportation: "" }
    CourseService = new CourseService()


    getCourse = () => {
        const courseId = this.props.match.params.id
        return this.CourseService.getCourseById(courseId)
            .then(response => {
                /* console.log('this is the business', response) */
                this.setState({ ...response.data })
                console.log("this.state", this.state)
            })
    }


    handleFormSubmit = (event) => {

        const courseId = this.state._id;
        const courseToEdit = this.state
        event.preventDefault();
        this.CourseService.editCourse(courseId, courseToEdit)
            .then((editedCourse) => {
                this.setState({ ...editedCourse })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.name)
    }



    componentDidMount() {
        this.getCourse()
    }

    deleteCourseById(courseId) {
        this.CourseService.deleteCourseById(courseId)
    }

    addMonument(monumentId) {
        this.setState({ monuments: [...this.state.monuments, monumentId] });

    }

    removeMonument(monumentId) {
        const monumentArray = this.state.monuments.filter(monument => {
            return monument._id !== monumentId
        })

        console.log("monumentArray", monumentArray)
        this.setState({ monuments: monumentArray });
    }

    render() {
        console.log(this.state.monuments)
        return (
            <div>
                <hr />
                <h3>Edit form</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    <label>description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                    <label>Transportation:</label>
                    <select name="transportation" value={this.state.transportation} onChange={e => this.handleChange(e)} >
                        <option value="bike">Bike</option>
                        <option value="segway">Segway</option>
                        <option value="onfoot">Onfoot</option>
                        <option value="tuktuk">Tuktuk</option>
                        <option value="car">Car</option>
                        <option value="bus">Bus</option>
                    </select>
                    <MonumentList addMonument={this.addMonument} />

                    <input type="submit" value="Submit" />
                </form>
                <button onClick={() => this.deleteCourseById(this.state._id)}>
                    Delete
                  </button>
            </div>
        )
    }
}

export default EditCourse;
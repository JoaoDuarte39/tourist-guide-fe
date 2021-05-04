import React, { Component } from 'react';
import CourseService from "./course-services"

class AddCourse extends Component {
    state = { name: "", transportation: "" }
    CourseService = new CourseService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.CourseService.createCourse(this.state)
            .then(() => {
                this.setState({ name: "", transportation: "" });
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />

                    <label>Transportation:</label>
                    <select name="transportation" value={this.state.transportation} onChange={e => this.handleChange(e)} >
                        <option value="bike">Bike</option>
                        <option value="segway">Segway</option>
                        <option value="onfoot">Onfoot</option>
                        <option value="tuktuk">Tuktuk</option>
                        <option value="car">Car</option>
                        <option value="bus">Bus</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddCourse;
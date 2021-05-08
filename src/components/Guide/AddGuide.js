import React, { Component } from 'react';
import GuideService from "./guide-services"

class AddGuide extends Component {
    state = { name: "" }
    GuideService = new GuideService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.GuideService.createGuide(this.state)
            .then(() => {
                this.setState({ name: "" });
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddGuide;
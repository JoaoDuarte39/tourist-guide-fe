import React, { Component } from 'react';
import BusinessService from "./business-services"

class AddBusiness extends Component {
    state = { name: "" }
    BusinessService = new BusinessService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        this.BusinessService.createBusiness(name)
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

export default AddBusiness;
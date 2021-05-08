import React, { Component } from 'react';
import BusinessService from "./business-services"

class EditBusiness extends Component {
    state = { name: "", guides: "", image: "", monuments: [], reviews: [], _id: "", owners: [], description: "", ticketPrice: "", schedule: "" }
    BusinessService = new BusinessService()


    getBusiness = () => {
        const businessId = this.props.match.params.id
        return this.BusinessService.getBusinessById(businessId)
            .then(response => {
                /* console.log('this is the business', response) */
                this.setState({ ...response.data })
                console.log("this.state", this.state)
            })
    }


    handleFormSubmit = (event) => {

        const businessId = this.state._id;
        const businessToEdit = this.state
        event.preventDefault();
        this.BusinessService.editBusiness(businessId, businessToEdit)
            .then((editedBusiness) => {
                this.setState({ ...editedBusiness })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.name)
    }



    componentDidMount() {
        this.getBusiness()
    }

    deleteBusinessById(businessId) {
        this.BusinessService.deleteBusinessById(businessId)
    }

    render() {
        return (
            <div>
                <hr />
                <h3>Edit form</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    <label>description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                    <label>ticketPrice:</label>
                    <input type="text" name="ticketPrice" value={this.state.ticketPrice} onChange={(e) => this.handleChange(e)} />
                    <label>schedule:</label>
                    <input type="text" name="schedule" value={this.state.schedule} onChange={(e) => this.handleChange(e)} />

                    <input type="submit" value="Submit" />
                </form>
                <button onClick={() => this.deleteBusinessById(this.state._id)}>
                    Delete
                  </button>
            </div>
        )
    }
}

export default EditBusiness;
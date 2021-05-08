import React, { Component } from 'react';
import GuideService from "./guide-services"

class EditGuide extends Component {
    state = { name: "", courses: "", business: "", image: "", monuments: [], reviews: [], _id: "", owners: [], description: "" }
    GuideService = new GuideService()


    getGuide = () => {
        const guideId = this.props.match.params.id
        return this.GuideService.getGuideById(guideId)
            .then(response => {
                /* console.log('this is the business', response) */
                this.setState({ ...response.data })
                console.log("this.state", this.state)
            })
    }


    handleFormSubmit = (event) => {

        const guideId = this.state._id;
        const guideToEdit = this.state
        event.preventDefault();
        this.GuideService.editGuide(guideId, guideToEdit)
            .then((editedGuide) => {
                this.setState({ ...editedGuide })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.name)
    }



    componentDidMount() {
        this.getGuide()
    }

    deleteGuideById(guideId) {
        this.GuideService.deleteGuideById(guideId)
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


                    <input type="submit" value="Submit" />
                </form>
                <button onClick={() => this.deleteGuideById(this.state._id)}>
                    Delete
                  </button>
            </div>
        )
    }
}

export default EditGuide;
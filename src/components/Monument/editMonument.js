import React, { Component } from 'react';
import MonumentService from "./monument-services"

class EditMonument extends Component {
    state = { name: "", image: "", reviews: [], _id: "", description: "" }
    MonumentService = new MonumentService()


    getMonument = () => {
        const monumentId = this.props.match.params.id
        return this.MonumentService.getMonumentById(monumentId)
            .then(response => {
                /* console.log('this is the business', response) */
                this.setState({ ...response.data })
                console.log("this.state", this.state)
            })
    }


    handleFormSubmit = (event) => {

        const monumentId = this.state._id;
        const monumentToEdit = this.state
        event.preventDefault();
        this.MonumentService.editMonument(monumentId, monumentToEdit)
            .then((editedMonument) => {
                this.setState({ ...editedMonument })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.name)
    }



    componentDidMount() {
        this.getMonument()
    }

    deleteMonumentById(monumentId) {
        this.MonumentService.deleteMonumentById(monumentId)
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
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={() => this.deleteMonumentById(this.state._id)}>
                    Delete
                  </button>
            </div>
        )
    }
}

export default EditMonument;
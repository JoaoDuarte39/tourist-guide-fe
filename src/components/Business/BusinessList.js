import React, { Component } from 'react'
import AddBusiness from './AddBusiness';
import BusinessService from "./business-services"
import { Link } from 'react-router-dom';

export default class BusinessList extends Component {
    state = { businesses: [] }
    BusinessService = new BusinessService()

    componentDidMount() {
        this.BusinessService.getBusinesses()
            .then((response) => {
                console.log(response)
                this.setState({ businesses: response.data })
            })
    }

    render() {
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    {this.state.businesses.map(business => {
                        return (
                            <div key={business._id}>
                                <Link to={`/business/${business._id}`}>
                                    <h3>{business.name}</h3>
                                </Link>
                                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                            </div>
                        )
                    })
                    }
                </div>
                <div >
                    <AddBusiness /> {/* <== !!! */}
                </div>
            </div>
        )
    }
}

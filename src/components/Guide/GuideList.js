import React, { Component } from 'react'
import AddGuide from './AddGuide';
import GuideService from "./guide-services"
import { Link } from 'react-router-dom';

export default class GuideList extends Component {
    state = { guides: [] }
    GuideService = new GuideService()

    componentDidMount() {
        console.log('guide list mounted', this.state.guides)
        this.GuideService.getGuides()
            .then((response) => {
                this.setState({ guides: response.data })
            })
    }

    render() {
        console.log('guide list render', this.state.guides)
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    {this.state.guides.map(guide => {
                        return (
                            <div key={guide._id}>
                                <Link to={`/guide/${guide._id}`}>
                                    <h3>{guide.name}</h3>
                                </Link>
                                <Link to={`/guide/${guide._id}/edit`}>
                                    edit
                                </Link>
                                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                            </div>
                        )
                    })
                    }
                </div>
                <div >
                    <AddGuide /> {/* <== !!! */}
                </div>
            </div>
        )
    }
}
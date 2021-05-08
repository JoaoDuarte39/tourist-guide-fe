import React, { Component } from 'react'
import MonumentService from "./monument-services"
import { Link } from 'react-router-dom';

export default class MonumentList extends Component {
    state = { monuments: [] }
    MonumentService = new MonumentService()

    componentDidMount() {
        console.log('monument list mounted', this.state.monuments)
        this.MonumentService.getMonuments()
            .then((response) => {
                this.setState({ monuments: response.data })
            })
    }

    render() {
        console.log('monument list render', this.state.monuments)
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    {this.state.monuments.map(monument => {
                        return (
                            <div key={monument._id}>
                                <Link to={`/monument/${monument._id}`}>
                                    <h3>{monument.name}</h3>
                                </Link>
                                <Link to={`/monument/${monument._id}/edit`}>
                                    edit
                                </Link>
                                {this.props.addMonumentToCourse &&
                                    <button onClick={() => this.props.addMonumentToCourse(monument._id)}>Add</button>
                                }
                                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                            </div>
                        )
                    })
                    }
                </div>
                {/* <div >
                    <AddMonument />
                </div> */}
            </div>
        )
    }
}
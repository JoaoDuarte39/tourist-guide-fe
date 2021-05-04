import React, { Component } from 'react'
import AddMonument from './AddMonument';
import MonumentService from "./monument-services"
import { Link } from 'react-router-dom';

export default class MonumentList extends Component {
    state = { monuments: [] }
    MonumentService = new MonumentService()

    componentDidMount() {
        this.MonumentService.getMonuments()
            .then((response) => {
                this.setState({ monuments: response.data })
            })
    }

    render() {
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    {this.state.monuments.map(monument => {
                        return (
                            <div key={monument._id}>
                                <Link to={`/monument/${monument._id}`}>
                                    <h3>{monument.name}</h3>
                                </Link>
                                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                            </div>
                        )
                    })
                    }
                </div>
                <div >
                    <AddMonument /> {/* <== !!! */}
                </div>
            </div>
        )
    }
}
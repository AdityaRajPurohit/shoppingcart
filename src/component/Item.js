import React, { Component } from 'react'
import './Item.css';

export default class Item extends Component {
    render() {
        return (
            <tr className="item-container">
                <td >
                    <div className="d-flex flex-row card-row row">
                        <div className="p-2 img-container">
                            <img className="card-img" src={require("./assets/P1.jpg")} alt="item"></img>
                        </div>
                        <div className="p-2">
                            <h5 className="card-title ">Off White Cotton Pant</h5>
                            <div >
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td> <button className="text-muted btn fts">Edit</button></td>
                                            <td> <button className="text-muted btn fts">Remove</button></td>
                                            <td> <button className="text-muted btn fts">
                                                <span aria-hidden="true">&times; Save for later</span>
                                            </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>

                </td>
            </tr>

        )
    }
}

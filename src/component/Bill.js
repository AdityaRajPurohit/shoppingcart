import React, { Component } from 'react'

export default class Bill extends Component {
    render() {
        return (
            <div>
                <div className="card col-3 table-responsive">
                    <table className="table">
                        <thead>
                            <th span="row">Price Details</th>
                            <tr>Total Price</tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

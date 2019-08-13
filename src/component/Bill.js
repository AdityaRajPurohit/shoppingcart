import React, { Component } from 'react'
import './Item.css';
export default class Bill extends Component {
    render() {
        return (
            <div className="bill">
                <div className="bill-container card col-3 table-responsive">
                    <table className="table">
                        <thead>
                            <th span="row">Price Details</th>
                            <tr>Total Price</tr>
                            <tr>$13</tr>

                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

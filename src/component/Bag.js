import React, { Component } from 'react'
import Item from './Item';
import './Item.css';

export default class Bag extends Component {
    render() {
        return (
            <div className="list">
                <table className="table">
                    <thead>
                        <th>In your Cart</th>
                    </thead>
                    <tbody>
                        <Item />
                    </tbody>
                </table>
                <br />
            </div>
        )
    }
}

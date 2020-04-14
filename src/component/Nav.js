import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/hire'>Hire me</Link></li>
                </ul>
            </div>
        )
    }
}

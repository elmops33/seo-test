import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render () {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/" className="navbar-brand">SEO Test</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            {/* <li>
                                <Link to="/create" className="nav-link">Create New User</Link>
                            </li>
                            <li>
                                <Link to="/task" className="nav-link">Create Task</Link>
                            </li> */}
                        </ul>
                    </div>
            </nav>
        );
    }
}
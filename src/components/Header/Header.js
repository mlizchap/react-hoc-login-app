import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header"> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <button>Login/Logout</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
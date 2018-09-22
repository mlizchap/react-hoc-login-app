import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeAuth } from '../../actions';
import './Header.scss';

class Header extends Component {
    handleLogin = () => {
        this.props.changeAuth()
    }
    render() {
        return (
            <div className="header"> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li>
                        <button onClick={this.props.changeAuth}>{this.props.auth ? 'log out' : 'log in'}</button>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth}
}

export default connect(mapStateToProps, {changeAuth})(Header);
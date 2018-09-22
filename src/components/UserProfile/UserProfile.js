import React, { Component } from 'react';
import checkUserAuth from '../../checkUserAuth';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h4>User Profile</h4>
            </div>
        );
    }
}

export default checkUserAuth(UserProfile);
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import NewPost from '../NewPost/NewPost';
import PostList from '../PostList/PostList';
import UserProfile from '../UserProfile/UserProfile';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route path="/" component={Header} />
                    <div className="app-body"> 
                    <Switch>
                        <Route path="/new" component={NewPost} />
                        <Route path="/profile" component={UserProfile} />
                        <Route path="/" component={PostList} />
                    </Switch>
                    </div>
            </div>
        )
    }
}

export default App;
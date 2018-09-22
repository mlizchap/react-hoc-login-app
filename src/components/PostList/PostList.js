import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to="/new">Create new post</Link>
                <h4>list of posts:</h4>
                <Post />
            </div>
        );
    }
}

export default PostList;
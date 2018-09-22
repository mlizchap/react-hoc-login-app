import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Post from '../Post/Post';
import { map } from 'when';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        {console.log(this.props.posts)}
        return (
            <div>
                <Link to="/new">Create new post</Link>
                <h2>list of posts:</h2>
                {this.props.posts.map(post => {
                    return <Post key={post.id} text={post.text}/>
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(PostList);
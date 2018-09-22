import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div className="post">{this.props.text}</div>  
        );
    }
}

export default Post;
import React, { Component } from 'react';

import './NewPost.scss';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="createPost">
                Create New Post
                <form>
                    <textarea />
                    <button>submit</button>
                    <button>cancel</button>
                </form>
            </div>
        );
    }
}

export default NewPost;
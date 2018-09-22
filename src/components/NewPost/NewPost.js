import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../actions';
import './NewPost.scss';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: ''
         };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state.input);
        this.props.history.push('/');
    }

    handleInputChange = (e) => {
        this.setState({ input: e.target.value});
    }

    render() {
        return (
            <div className="createPost">
                <form onSubmit={this.handleSubmit}>
                    <label>New Post: </label>
                    <input value={this.state.input} onChange={this.handleInputChange} />
                    <div className="buttons">
                        <button>submit</button>
                        <button>cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { createPost })(NewPost);
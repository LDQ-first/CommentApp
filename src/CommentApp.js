import React, {Component} from 'react'
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'

class CommentApp extends Component {
    handleSubmitComment (comment) {
        console.log(comment);
    }

    render() {
        return (
            <div className = "wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList />
            </div>
        )
    }
}

export default CommentApp
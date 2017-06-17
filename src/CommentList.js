import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
     static defalutProps = {
         comments: []   
    }

    render() {
        return (
            <div>
                {comments.map( (comment, i) => 
                    <Comment key={i} comment={comment}></Comment>)
                }
            </div>
        ) 
    }
}

export default CommentList
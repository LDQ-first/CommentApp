import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

export default class CommentList extends Component {
    static propsTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

     static defaultProps = {
         comments: []   
    }

    handleDeleteComment (index) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map( (comment, i) => 
                    <Comment key={i} comment={comment} index={i}
                    onDeleteComment={this.handleDeleteComment.bind(this)}></Comment>)
                }
            </div>
        ) 
    }
}

import React, {Component} from 'react'
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'


export default class CommentApp extends Component {
    render() {
        return (
            <div className = "wrapper">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}

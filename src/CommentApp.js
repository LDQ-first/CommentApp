import React, {Component} from 'react'
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount () {
        this._loadComments()
    }

   

    _loadComments () {
        if(localStorage.comments) {
            this.setState({
                comments: JSON.parse(localStorage.comments)
            })
        }
    }

    _saveComments (comments) {
        localStorage.comments = JSON.stringify(comments)
    }


    handleSubmitComment (comment) {
        if(!comment) {
            return alert('评论不能为空！')
        }
        if(!comment.username) {
            return alert('请输入用户名')
        }
        if(!comment.content) {
            return alert('请输入评论内容')
        }
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this._saveComments(comments)
    }

    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments})
        this._saveComments(comments)
    }



    render() {
        return (
            <div className = "wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp
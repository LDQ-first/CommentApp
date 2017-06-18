import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWidthLoadData from './wrapWithLoadData.js'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            username: props.data,
            content: '',
            createdTime: '',
        }
    }
    componentDidMount () {
        this._textarea.focus()
    }

    /*componentWillMount () {
        this._loadUsername();
    }

    _loadUsername () {
        if(localStorage.username) {
            this.setState({
                username: localStorage.username
            })
        }
    }

    _saveUsername (username) {
        localStorage.username = username;
    }
*/
    handleUsernameBlur (e) {
        /*this._saveUsername(e.target.value);*/
        this.props.saveData(e.target.value)
    }


    handleUsernameChange (e) {
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange (e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit () {
        if(this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({
                username,
                content,
                createdTime:  +new Date()
            });
        }
        this.setState({content: ''});
    }

   

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                        onBlur={this.handleUsernameBlur.bind(this)}
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                        ref={textarea => this._textarea = textarea}
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button  onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

CommentInput = wrapWidthLoadData(CommentInput, 'username')
export default CommentInput
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            content: '',
            createdTime: ''
        }
    }
    componentDidMount () {
        this._textarea.focus()
    }

    
    handleUsernameBlur (e) {
        if(this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(e.target.value)
        }
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

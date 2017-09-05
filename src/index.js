import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
/*import CommentApp from './CommentApp.js'*/
import CommentApp from './containers/CommentApp.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import commentsReducer from './reducers/comments.js'

const store = createStore(
    commentsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>, 
document.getElementById('root'));


import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import PostList from '../components/PostList';

class Posts extends React.Component {
  render () {
    return (
        <div className='list'>
          <PostList />
        </div>
    )
  }
}

export default withRedux(initStore, null, null)(Posts)
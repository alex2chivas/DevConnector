import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getPosts } from '../../actions'
import Spinner from '../layout/Spinner'

const Post = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <Fragment>
      <div className=''>Hi</div>
    </Fragment>
  )
}

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, { getPosts })(Post)

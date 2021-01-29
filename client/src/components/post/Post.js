import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Spinner from '../layout/Spinner'
import { getPost } from '../../actions'
import PostItem from '../posts/PostItem'

const Post = ({ getPost, post: { post, loading }, match }) => {
  console.log(post)
  useEffect(() => {
    getPost(match.params.id)
  }, [getPost])

  return (
    <Fragment>
      {loading || post === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/posts' className='btn btn-primary'>
            Back to Posts
          </Link>
          <PostItem post={post} showActions={false} />
        </Fragment>
      )}
    </Fragment>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return { post: state.post }
}

export default connect(mapStateToProps, { getPost })(Post)

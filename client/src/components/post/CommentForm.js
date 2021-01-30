import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

import { TextAreaComponent } from '../formFields/addPostAndCommentField'
import { addComment } from '../../actions'
import validate from '../formFields/fieldLevelValidation'

const CommentForm = ({ postId, addComment, handleSubmit }) => {
  const onSubmit = value => {
    addComment(postId, value)
  }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='form my-1'>
        <Field
          name='text'
          component={TextAreaComponent}
          placeholder='Create a post'
          style={{
            display: 'block',
            width: '100%',
            padding: '0.4rem',
            fontSize: '1.2rem',
            border: ' 1px solid #ccc'
          }}
        />
        <div />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default compose(
  reduxForm({
    form: 'CommentForm',
    destroyOnUnmount: true,
    enableReinitialize: true,
    validate
  }),
  connect(null, { addComment })
)(CommentForm)

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { withRouter, Link } from 'react-router-dom'
import * as uuid from 'uuid'

import {
  checkComponent,
  fields
} from '../../components/formFields/addEducationFields'
import validate from '../../components/formFields/fieldLevelValidation'
import { addEducation } from '../../actions'

let AddEducation = ({
  handleSubmit,
  history,
  hasCurrentValue,
  addEducation
}) => {
  const educationFields = () => {
    return fields.map(({ name, type, label, text }) => {
      return (
        <Field
          key={`${uuid.v4}_${name}`}
          name={name}
          type={type}
          label={label}
          text={text}
          component={checkComponent(name)}
          hasCurrentValue={hasCurrentValue}
        />
      )
    })
  }

  const onSubmit = values => {
    addEducation(values, history)
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add an schools or bootcamps you
        attended
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {educationFields()}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  )
}

AddEducation = reduxForm({
  form: 'AddEducationForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
  validate
})(AddEducation)

const selector = formValueSelector('AddEducationForm')

const mapStateToProps = state => {
  const hasCurrentValue = selector(state, 'current')
  return { hasCurrentValue }
}

AddEducation = connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
)

export default AddEducation

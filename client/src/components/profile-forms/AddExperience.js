import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { withRouter, Link } from 'react-router-dom'
import * as uuid from 'uuid'

import {
  checkComponent,
  fields
} from '../../components/formFields/addExperienceFields'
import validate from '../../components/formFields/fieldLevelValidation'
import { addExperience } from '../../actions'

let AddExperience = ({
  handleSubmit,
  history,
  hasCurrentValue,
  addExperience
}) => {
  const experienceFields = () => {
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
    addExperience(values, history)
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Add An Experience</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {experienceFields()}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  )
}

AddExperience = reduxForm({
  form: 'AddExperienceForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
  validate
})(AddExperience)

const selector = formValueSelector('AddExperienceForm')

const mapStateToProps = state => {
  const hasCurrentValue = selector(state, 'current')
  return { hasCurrentValue }
}

AddExperience = connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
)

export default AddExperience

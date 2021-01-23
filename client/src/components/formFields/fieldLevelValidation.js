const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }

  if (!values.company) {
    errors.company = 'Required'
  }

  if (!values.school) {
    errors.school = 'Required'
  }

  if (!values.degree) {
    errors.degree = 'Required'
  }

  if (!values.fieldofstudy) {
    errors.fieldofstudy = 'Required'

    return errors
  }
}

export default validate

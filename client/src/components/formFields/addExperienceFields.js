import React from 'react'

export const fields = [
  {
    type: 'text',
    name: 'title',
    label: '* Job Title'
  },
  {
    type: 'text',
    name: 'company',
    label: '* Company'
  },
  {
    type: 'text',
    name: 'location',
    label: 'Location'
  },
  {
    type: 'date',
    name: 'from',
    text: ' From Date '
  },
  {
    type: 'checkbox',
    name: 'current',
    text: ' Current Job '
  },
  {
    type: 'date',
    name: 'to',
    text: ' To Date '
  },
  {
    type: 'textarea',
    name: 'description',
    label: ' Job Description '
  }
]

const InputComponentText = ({
  type,
  input,
  name,
  label,
  meta: { touched, error, warning }
}) => {
  return (
    <div className='form-group'>
      <input type={type} placeholder={label} name={name} {...input} />
      {touched &&
        ((error && <span style={{ color: 'red' }}>{error}</span>) ||
          (warning && <span style={{ color: 'red' }}>{warning}</span>))}
    </div>
  )
}

const InputComponentTo = ({ type, input, name, text, hasCurrentValue }) => {
  return (
    <div className='form-group'>
      <h4>{text}</h4>
      <input
        type={type}
        name={name}
        {...input}
        disabled={hasCurrentValue ? 'disabled' : ''}
      />
    </div>
  )
}

const InputComponentFrom = ({ type, input, name, text }) => {
  return (
    <div className='form-group'>
      <h4>{text}</h4>
      <input type={type} name={name} {...input} />
    </div>
  )
}

const TextAreaComponentAndCheckBox = ({ type, input, name, label, text }) => {
  return type === 'textarea' ? (
    <div className='form-group'>
      <textarea
        type={type}
        name={name}
        placeholder={label}
        {...input}
      ></textarea>
    </div>
  ) : (
    <div className='form-group'>
      <h4>{text}</h4>
      <input type={type} name={name} {...input} />
    </div>
  )
}

export const checkComponent = name => {
  switch (name) {
    case 'title':
    case 'company':
    case 'location':
      return InputComponentText
    case 'from':
      return InputComponentFrom
    case 'to':
      return InputComponentTo
    default:
      return TextAreaComponentAndCheckBox
  }
}

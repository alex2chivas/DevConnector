import React, { Fragment } from 'react'

export const TextAreaComponent = ({
  input,
  name,
  label,
  meta,
  meta: { warning, error, touched }
}) => {
  console.log(meta)
  return (
    <Fragment>
      <textarea type='textarea' name={name} placeholder={label} {...input} />
      {touched &&
        ((error && <span style={{ color: 'red' }}>{error}</span>) ||
          (warning && <span style={{ color: 'red' }}>{warning}</span>))}
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const PorfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  const firstName = name.trim().split(' ')[0]
  const checkToAddLetter = firstName.endsWith('s') && 's'

  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>
            {firstName}
            {!checkToAddLetter && 's '} Bio
          </h2>
          <p>{bio}</p>
          <div className='line'></div>
        </Fragment>
      )}

      <h2 className='text-primary'>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-check'></i> {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

PorfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default PorfileAbout

import React, { useEffect } from 'react'
import EditProfile from './EditProfile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getCurrentProfile } from '../../actions'

const EditInitialValues = ({
  profile: { profile, loading },
  getCurrentProfile
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile, loading])

  const newProfileObj = {
    bio: loading || !profile.bio ? null : profile.bio,
    company: loading || !profile.company ? null : profile.company,
    status: loading || !profile.status ? null : profile.status,
    website: loading || !profile.website ? null : profile.website,
    skills: loading || !profile.skills ? null : profile.skills.join(','),
    location: loading || !profile.location ? null : profile.location,
    githubusername:
      loading || !profile.githubusername ? null : profile.githubusername,
    // Only way to make pick select Social since it is a nested object inside profile
    twitter: loading || !profile.social ? null : profile.social.twitter,
    facebook: loading || !profile.social ? null : profile.social.facebook,
    linkedin: loading || !profile.social ? null : profile.social.linkedin,
    youtube: loading || !profile.social ? null : profile.social.youtube,
    instagram: loading || !profile.social ? null : profile.social.instagram
  }

  return (
    <React.Fragment>
      <EditProfile
        initialValues={_.pick(
          newProfileObj,
          'bio',
          'company',
          'status',
          'website',
          'skills',
          'location',
          'githubusername',
          'twitter',
          'facebook',
          'linkedin',
          'youtube',
          'instagram'
        )}
      />
    </React.Fragment>
  )
}

EditInitialValues.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, { getCurrentProfile })(
  EditInitialValues
)

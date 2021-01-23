import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions'

const Profile = ({
  getProfileById,
  profile: { profile, loading, auth },
  match
}) => {
  console.log(match.params.id)
  useEffect(() => {
    getProfileById(match.params.id)
  }, [getProfileById])

  return (
    <Fragment>
      <div>Profile</div>
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { getProfileById })(Profile)

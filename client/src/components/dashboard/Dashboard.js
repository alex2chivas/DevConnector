import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'
import { getCurrentProfile } from '../../actions'
import Spinner from '../layout/Spinner'
import { deleteAccount } from '../../actions'

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile, loading])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'> Welcome {user && user.name}</i>
      </p>
      {profile !== null ? (
        <React.Fragment>
          <DashboardActions />
          {<Experience experience={profile.experience} />}
          {<Education education={profile.education} />}

          <div className='my-2'>
            <button className=' btn btn-danger'>
              <i className='fas fa-user-minus' onClick={() => deleteAccount()}>
                {' '}
                Delete my account
              </i>
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return { auth: state.auth, profile: state.profile }
}

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
)

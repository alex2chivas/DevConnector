import React from 'react'
import { Link } from 'react-router-dom'
import { objLinks } from './dashboardLinks'
import * as uuid from 'uuid'

const dashLinks = () => {
  return objLinks.map(({ to, clas, text }) => {
    return (
      <Link key={`${uuid.v5} ${text}`} to={to} className='btn btn-light'>
        <i className={`fas ${clas} text-primary`}></i> {text}
      </Link>
    )
  })
}

const DashboardActions = () => {
  return <React.Fragment>{dashLinks()}</React.Fragment>
}

export default DashboardActions

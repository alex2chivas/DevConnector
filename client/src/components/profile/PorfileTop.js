import React from 'react'
import PropTypes from 'prop-types'

const urlToRender = link => {
  if (!link.match(/^[a-zA-Z]+:\/\//)) {
    return '//' + link
  }
  return link
}

const PorfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social: { facebook, twitter, linkedin, youtube, instagram },
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='Gravator' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        {status} {company && <span>{`@ ${company}`}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {website && (
          <a
            href={urlToRender(website)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}
        {twitter && (
          <a
            href={urlToRender(twitter)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {facebook && (
          <a
            href={urlToRender(facebook)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {linkedin && (
          <a
            href={urlToRender(linkedin)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}
        {youtube && (
          <a
            href={urlToRender(youtube)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}
        {instagram && (
          <a
            href={urlToRender(instagram)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  )
}

PorfileTop.propTypes = {
  profile: PropTypes.object.isRequired
}

export default PorfileTop

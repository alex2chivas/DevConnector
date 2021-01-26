import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'

export default combineReducers({
  form: reduxForm,
  alert,
  auth,
  profile,
  post
})

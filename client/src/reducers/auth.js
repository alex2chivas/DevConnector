import {
  RIGISTER_SUCCESS,
  RIGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from '../actions/types'

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case LOGIN_SUCCESS:
    case RIGISTER_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        // ...payload,
        isAuthenticated: true,
        loading: false
      }

    case LOGOUT:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case RIGISTER_FAIL:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}

import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKE,
  DELETE_POST,
  ADD_POST,
  GET_POST
} from '../actions/types'

const INITIAL_STATE = {
  posts: [],
  post: null,
  loading: true,
  error: []
}

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false }
    case GET_POST:
      return { ...state, post: payload, loading: false }
    case ADD_POST:
      return { ...state, posts: [payload, ...state.posts], loading: false }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case UPDATE_LIKE:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      }
    default:
      return state
  }
}

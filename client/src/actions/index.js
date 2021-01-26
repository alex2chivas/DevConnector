// Alert actions
import { setAlert } from './alert'
import { register, loadUser, login, logout } from './auth'
import {
  getCurrentProfile,
  createProfile,
  addExperience,
  addEducation,
  deleteExperience,
  deleteEducation,
  deleteAccount,
  getProfiles,
  getProfileById,
  getGithubRepos
} from './profile'
import { getPosts } from './post'

export {
  // Alert
  setAlert,
  // Auth
  register,
  loadUser,
  login,
  logout,
  //Profile
  getCurrentProfile,
  createProfile,
  addExperience,
  addEducation,
  getProfiles,
  getProfileById,
  getGithubRepos,
  //Delete Profile
  deleteExperience,
  deleteEducation,
  deleteAccount,
  // Posts
  getPosts
}

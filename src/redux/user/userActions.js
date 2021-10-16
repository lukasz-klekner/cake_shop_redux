import axios from 'axios'

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes'

const BASE_URL = `https://jsonplaceholder.typicode.com/users`

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
})

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
})

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest)
  axios
    .get(BASE_URL)
    .then((response) => {
      const users = response.data
      dispatch(fetchUsersSuccess(users))
    })
    .catch((error) => {
      const errorMessage = error.message
      dispatch(fetchUsersFailure(errorMessage))
    })
}

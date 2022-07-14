import { FETCH_USERS_REQUESTS } from "./userActionType"
import { FETCH_USERS_SUCCESS } from "./userActionType"
import { FETCH_USERS_FAILED } from "./userActionType"
import axios from 'axios'

const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUESTS
	}
}

const fetchUsersSuccessRequest = users => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users
	}
}

const fetchUsersFailedRequest = error => {
	return {
		type: FETCH_USERS_FAILED,
		payload: error
	}
}

export const fetchUsers = () => {
	return(dispatch) => {
		dispatch(fetchUsersRequest)
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			dispatch(fetchUsersSuccessRequest(response.data))
		})
		.catch(error => {
			dispatch(fetchUsersFailedRequest(error.message))
		})
	}
}

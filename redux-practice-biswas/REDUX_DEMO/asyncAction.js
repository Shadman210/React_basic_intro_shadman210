const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
	loading: false,
	users: [],
	error: ''
}

const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUserRequest = () => {
	return {
		type: FETCH_USERS_REQUESTS
	}
}

const fetchUserSuccess = users => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users
	}
}

const fetchUserFaliled = error => {
	return {
		type: FETCH_USERS_FAILED,
		payload: error
	}
}

const fetchUsers = () => {
	return function(dispatch) {
		dispatch(fetchUserRequest())
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response =>{
			const users = response.data.map(user => user.id)
			dispatch(fetchUserSuccess(users))
		})
		.catch(error => {
			dispatch(fetchUserFaliled(error.message))
		})
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTS :
			return {
				...state,
				loading: true
			}
		case FETCH_USERS_SUCCESS :
			return {
				loading: false,
				user: action.payload,
				error: ''
			}
		case FETCH_USERS_FAILED :
			return {
				loading: false,
				user: [],
				error: action.payload
			}
	}
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
import { FETCH_USERS_REQUESTS } from "./userActionType"
import { FETCH_USERS_SUCCESS } from "./userActionType"
import { FETCH_USERS_FAILED } from "./userActionType"


const initialState = {
	loading: false,
	users: [],
	error: ''
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTS:
			return {
				...state,
				loading: true,
			}
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload
			}
		case FETCH_USERS_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state
	}

}


export default reducer
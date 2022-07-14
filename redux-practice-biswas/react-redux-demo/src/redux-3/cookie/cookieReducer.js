

const initialState = {
	numberOfCookie: 20
}

const cookieReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'BUY_COOKIE':
			return {
				numberOfCookie: state.numberOfCookie-1
			}
			
		default: return state
	}
}

export default cookieReducer
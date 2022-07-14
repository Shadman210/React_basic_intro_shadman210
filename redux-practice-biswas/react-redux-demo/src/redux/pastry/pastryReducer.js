
const initialState = {
	numberOfPastry: 100
}

const pastryReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'BUY_PASTRY':
			return {
				numberOfPastry: state.numberOfPastry - 1
			}
		default:
			return state
	}
}

export default pastryReducer
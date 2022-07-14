import { BUY_ICE_CREAM } from "./actionType"

const initialState = {
	numberOfIceCream: 12
}

const iceCreamReducer = (state=initialState, action) => {
	switch (action.type) {
		case BUY_ICE_CREAM:
			return {
				// ...state,
				numberOfIceCream: state.numberOfIceCream-1
			}
		default: return state
	}
}

export default iceCreamReducer
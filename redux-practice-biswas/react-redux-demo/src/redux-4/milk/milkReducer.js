const initialState = {
	numberOfMilk: 2
}

export const milkReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'BUY_MILK': 
			return {
				numberOfMilk: state.numberOfMilk-1
			}
		default: return state
	}
}


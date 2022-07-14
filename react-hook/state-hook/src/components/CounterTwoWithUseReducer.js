import React, {useReducer} from 'react'

const initialState = {
	firstCounter: 0, 
	secondCounter: 10
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'incriment':
			return { ...state, firstCounter: state.firstCounter + action.value}
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value}
		case 'incriment2':
			return { ...state, secondCounter: state.secondCounter + action.value}
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value}
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterTwoWithUseReducer() {
	const [counterState, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			<h1>{counterState.firstCounter}</h1>
			<h1>{counterState.secondCounter}</h1>
			<div>
				<button onClick={() => dispatch({type: 'incriment', value: 1})}>Incriment</button>
				<button onClick={() => dispatch({type: 'decrement' , value: 1})}>decriment</button>
				<button onClick={() => dispatch({type: 'incriment', value: 5})}>Incriment 5 </button>
				<button onClick={() => dispatch({type: 'decrement' , value: 5})}>decriment 5 </button>
			</div>
			<div>
				<button onClick={() => dispatch({type: 'incriment2', value: 1})}>Incriment</button>
				<button onClick={() => dispatch({type: 'decrement2' , value: 1})}>decriment</button>
			</div>
			<button onClick={() => dispatch({type: 'reset'})}>Reset</button>
		</div>
	)
}

export default CounterTwoWithUseReducer

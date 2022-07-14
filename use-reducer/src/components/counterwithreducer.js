import React, {useReducer} from 'react'

const initialState = {
	firstCounter: 0,
	secondCounter: 10
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {...state, firstCounter: state.firstCounter + action.value}
		case 'decrement':
			return {...state, firstCounter: state.firstCounter - action.value}
			case 'increment2':
				return {...state, secondCounter: state.secondCounter + action.value}
			case 'decrement2':
				return {...state, secondCounter: state.secondCounter - action.value}
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterWithReducer() {
	const [countState, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<h1> {countState.firstCounter} </h1>
			<button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
			<button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
			<h1> {countState.secondCounter} </h1>
			<button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment2</button>
			<button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement2</button>
			<br/>
			<button onClick={() => dispatch({type: 'reset'})}>Reset</button>
		</>
	)
}

export default CounterWithReducer
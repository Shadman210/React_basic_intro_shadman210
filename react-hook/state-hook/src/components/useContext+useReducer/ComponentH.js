import React, { useReducer } from 'react'

const initialState = {
	countOne: 0
}

const reducer = (state, action) => {
	const {type, value} = action
	switch (type) {
		case 'increment':
			return {countOne: state.countOne+value}
		case 'decrement':
			return {countOne: state.countOne-value}
		case 'reset':
			return initialState
		default:
			return state
	}
}

function ComponentH() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			<h1>{count.countOne}</h1>
			<button onClick={()=> dispatch({type: 'increment', value: 5 })}> Increment </button>
			<button onClick={()=> dispatch({type: 'decrement', value: 5 })}> Decrement </button>
			<button onClick={()=> dispatch({type: 'reset', value: 5 })}> Reset </button>
		</div>
	)
}

export default ComponentH
import React, { useReducer } from 'react'

const initialState = {
	count1: 0
}

const reducer = (currentState, action) => {
	switch (action){
		case('increment'):
			return { ...currentState, count1: currentState.count1 + 1 }
		case('decrement'):
			return { ...currentState, count1: currentState.count1 - 1 }
		case('reset'):
			return initialState
		default:
			return currentState
	}
	
}

function UseReducerPractice() {
	const [countState, dispatch] = useReducer(reducer, initialState)
  return (
	  <div>
		<div>{countState.count1}</div>
		<button onClick={()=> dispatch('increment')}> +1 </button>
		<button onClick={()=> dispatch('decrement')}> -1 </button>
		<button onClick={()=> dispatch('reset')}> Reset </button>
	  </div>
  )
}

export default UseReducerPractice
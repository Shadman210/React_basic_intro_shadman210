import React, { useState } from 'react'

function HookCounterTwo() {
	const initialState = 0
	const [count, setCount] = useState(initialState)
	return (
		<div>
			{count}
			<button onClick={() => setCount(initialState)}>Reset</button>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
			<button onClick={() => setCount(prev => prev -1)}>decrement</button>
		</div>
	)
}

export default HookCounterTwo

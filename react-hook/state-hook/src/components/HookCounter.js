import React, { useState } from 'react'

// function HookCounter() {
// 	const [count, setCount] = useState(0)
// 	return (
// 		<div>{ useState } 
// 			<button onClick={() => setCount(count+1)}>Button {count}</button>
// 		</div>
// 	)
// }

const HookCounter = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<button onClick={()=> setCount(count+1)}>Button {count }</button>
		</div>
	);
}
export default HookCounter

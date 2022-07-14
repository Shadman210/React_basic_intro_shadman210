import React, { useEffect, useState } from 'react'

function HookCounterUseEffectOne() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')

	useEffect(()=> {
		console.log("updated")
		document.title = `button clicked  ${count} times`
	}, [count])
	return (
		<div>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={()=> setCount(count +1)}>
				clicked button {count} times
			</button>
		</div>
	)
}

export default HookCounterUseEffectOne

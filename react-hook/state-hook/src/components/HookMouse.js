import React, { useEffect, useState } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	const [display, setDisplay] = useState(true)

	const logMousePosition = (e) => {
		console.log('mouse event')
		setX(e.clientX)
		setY(e.clientY)

	}
	useEffect(() => {
		console.log('useEffect called')
		window.addEventListener('mousemove', logMousePosition)

		return () => {
			console.log('component unmounting code')
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && `x-axis: ${x} ||| y-axis: ${y}`}
		</div>
	)
}

export default HookMouse

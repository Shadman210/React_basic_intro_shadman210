import React, { useState } from 'react'

function HookCounterThree() {
	const [name, setName] = useState({firstName: '', lastName: ''})

	return (
		<form>
			<input
				placeholder="firstName"
				onChange={e => setName({...name, firstName: e.target.value})}
				value={name.firstName}
			/>
			<input
				placeholder="firstName"
				onChange={e => setName({...name, lastName: e.target.value})}
				value={name.lastName}
			/>
			<h1>firstName: {name.firstName}</h1>
			<h1>lastName: {name.lastName}</h1>
		</form>
	)
}

export default HookCounterThree

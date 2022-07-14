import React, { useContext } from 'react'
import { UserContext } from '../../App'

function ComponentA() {
	const user = useContext(UserContext)
	console.log(user)

	return (
		<h1>
			{user.value}
		</h1>
	)
}

export default ComponentA
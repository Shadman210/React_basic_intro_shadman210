import React, {useContext} from 'react'
import { CountContext } from '../../App'

function ComponentF() {
	const countContext = useContext(CountContext)

	return (
		<div>
			ComponentF - {countContext.countState.count}
			<button onClick={()=> {countContext.countDisPatch({type: 'increment'})}}>Increment</button>
			<button onClick={()=> {countContext.countDisPatch({type: 'decrement'})}}>Decrement</button>
			<button onClick={()=> {countContext.countDisPatch({type: 'reset'})}}>Reset</button>
		</div>
	)
}

export default ComponentF

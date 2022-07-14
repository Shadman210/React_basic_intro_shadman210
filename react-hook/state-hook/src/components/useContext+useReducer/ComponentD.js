import React, {useContext} from 'react'
import { CountContext } from '../../App'


function ComponentD() {
	const countContext = useContext(CountContext)
	return (
		<div>
				Component D  - {countContext.countState.count}
				<button onClick={()=> {countContext.countDisPatch({ type:"increment"})}}>Incriment</button>
				<button onClick={()=> {countContext.countDisPatch({ type:"decrement"})}}>Decriment</button>
				<button onClick={()=> {countContext.countDisPatch({ type:"reset"})}}>Reset</button>
		</div>
	)
}

export default ComponentD

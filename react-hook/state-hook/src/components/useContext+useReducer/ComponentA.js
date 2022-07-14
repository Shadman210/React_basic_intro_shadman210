import React, {useContext} from 'react'
import { CountContext } from '../../App'

function ComponentA() {
	const countContext = useContext(CountContext)
	return (
		<div>
			<div>
				ComponentA  - {countContext.countState.count}
				<button onClick={()=> {countContext.countDisPatch({ type:"increment"})}}>Incriment</button>
				<button onClick={()=> {countContext.countDisPatch({ type:"decrement"})}}>Decriment</button>
				<button onClick={()=> {countContext.countDisPatch({ type:"reset"})}}>Reset</button>
			</div>
		</div>
	)
}

export default ComponentA
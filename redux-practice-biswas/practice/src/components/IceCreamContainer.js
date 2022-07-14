import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function IceCreamContainer() {
	const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
	const dispatch = useDispatch()

  return (
	<div>
		<h2>Hook-num of iceCream = {numberOfIceCream}</h2>
		<button onClick={()=> dispatch(buyIceCream())}> Buy iceCream Hook</button>
		
	</div>
  )
}

export default IceCreamContainer
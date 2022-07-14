import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HookCakeContainer() {
	const numberOfCake = useSelector(state => state.cake.numberOfCake)
	const dispatch = useDispatch()

  return (
	<div>
		<h2>Hook-num of cake = {numberOfCake}</h2>
		<button onClick={()=> dispatch(buyCake())}> Buy cake Hook</button>
	</div>
  )
}

export default HookCakeContainer
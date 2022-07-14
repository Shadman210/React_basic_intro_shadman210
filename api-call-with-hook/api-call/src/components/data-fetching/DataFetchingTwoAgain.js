import React, {useEffect, useReducer, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../../App'

const reducer = (currentState, action) => {
	switch (action.type) {
		case('success'):
			return {
				post: action.payload,
				error: '',
				isLoading: false
			}
		case('failed'):
			return {
				post: {},
				error: 'Something went wrong!',
				isLoading: false
			}
		default:
			return currentState
	}
}

function DataFetchingTwoAgain() {
	const initialState = useContext(UserContext)
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then(res =>{
			dispatch({type: 'success', payload: res.data})
		})
		.catch(err => {
			dispatch({type: 'failed'})
		})
	}, [])

	return (
		<div>
			{state.loading ? 'loading' : state.post.title}
			{state.error ? state.error: ''}
		</div>
	)
}

export default DataFetchingTwoAgain
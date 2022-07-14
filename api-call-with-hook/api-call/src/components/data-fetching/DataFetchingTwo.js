import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
	post: {},
	errors: '',
	isLoading: true
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'success':
			return {
				loading: false,
				errors: '',
				post: action.payload
			}
		case 'failed':
			return {
				loading: false,
				errors: 'Something went wrong',
				post: {}
			}
		default:
			return state
	}
}

function DataFetchingTwo() {
	const [state , dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then(res => {
			dispatch({type: 'success', payload: res.data})
		})
		.catch(err => {
			dispatch({type: 'failed'})
		})
	}, [])

	return (
		<div>
			{ state.isLoading ? 'loading' : state.post.title }
			{ state.errors ? state.errors : ''}
		</div>
	)
}

export default DataFetchingTwo
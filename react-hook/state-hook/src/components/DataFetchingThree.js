import axios from 'axios'
import React, {useEffect, useReducer} from 'react'

const initialState = {
	loading: true,
	post: {},
	error: null
}

const reducer = (state, action) => {
	switch (action.type){
		case 'fetchPostSuccess':
			return {
				loading: false,
				error: '',
				post: action.payload
			}
		case 'fetchPostError':
			return {
				loading: false,
				error: 'something wrong!',
				post: {}
			}
		default:
			return state
	}
}

function DataFetchingThree() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(()=> {
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then(response => {
			dispatch({type: 'fetchPostSuccess', payload: response.data})
		})
		.catch(error => {
			dispatch({type: 'fetchPostError'})
		})
	},)

	return (
		<div>
			{state.loading ? 'loading': state.post.title}
			{state.error? state.error: ''}
		</div>
	)
}

export default DataFetchingThree

import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
	isLoading: true,
	post: {},
	error: null
}

const reducer = (state, action)=> {
	switch (action.type) {
		case 'Success':
			return {
				isLoading: false,
				post: action.payload,
				error: null
			}
		case 'Failed':
			return {
				isLoading: false,
				post: {},
				error: 'ki korsot koo joldi'
			}
		default:
			return state
	}
}
function DataFetching() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => {
				dispatch({type: 'Success', payload: response.data})
			})
			.catch(error => dispatch({type: 'Failed'}) )
	}, [])
	return (
		<>
		{state.loading ? 'loading...' : state.post.title}
		{state.error? state.error: null}
		</>
		
	)
}

export default DataFetching
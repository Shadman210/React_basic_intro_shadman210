import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetchingTwo() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [post, setPost] = useState({})

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then((res) => {
			setLoading(false)
			setPost(res.data)
			setError('')
		})
		.catch(() => {
			setLoading(false)
			setPost('')
			setError('Somthing went wrong!')
		})
	},[])
	return (
		<div>
			{loading ? 'loading': post.title}
			{error? error: ''}
		</div>
	)
}

export default DataFetchingTwo

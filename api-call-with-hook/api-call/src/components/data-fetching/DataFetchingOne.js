import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
	const [ loading, setIsLoading ] = useState(true)
	const [ error, setError ] = useState('')
	const [ post, setPost ] = useState({})

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then(res => {
			setIsLoading(false)
			setPost(res.data)
			setError('')
		})
		.catch(error => {
			setIsLoading(false)
			setPost({})
			setError('Something went wrong!')
		})
	}, [])
  return (
	<div>
		{loading ? 'Loading' : post.title}
		{error}
	</div>
  )
}

export default DataFetchingOne
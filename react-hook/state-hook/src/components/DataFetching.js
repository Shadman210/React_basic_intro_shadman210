import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
		.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
		.then(res => {
			setPost(res.data)
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	},[idFromButtonClick])

	return (
		<div>
			<input type='text' value={id} onChange={e=> setId(e.target.value)}/>
			<button onClick={e => setIdFromButtonClick(id)}>Get Post</button>
			<li key = {post.id} >{post.title}</li>
		</div>
	)
}

export default DataFetching

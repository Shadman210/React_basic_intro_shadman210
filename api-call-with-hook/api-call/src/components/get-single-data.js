import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GetSingleData() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	
	useEffect(() => {
		axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((res) => {
			setPost(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
	}, [id])

	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
			{post.title}
		</div>
	)
}

export default GetSingleData
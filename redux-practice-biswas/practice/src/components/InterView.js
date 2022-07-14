import React from 'react'
import axios from 'axios'

const {useState, useEffect} = React

function InterView() {
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState([])

	const fetchDataFromRandomApi = () => {
		return axios.get('https://randomuser.me/api')
		.then(res => {
			console.log(res.data.results[0].gender)
			setUsers(res.data.results)
		})
		.catch(err => {
			setUsers('no user')
			console.log(err.message)
		})
	}

	// useEffect(() => {
	// 	fetchDataFromRandomApi()
	// 	.then(res => setUsers(res))
	// }, [])
	
	
	return (
		<div>
			<p>{counter}</p>
			<button onClick={()=> setCounter(counter+1)}> increment count </button>
			<button onClick={fetchDataFromRandomApi}> Fetch Data</button>
			{users && users.length && users.map((user, i) =>  <p key={i}> {user.gender}</p>)}
		</div>
	)
}

export default InterView
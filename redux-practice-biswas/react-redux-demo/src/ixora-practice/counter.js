import React, { useState } from 'react'

const ToDo = list => {
	return(
		<tr>
			<td><label>{list.index}</label> </td>
			<td><label>{list.id}</label> </td>
			<input />
			<td><label>{list.createdAt.toLocaleTimeString()}</label> </td>
			<button onClick={()=> list.onDelete(list.id)}>Delete</button>
		</tr>
	)
}

function Counter() {
	const [listNumber, setListNumber] = useState(1)
	const [lists, setLists] = useState([{
		id: listNumber,
		createdAt: new Date()
	}])

	const addListAtEnd = () => {
		const newId = listNumber + 1
		setListNumber(listNumber + 1)
		setLists([
			...lists,
			{
				id: newId,
				createdAt: new Date()	
			}
		])
	}

	const addListAtFirst = () => {
		const newId = listNumber + 1
		setListNumber(listNumber + 1)
		setLists([
			{id: newId, createdAt: new Date()},
			...lists
		])
	}

	const onDelete = (id) => {
		console.log('id = ',  id)
		const updatedLists = lists.filter(list => list.id !== id)
		console.log('updatedLists = ',  updatedLists)
		setLists(updatedLists)
	}

	return (
		<div>
			<button onClick={addListAtFirst}> add New list at Top </button>
			<button onClick={addListAtEnd}> add New list at end </button>
			<table>
				<tr>
					<th>index</th>
					<th>id</th>
					<th>item</th>
					<th>time</th>
				</tr>
				{lists.length && lists.map((list, index) => <ToDo key={list.id} index={index} onDelete={onDelete} {...list}/>)}
			</table>
		</div>
	)
}

export default Counter
import React, {useState} from 'react'

const Todo = list => {
	console.log('blabla')
	return(
		<tr>
			<td> {list.index} </td>
			<td> {list.id} </td>
			<input />
			<td> {list.time} </td>
		</tr>
	)
}

function Counter() {
	const [numberOfList, setNumberOfList] = useState(1)
	const [lists, setLists] = useState([{
		id: numberOfList,
		date: new Date()
	}])
	
	const addRowHandler = (e) => {
		const newId = numberOfList + 1
		setLists([
			...lists,
			{
				id : newId,
				date: new Date()
			}
		])
		setNumberOfList(newId)
	}

	const onDelete = () => {

	}
  return (
	<div>
		<button onClick={addRowHandler}> add row </button>
		<table>
			<tr>
				<th>index</th>
				<th>id</th>
				<th>item</th>
				<th>time</th>
			</tr>
			{lists.length && lists.map((list, index) => <Todo key={list.id} index={index} onDelete={onDelete} {...list} />)}
		</table>
		
	</div>
  )
}

export default Counter
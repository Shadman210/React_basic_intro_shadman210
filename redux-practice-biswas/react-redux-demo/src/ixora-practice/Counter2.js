import React, {useState} from 'react'

const ToDo = list => {
	return(
		<tr>
		<td>{list.index}</td>
		<td>{list.id}</td>
		<input />
		<td>{list.createdAt.toLocaleTimeString()}</td>
		<button onClick={list.onDeleteHandler}> Delete Task </button>
	</tr>
	)
}

function Counter2() {
	const [listNumber, setListNumber] = useState(1)
	const [lists, setLists] = useState([{
		id: listNumber,
		createdAt: new Date()
	}])

	const addNewList = () => {
		setListNumber(listNumber + 1) 
		setLists([
			...lists,{
				id: listNumber + 1,
				createdAt: new Date()
			}
		])
	}
	const addNewListAtFirst = () => {
		setListNumber(listNumber + 1) 
		setLists([
			{
				id: listNumber + 1,
				createdAt: new Date()
			},
			...lists
		])
	}

	const onDeleteHandler = () => {

	}

  return (
	<div>
		<button onClick={addNewList}>Add New List</button>
		<button onClick={addNewListAtFirst}>Add New List At First</button>
		<table>
			<tr>
				<th>Index</th>
				<th>ID</th>
				<th>Item</th>
				<th>Time</th>
			</tr>
			{lists.map((list, i) => <ToDo key={list.id} index={i} {...list} />)}
		</table>
	</div>
  )
}

export default Counter2
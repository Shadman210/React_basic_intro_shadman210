import React, {useState} from 'react'
import './SelectComponent.css'

function SelectComponent() {
	const [select, setSelect] = useState()

	const cars = [
		{ id: 1, model: "CRV", company: "Honda" },
		{ id: 2, model: "Accord", company: "Honda" },
		{ id: 3, model: "800", company: "Maruti" },
		{ id: 4, model: "Civic", company: "Honda" },
		{ id: 5, model: "Model S", company: "Tesla" }
		]
console.log('select = ', select)
  return (
	<div>
		<input 
			type="text"
			list="cars"
			className='bla'
			onChange={e => setSelect(e.target.value)}
		/>
		<datalist id="cars">
			{cars.map(car => {
				return <option value={car.model}>{car.company}</option>
			})}
		</datalist>
	</div>
  )
}

export default SelectComponent
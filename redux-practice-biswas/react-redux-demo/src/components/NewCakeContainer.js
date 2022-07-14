import React, {useState} from 'react'
import { buyCake } from '../redux';
import { connect } from "react-redux";

function NewCakeContainer(props) {
	const [number, setNumber] = useState(1);

  return (
	<div>
		<h2>Number of cake {props.numberOfCake}</h2>
		<input type='text' value={number} onChange={e =>setNumber(e.target.value)}/>
		<button onClick={()=>props.buyCake(number)}> {number} Buy Cake</button>
	</div>
  )
}

const mapStateToProps = (state) => {
	return {
		numberOfCake: state.cake.numberOfCake
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: number => dispatch(buyCake(number))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'


function CakeContainer(props) {
  return (
	<div>
		<h2>Number of Cake {props.numberOfCake}</h2>
		<button onClick={props.dispatch}>Buy Cake</button>
	</div>
  )
}

const mapStateToProps = state => {
	return {
		numberOfCake :state.cake.numberOfCake
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: ()=> dispatch(buyCake())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux-2';

function IceCreamContainer(props) {
  return (
	<div>
		<h2>Buy Ice Cream {props.numberOfIceCream}</h2>
		<button onClick={props.buyIceCream}>buy IceCream</button>
	</div>
  )
}

const mapStateToProps = (state) => {
	return {
		numberOfIceCream: state.numberOfIceCream
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: ()=> dispatch(buyIceCream())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
import React from 'react'
import { connect } from 'react-redux'
import { buyMilk } from '../redux-4'

function MilkContainer(props) {
  return (
	<div>
		<h2>number of milk packs { props.numberOfMilk}</h2>
		<button onClick={props.buyMilk}>Buy Milk</button>
	</div>
  )
}

const mapStateToProps = state => {
	return {
		numberOfMilk: state.numberOfMilk
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyMilk: () => dispatch(buyMilk())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MilkContainer)
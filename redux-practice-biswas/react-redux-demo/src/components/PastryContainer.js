import React from 'react'
import { connect } from 'react-redux'
import { buyPastry } from '../redux'

function PastryContainer(props) {
	return (
		<div>
			<h2>Num of Pastry { props.numberOfPastry}</h2>
			<button onClick={props.buyPastry}> Buy Pastry</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		numberOfPastry: state.pastry.numberOfPastry
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyPastry: ()=> {dispatch(buyPastry())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PastryContainer)
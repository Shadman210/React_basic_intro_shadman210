import React from 'react'
import { connect } from 'react-redux'
import { buyCookie } from '../redux-3'

function CookieContainer(props) {
	console.log(props)
	return (
		<div>
			<h2>NUmber of Cookie{props.numberOfCookie}</h2>
			<button onClick={props.buyCookie}>Buy Cookie</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		numberOfCookie: state.numberOfCookie
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCookie: () => dispatch(buyCookie())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer)
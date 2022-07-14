const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

const buyCake = () => {
	return {
		type: BUY_CAKE,
		info: 'First Redux Action'
	}
}

const buyIceCream = () => {
	return {
		type: BUY_ICE_CREAM,
		info: 'First Redux Action'
	}
}

// const initialState = {
// 	numberOfCake: 15,
// 	numberOfIceCream: 20
// }

const initialCakeState = {
	numberOfCake: 15
}

const initialIceCreamState = {
	numberOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ('BUY_CAKE'):
// 			return {
// 				...state,
// 				numberOfCake: state.numberOfCake - 1
// 			}
// 		case ('BUY_ICE_CREAM'):
// 			return {
// 				...state,
// 				numberOfIceCream: state.numberOfIceCream - 1
// 			}
// 		default: return state
			
// 	}
// }

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case ('BUY_CAKE'):
			return {
				...state,
				numberOfCake: state.numberOfCake - 1
			}
		default: return state
			
	}
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case ('BUY_ICE_CREAM'):
			return {
				...state,
				numberOfIceCream: state.numberOfIceCream - 1
			}
		default: return state
			
	}
}

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe()

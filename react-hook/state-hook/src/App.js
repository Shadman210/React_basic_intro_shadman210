import React, {useReducer} from 'react';
import './App.css';
import DataFetchingThree from './components/DataFetchingThree';
import DataFetchingTwo from './components/DataFetchingTwo';
// import CounterTwoWithUseReducer from './components/CounterTwoWithUseReducer';
// import CounterWithUseReducer from './components/CounterWithUseReducer'
import ComponentA from './components/useContext+useReducer/ComponentA';
import ComponentB from './components/useContext+useReducer/ComponentB';
import ComponentC from './components/useContext+useReducer/ComponentC';
// import componentG from './components/useContext+useReducer/componentG';
import ComponentH from './components/useContext+useReducer/ComponentH';
import SelectComponent from './components/useContext+useReducer/SelectComponent';

// import DataFetching from './components/DataFetching';
// import HookCounter from './components/HookCounter';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterUseEffectOne from './components/HookCounterUseEffectOne';
// import HookMouse from './components/HookMouse';
// import IntervalHook from './components/IntervalHook';

export const CountContext = React.createContext()

const initialState = {
	count: 0
}

const reducer = (state, action)=> {
	switch (action.type){
		case 'increment':
			return {...state, count: state.count + 1}
		case 'decrement':
			return {...state, count: state.count -1 }
		case 'reset':
			return initialState
		default: 
			return state
	}

}
function App2() {
	const [countState, dispatch] = useReducer(reducer, initialState)
  return (
		<CountContext.Provider 
			value={{countState: countState, countDisPatch: dispatch}}
		>
			<div className="App">
				<h1>{countState.count}</h1>
				<ComponentA />
				<ComponentB />
				<ComponentC />
    	</div>
		</CountContext.Provider>
    
  );
}

function App() {
	return(
		<div>
			<DataFetchingThree />
		</div>
	)
}

function App18() {
	return(
		<div>
			<SelectComponent />
		</div>
	)
}

export default App18;

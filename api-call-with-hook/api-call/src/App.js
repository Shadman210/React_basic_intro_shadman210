import logo from './logo.svg';
import './App.css';
import GetAllData from './components/get-all-data';
import GetSingleData from './components/get-single-data';
import React, { useContext } from 'react'
import ComponentA from './components/use-context/component-a';
import PracticeUseReducer from './components/use-reducer/use-reducer';
import DataFetchingOne from './components/data-fetching/DataFetchingOne';
import DataFetchingTwo from './components/data-fetching/DataFetchingTwo';
import DataFetchingTwoAgain from './components/data-fetching/DataFetchingTwoAgain';

export const UserContext = React.createContext()

const initialState = {
	post: {},
	error: '',
	isLoading: true
}

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={initialState}>
				<DataFetchingTwoAgain />
			</UserContext.Provider>
		</div>
	);
}

export default App;

{/* <DataFetchingTwo /> */}
		{/* <DataFetchingOne /> */}
		{/* <PracticeUseReducer /> */}
		{/* <UserContext.Provider value={'Sadman'}>
			<ComponentA />
		</UserContext.Provider> */}
      {/* <GetAllData /> */}
	  {/* <GetSingleData /> */}
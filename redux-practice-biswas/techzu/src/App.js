import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import Counter from './components/counter';
import { store } from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CakeContainer />
			</div>
		</Provider>
	  );
}

export default App;

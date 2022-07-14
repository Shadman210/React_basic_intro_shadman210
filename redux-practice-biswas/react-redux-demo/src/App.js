import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import store2 from './redux-2/store2';
import CookieContainer from './components/CookieContainer';
import store3 from './redux-3/store3';
import  store4 from './redux-4/store4';
import MilkContainer from './components/MilkContainer';
import HookCakeContainer from './components/HookCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
import CakeContainer from './components/Cakecontainer';
import PastryContainer from './components/PastryContainer';
import NewCakeContainer from './components/NewCakeContainer';
import Counter from './ixora-practice/counter';
import Counter2 from './ixora-practice/Counter2';
import UserContainer from './components/UserContainer';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <HookCakeContainer />
				<CakeContainer />
				<PastryContainer />
				<NewCakeContainer /> */}
				{/* <Counter /> */}
				{/* <Counter2 /> */}
				<UserContainer />
			</div>
		</Provider>
	);
}

export default App;

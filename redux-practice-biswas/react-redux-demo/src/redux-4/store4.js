import { createStore } from "redux";
import { milkReducer } from './milk/milkReducer'

const store4 = createStore(milkReducer)
export default store4

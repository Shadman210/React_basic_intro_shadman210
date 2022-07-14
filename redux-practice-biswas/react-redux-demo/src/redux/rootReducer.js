import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import pastryReducer from "./pastry/pastryReducer";
import reducer from "./user/userReducer";

const rootReducer = combineReducers({
	cake: cakeReducer,
	pastry: pastryReducer,
	user: reducer
})

export default rootReducer
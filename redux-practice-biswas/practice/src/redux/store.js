import { createStore } from "redux"
// import cakeReducer from "./cake/cakeActionReducer"
import rootReducer from "./rootReducer"

export const store = createStore(rootReducer)
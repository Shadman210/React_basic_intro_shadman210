import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";

export const store = createStore(cakeReducer)

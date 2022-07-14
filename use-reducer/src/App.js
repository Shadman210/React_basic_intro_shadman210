import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import CounterWithReducer from './components/counterwithreducer';
import DataFetching from './components/DataFetching';
import UseReducerPractice from './components/UseReducerPractice';

function App() {
  return (
    <div className="App">
      {/* <DataFetching /> */}
	  <UseReducerPractice />
    </div>
  );
}

export default App;

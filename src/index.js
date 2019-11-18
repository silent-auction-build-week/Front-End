import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { reducer, initialState } from "./reducer";
import { Provider } from "react-redux";

import './index.css';

const store = createStore(reducer, initialState);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

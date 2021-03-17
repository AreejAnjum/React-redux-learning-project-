import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import reducer from '../src/store/reducers/reducer'
import burgerBuilderReducer from './store/burgerBuilderReducer'


//from github repo
//now redux dev tools will be in just development mode
const composeEnhancers = process.env.NODE_ENV=== 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;


//best place to make store is the root file, then pass middleware and reducer in store
const store= createStore(burgerBuilderReducer, applyMiddleware(thunk));

const app= <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';




const initialState = {
  stage: 'company',
  email: '',
  name: '',
  surname: '',
  gender: '',
  company: '',
}

function playlist(state = initialState, action) {
    console.log(action)
    switch(action.type) {
      case 'CHANGE_STAGE':
        return {
          ...state,
          stage: action.payload
        } 
      case 'ADD_EMAIL':
        return {
          ...state,
          email: action.payload
        } 
      case 'ADD_NAME':
        return {
          ...state,
          name: action.payload
        } 
      case 'ADD_NAME':
        return {
          ...state,
          name: action.payload
        } 
      case 'ADD_SURNAME':
        return {
          ...state,
          surname: action.payload
        } 
      case 'ADD_GENDER':
        return {
          ...state,
          gender: action.payload
        } 
      case 'ADD_COMPANY':
        return {
          ...state,
          company: action.payload
        } 
      default: 
        return state
    }
  }

  
const store = createStore(playlist);
store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App store={store.getState()}/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

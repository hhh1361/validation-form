import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
  information: {
    input: { email: '', name: '', surname: '', company: '' },
    select: { gender: '', timezone: '' },
  },
  stage: 'email',
  email: '',
  name: '',
  surname: '',
  gender: '',
  company: '',
  timezone: '',
}

function information(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_STAGE':
      return {
        ...state,
        stage: action.payload,
      }
    case 'ADD_EMAIL':
      return {
        ...state,
        information: {
          ...state.information,
          input: { ...state.information.input, email: action.payload },
        },
      }
    case 'ADD_NAME':
      return {
        ...state,
        information: {
          ...state.information,
          input: { ...state.information.input, name: action.payload },
        },
      }
    case 'ADD_SURNAME':
      return {
        ...state,
        information: {
          ...state.information,
          input: { ...state.information.input, surname: action.payload },
        },
      }
    case 'ADD_GENDER':
      return {
        ...state,
        information: {
          ...state.information,
          select: { ...state.information.select, gender: action.payload },
        },
      }
    case 'ADD_COMPANY':
      return {
        ...state,
        information: {
          ...state.information,
          input: { ...state.information.input, company: action.payload },
        },
      }
    case 'ADD_TIMEZONE':
      return {
        ...state,
        information: {
          ...state.information,
          select: { ...state.information.select, timezone: action.payload },
        },
      }
    default:
      return state
  }
}

const store = createStore(information)
store.subscribe(() => {})

ReactDOM.render(
  <Provider store={store}>
    <App store={store.getState()} />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

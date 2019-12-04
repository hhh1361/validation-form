import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import Email from './components/email/email'
import Info from './components/info/info'

class App extends React.Component {
  
  render() {
    console.log()
    return (
        <div className="container-fluid align-items-center">
          {this.props.store.stage === 'email' ? <Email store={this.props.store} /> : null}
          {this.props.store.stage === 'info' ? <Info store={this.props.store} /> : null}
          
        </div>
    )
  }
}

export default connect(
  state => {
    console.log('connect', state)
    return ({
    store: state
})}
)(App);

import React from 'react'
import './App.css'
import Email from './components/email/email'

class App extends React.Component {
  
  render() {
    console.log()
    return (
        <div className="container-fluid align-items-center">
          {this.props.store.stage === 'email' ? <Email store={this.props.store} /> : null}
          
        </div>
    )
  }
}

export default App

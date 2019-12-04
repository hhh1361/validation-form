import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import Email from './components/email/email'
import Info from './components/info/info'
import Company from './components/company/company'
import Timezone from './components/timezone/timezone'
import Finish from './components/finish/finish'

class App extends React.Component {
  
  render() {
    return (
        <div className="container-fluid align-items-center">
          {this.props.store.stage === 'email' ? <Email store={this.props} /> : null}
          {this.props.store.stage === 'info' ? <Info store={this.props.store} /> : null}
          {this.props.store.stage === 'company' ? <Company store={this.props.store} /> : null}
          {this.props.store.stage === 'timezone' ? <Timezone store={this.props.store} /> : null}
          {this.props.store.stage === 'finish' ? <Finish store={this.props.store} /> : null}
          {this.props.store.stage === 'completed' ? 
          <div className="alert-success">
            <p>Congratulations! Your account has been created</p>
          </div> : null}
        </div>
    )
  }
}

export default connect(
  state => {
    return ({
    store: state
})}
)(App);

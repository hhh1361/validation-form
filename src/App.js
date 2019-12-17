/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import Email from './components/email/email'
import Info from './components/info/info'
import Company from './components/company/company'
import Timezone from './components/timezone/timezone.jsx'
import Finish from './components/finish/finish'

class App extends React.Component {
  render() {
    const { stage } = this.props
    return (
      <div className="container-fluid align-items-center col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
        {stage === 'email' ? <Email /> : null}
        {stage === 'info' ? <Info /> : null}
        {stage === 'company' ? <Company /> : null}
        {stage === 'timezone' ? <Timezone /> : null}
        {stage === 'finish' ? <Finish /> : null}
        {stage === 'completed' ? (
          <div className="alert-success">
            <p>Congratulations! Your account has been created</p>
          </div>
        ) : null}
      </div>
    )
  }
}

export default connect(state => {
  return {
    stage: state.stage,
    information: state.information,
  }
})(App)

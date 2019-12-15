import React from 'react'
import { connect } from 'react-redux'
import './email.css'
import Header from '../header/header'
import Progress from '../progress/progress'

class Email extends React.Component {
  onNextStep() {
    const ctx = this
    const url = new URL('https://frontapi.vinchain.io/auth/api/check-email/')
    const email = document.querySelector('.inputEmail')
    const progressBar = document.getElementById('progress-bar')
    const json = JSON.stringify({
      email: email.value,
    })

    fetch(url, {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: json,
    })
      .then(json)
      .then(data => {
        if (data.status === 200) {
          email.style.color = 'green'
          progressBar.style.width = '20%'
          email.placeholder = 'email'
          email.defaultValue = ctx.props.email
          ctx.props.onNextStep(email.value)
        } else {
          email.value = ''
          email.style.border = '1px solid red'
          email.style.color = 'red'
          email.placeholder = 'incorrect email'
        }
      })
  }

  render() {
    const { email } = this.props
    return (
      <>
        <Header
          header1="Create your VINchain account."
          header2="Easy to use anytime, anywhere, for everyone."
        />
        <Progress width="0%" />

        <div className="col-12">
          <input
            type="text"
            className="form-control inputEmail text-muted"
            placeholder="email"
            defaultValue={email}
          />
        </div>
        <p className="text-muted description">
          We`ll email a link to create a password for your new account.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm" />
            <div className="col-md-6 col-5" />
            <div className="col-sm">
              <button
                className="btn btn-primary"
                type="button"
                id="btn-next"
                onClick={() => this.onNextStep()}
              >
                NEXT STEP &#62;
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default connect(
  state => {
    return {
      stage: state.stage,
      email: state.email,
    }
  },
  dispatch => ({
    onNextStep: email => {
      dispatch({ type: 'ADD_EMAIL', payload: email })
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' })
    },
  }),
)(Email)

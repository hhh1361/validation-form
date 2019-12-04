import React from 'react'
import { connect } from 'react-redux'
import './email.css'

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
          email.defaultValue = ctx.props.store.email
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
        <div className="col-12 d-flex justify-content-center flex-column header">
          <div className="d-inline-flex justify-content-center">
            <h3 className="text-muted">Create your VINchain account.</h3>
          </div>
          <div className="d-inline-flex justify-content-center">
            <h3 className="text-muted">
              Easy to use anytime, anywhere, for everyone.
            </h3>
          </div>
        </div>
        <p className="createAccount">CREATE ACCOUNT</p>
        <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <div className="progress" id="progress">
            <div
              className="progress-bar"
              id="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Mute volume"
            />
          </div>
        </div>

        <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
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
            <div className="col-md-2 col-1" />
            <div className="col-sm" />
            <div className="col-md-3 col-1" />
            <div className="col-sm">
              <button
                className="btn btn-primary"
                type="button"
                id="btn-next"
                onClick={this.onNextStep.bind(this)}
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

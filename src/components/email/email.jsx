import React from 'react'
import { connect } from 'react-redux'
import './email.css'
import Input from '../fields/input/input'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'

function Email(props) {
  const { input, onNextStep } = props
  const { email } = input

  let progress = 21
  progress += email ? 0 : -21

  const onCheckHandler = (e, func) => {
    const element = e.target
    const url = new URL('https://frontapi.vinchain.io/auth/api/check-email/')
    const json = JSON.stringify({
      email: element.value,
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
          element.className = `form-control input__data text-muted green`
          func('email', element.value)
        } else {
          element.className = `form-control input__data red`
          func('email', '')
        }
      })
  }

  return (
    <>
      <Header
        header1="Create your VINchain account."
        header2="Easy to use anytime, anywhere, for everyone."
      />
      <Progress width={`${progress}%`} />
      <Input field="Email" value={email} checkFunction={onCheckHandler} />
      <p className="text-muted description">
        We`ll email a link to create a password for your new account.
      </p>
      <Buttons onNextStep={() => (email ? onNextStep() : null)} />
    </>
  )
}
export default connect(
  state => {
    return {
      stage: state.stage,
      input: state.information.input,
    }
  },
  dispatch => ({
    onNextStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' })
    },
  }),
)(Email)

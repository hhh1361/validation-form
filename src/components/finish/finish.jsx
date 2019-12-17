import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import Input from '../fields/input/input'
import Select from '../fields/select/select'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'
import './finish.css'

function Finish(props) {
  const { input, select, onNextStep } = props
  const { email, name, surname, company } = input
  const { gender, timezone } = select
  const check = e => {
    if (e.target.id === 'email') {
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
            element.className = `form-control inputData inputEmail text-muted`
          } else {
            element.className = `form-control inputData inputEmail text-muted red`
          }
        })
    } else if (e.target.id !== 'company') {
      if (e.target.value.length) {
        e.target.className = `form-control inputData text-muted`
      } else {
        e.target.className = `form-control inputData text-muted red`
      }
    }
  }
  const onCreate = () =>
    email && name && surname && gender && timezone ? onNextStep() : null

  return (
    <>
      <Header header1="Check your data" />
      <Progress width="100%" />
      <Input field="Email" value={email} checkFunction={check} wrapped />
      <Input field="Name" value={name} checkFunction={check} wrapped />
      <Input field="Surname" value={surname} checkFunction={check} wrapped />
      <Select field="Gender" value={gender} wrapped />
      <Input field="Company" value={company} checkFunction={check} wrapped />
      <Select field="Timezone" value={timezone} wrapped />
      <Buttons onCreate={onCreate} />
    </>
  )
}

export default connect(
  state => {
    return {
      stage: state.stage,
      input: state.information.input,
      select: state.information.select,
    }
  },
  dispatch => ({
    onNextStep: (email, name, surname, gender, company, timezone) => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'completed' })
    },
  }),
)(Finish)

import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import Input from '../fields/input/input'
import Select from '../fields/select/select'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'
import timezoneJSON from '../timezone/timezone.json'
import genderJSON from '../info/gender.json'
import './finish.css'

function Finish(props) {
  const { input, select, onNextStep } = props
  const { email, name, surname, company } = input
  const { gender, timezone } = select
  const check = (e, func, field) => {
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
            element.className = `form-control input__data text-muted green`
            func('email', element.value)
          } else {
            element.className = `form-control input__data red`
            func('email', '')
          }
        })
    } else if (e.target.id !== 'company') {
      e.target.className = `form-control input__data text-muted green`
      func(field, e.target.value)
    } else {
      e.target.className = `form-control input__data red`
      func(field, '')
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
      <Select field="Gender" value={gender} json={genderJSON} wrapped />
      <Input field="Company" value={company} checkFunction={check} wrapped />
      <Select field="Timezone" value={timezone} json={timezoneJSON} wrapped />
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

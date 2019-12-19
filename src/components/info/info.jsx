import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import './info.css'
import Input from '../fields/input/input'
import Select from '../fields/select/select'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'
import genderJSON from './gender.json'

function Info(props) {
  const { input, select, onNextStep, onPrevStep } = props
  const { name, surname } = input
  const { gender } = select

  let progress = 60
  progress += name ? 0 : -13
  progress += surname ? 0 : -13
  progress += gender ? 0 : -13

  const onCheckHandler = (e, func, field) => {
    if (e.target.value.length) {
      e.target.className = `form-control input__data text-muted green`
      func(field, e.target.value)
    } else {
      e.target.className = `form-control input__data red`
      func(field, '')
    }
  }

  return (
    <>
      <Header
        header1="Let`s introduce ourselves!"
        header2="Your name will be displayed in all reports, documents, exc."
      />
      <Progress width={`${progress}%`} />
      <Input field="Name" value={name} checkFunction={onCheckHandler} />
      <Input field="Surname" value={surname} checkFunction={onCheckHandler} />
      <Select field="Gender" value={gender} json={genderJSON} />
      <Buttons
        onPrevStep={onPrevStep}
        onNextStep={() => (name && surname && gender ? onNextStep() : null)}
      />
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
    onNextStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'company' })
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'email' })
    },
  }),
)(Info)

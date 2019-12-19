/* eslint-disable react/destructuring-assignment */
import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import Input from '../fields/input/input'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'
import './company.css'

function Company(props) {
  const { input, onNextStep, onPrevStep } = props
  const { company } = input

  let progress = 80
  progress += company ? 0 : -20

  const onCheckHandler = (e, func, field) => {
    if (e.target.value.length) {
      e.target.className = `form-control input__data text-muted green`
      func(field, e.target.value)
    } else {
      e.target.className = `form-control input__data text-muted`
      func(field, '')
    }
  }
  return (
    <>
      <Header header1="Tracking company vehicles?" />
      <Progress width={`${progress}%`} />
      <Input field="Company" value={company} checkFunction={onCheckHandler} />
      <Buttons onPrevStep={onPrevStep} onNextStep={onNextStep} />
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
      dispatch({ type: 'CHANGE_STAGE', payload: 'timezone' })
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' })
    },
  }),
)(Company)

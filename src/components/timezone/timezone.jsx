import React from 'react'
import { connect } from 'react-redux'
import Select from '../fields/select/select'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'
import timezoneJSON from './timezone.json'
import './timezone.css'

function Timezone(props) {
  const { select, onNextStep, onPrevStep } = props
  const { timezone } = select
  const GMT = `${new Date().toString().slice(28, 31)}.0`

  let progress = 100
  progress += timezone ? 0 : -20

  return (
    <>
      <Header header1="Set your time zone" />
      <Progress width={`${progress}%`} />
      <Select
        field="Timezone"
        value={timezone}
        defaultValue={GMT}
        json={timezoneJSON}
      />
      <Buttons
        onPrevStep={onPrevStep}
        onNextStep={() => (timezone ? onNextStep() : null)}
      />
    </>
  )
}

export default connect(
  state => {
    return {
      stage: state.stage,
      select: state.information.select,
    }
  },
  dispatch => ({
    onNextStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'finish' })
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'company' })
    },
  }),
)(Timezone)

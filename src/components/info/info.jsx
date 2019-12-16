import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import './info.css'
import Input from '../fields/input/input'
import Select from '../fields/select/select'
import Header from '../header/header'
import Progress from '../progress/progress'
import Buttons from '../buttons/buttons'

class Info extends React.Component {
  progress = 60

  render() {
    const { input, select, onNextStep, onPrevStep } = this.props
    const { name, surname } = input
    const { gender } = select

    this.progress += name ? 0 : -13
    this.progress += surname ? 0 : -13
    this.progress += gender ? 0 : -13

    return (
      <>
        <Header
          header1="Let`s introduce ourselves!"
          header2="Your name will be displayed in all reports, documents, exc."
        />
        <Progress width={`${this.progress}%`} />
        <Input field="Name" value={name} />
        <Input field="Surname" value={surname} />
        <Select field="Gender" value={gender} />
        <Buttons
          onPrevStep={onPrevStep}
          onNextStep={() => (name && surname && gender ? onNextStep() : null)}
        />
      </>
    )
  }
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

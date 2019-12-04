/* eslint-disable react/destructuring-assignment */
import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import './company.css'

class Company extends React.Component {
  onPrevStep() {
    this.props.onPrevStep()
  }

  onNextStep() {
    const company = document.querySelector('.inputCompany').value
    this.props.onNextStep(company)
  }

  onChangeNameHandler(e) {
    if (e.target.value.length) {
      e.target.style.border = '1px solid green'
      this.progressBar('80%')
    } else {
      e.target.style.border = '1px solid gray'
      this.progressBar('60%')
    }
    this.props.onChangeInput(e.target.value)
  }

  progressBar(value) {
    const progressBar = document.getElementById('progress-bar')
    progressBar.style.width = value
  }

  render() {
    return (
      <>
        <div className="col-12 d-flex justify-content-center flex-column header">
          <div className="d-inline-flex justify-content-center">
            <h3 className="text-muted">
              Tracking company vehicles? (optional)
            </h3>
          </div>
        </div>
        <p className="createAccount">CREATE ACCOUNT</p>
        <div className="col-12">
          <div className="progress" id="progress">
            {this.props.company.length ? (
              <div
                className="progress-bar"
                style={{ width: '80%' }}
                id="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Mute volume"
              />
            ) : (
              <div
                className="progress-bar"
                style={{ width: '60%' }}
                id="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Mute volume"
              />
            )}
          </div>
        </div>

        <div className="col-12">
          <input
            type="text"
            className="form-control inputData inputCompany text-muted"
            placeholder="Company Name (optional)"
            defaultValue={this.props.company}
            onChange={this.onChangeNameHandler.bind(this)}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button
                className="btn btn-primary"
                type="button"
                id="btn-previous"
                onClick={this.onPrevStep.bind(this)}
              >
                {' '}
                &#60; PREV STEP
              </button>
            </div>
            <div className="col-md-4 col-4" />
            <div className="col-sm">
              <button
                className="btn btn-primary"
                type="button"
                id="btn-next"
                onClick={this.onNextStep.bind(this)}
              >
                {this.props.company ? 'NEXT STEP >' : 'SKIP THIS STEP >'}
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
      company: state.company,
    }
  },
  dispatch => ({
    onNextStep: company => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'timezone' })
      dispatch({ type: 'ADD_COMPANY', payload: company })
    },
    onChangeInput: company => {
      dispatch({ type: 'ADD_COMPANY', payload: company })
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' })
    },
  }),
)(Company)

import React from 'react'
import './buttons.css'

export default function Buttons(props) {
  const { onPrevStep, onNextStep, onCreate } = props
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        {onPrevStep ? (
          <button
            className="btn btn-primary"
            type="button"
            id="btn-previous"
            onClick={onPrevStep}
          >
            &#60; PREV STEP
          </button>
        ) : (
          <div className="col-sm" />
        )}
        {onNextStep ? (
          <button
            className="btn btn-primary"
            type="button"
            id="btn-next"
            onClick={onNextStep}
          >
            NEXT STEP &#62;
          </button>
        ) : (
          <div className="col-sm" />
        )}
      </div>
      {onCreate ? (
        <div className="row d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary btn-block"
            id="btn-next"
            onClick={onCreate}
          >
            CREATE ACCOUNT
          </button>
        </div>
      ) : null}
    </div>
  )
}

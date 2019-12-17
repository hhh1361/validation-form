import React from 'react'
import { connect } from 'react-redux'
import './input.css'

function Input(props) {
  const { field, value, onDispatchField, checkFunction, wrapped } = props

  return wrapped ? (
    <div className="field-wrapper col-12">
      <p className="text-justify">{field}</p>
      <div className="col-12">
        <input
          type="text"
          id={field.toLowerCase()}
          className={`form-control inputData input${field} text-muted`}
          placeholder={value ? null : field}
          defaultValue={value || null}
          onChange={e => {
            checkFunction(e)
            onDispatchField(field, e.target.value)
          }}
        />
      </div>
    </div>
  ) : (
    <div className="col-12">
      <input
        type="text"
        id={field.toLowerCase()}
        className={`form-control inputData input${field} text-muted`}
        placeholder={value ? null : field}
        defaultValue={value || null}
        onChange={e => {
          checkFunction(e)
          onDispatchField(field, e.target.value)
        }}
      />
    </div>
  )
}

export default connect(null, dispatch => ({
  onDispatchField: (field, value) => {
    dispatch({ type: `ADD_${field.toUpperCase()}`, payload: value })
  },
}))(Input)

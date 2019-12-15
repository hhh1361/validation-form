import React from 'react'
import { connect } from 'react-redux'
import './input.css'

function Input(props) {
  const { field, onDispatchField, input } = props
  const onChangeFieldHandler = e => {
    if (e.target.value.length) {
      e.target.className = `form-control inputData input${field} text-muted green`
    } else {
      e.target.className = `form-control inputData input${field} text-muted red`
    }
    onDispatchField(field, e.target.value)
  }
  return (
    <div className="col-12">
      <input
        type="text"
        className={`form-control inputData input${field} text-muted`}
        placeholder={input[field.toLowerCase()] ? null : field}
        defaultValue={input[field.toLowerCase()] || null}
        onChange={onChangeFieldHandler}
      />
    </div>
  )
}

export default connect(
  state => {
    return {
      input: state.information.input,
    }
  },
  dispatch => ({
    onDispatchField: (field, value) => {
      dispatch({ type: `ADD_${field.toUpperCase()}`, payload: value })
    },
  }),
)(Input)

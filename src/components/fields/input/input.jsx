import React from 'react'
import { connect } from 'react-redux'
import './input.css'

function Input(props) {
  const { field, value, onDispatchField } = props
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
        placeholder={value ? null : field}
        defaultValue={value || null}
        onChange={onChangeFieldHandler}
      />
    </div>
  )
}

export default connect(null, dispatch => ({
  onDispatchField: (field, value) => {
    dispatch({ type: `ADD_${field.toUpperCase()}`, payload: value })
  },
}))(Input)

import React from 'react'
import { connect } from 'react-redux'
import './select.css'
import timezoneJSON from '../../timezone/timezone.json'
import genderJSON from '../../info/gender.json'

function Select(props) {
  const { field, value, json, defaultValue, onDispatchField, wrapped } = props
  if (!value && defaultValue) {
    onDispatchField(field.toLowerCase(), defaultValue)
  }
  const onSelect = e => {
    onDispatchField(field, e.target.value)
  }

  return wrapped ? (
    <div className="field-wrapper col-12">
      <p className="text-justify">{field}</p>
      <div className="col-12">
        <select
          placeholder={value ? null : field}
          value={value || defaultValue || field}
          onChange={onSelect}
        >
          {json.map(e => (
            <option value={e.value} key={e.value}>
              {e.description}
            </option>
          ))}
          <option value={field} disabled hidden>
            {field}
          </option>
        </select>
      </div>
    </div>
  ) : (
    <div className="col-12">
      <select
        placeholder={value ? null : field}
        value={value || defaultValue || field}
        onChange={onSelect}
      >
        {json.map(e => (
          <option value={e.value} key={e.value}>
            {e.description}
          </option>
        ))}
        <option value={field} disabled hidden>
          {field}
        </option>
      </select>
    </div>
  )
}
export default connect(null, dispatch => ({
  onDispatchField: (field, value) => {
    dispatch({ type: `ADD_${field.toUpperCase()}`, payload: value })
  },
}))(Select)

import React from 'react'

export default function Surname(props) {
  const { surname } = props
  const onChangeSurnameHandler = e => {
    if (e.target.value.length) {
      e.target.className =
        'form-control inputData inputSurname text-muted green'
    } else {
      e.target.className = 'form-control inputData inputSurname text-muted red'
    }
  }
  return (
    <div className="col-12">
      <input
        type="text"
        className="form-control inputData inputSurname text-muted"
        placeholder="Second name"
        defaultValue={surname}
        onChange={() => onChangeSurnameHandler()}
      />
    </div>
  )
}

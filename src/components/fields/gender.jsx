import React from 'react'

export default function Name(props) {
  const { gender } = props
  const onClickChoseGender = e => {
    document.querySelector('.inputGender').innerHTML = e.target.innerHTML
    document.querySelector('.inputGender').style.border = '1px solid green'
  }
  return (
    <div className="col-12">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle inputData inputGender"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-offset="0"
        >
          {gender || 'Gender'}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item" onClick={() => onClickChoseGender()}>
            Male
          </div>
          <div className="dropdown-item" onClick={() => onClickChoseGender()}>
            Female
          </div>
        </div>
      </div>
    </div>
  )
}

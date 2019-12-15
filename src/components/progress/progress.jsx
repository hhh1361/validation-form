import React from 'react'
import './progress.css'

export default function Progress(props) {
  const { width } = props
  return (
    <div className=" col-12">
      <div className="progress" id="progress">
        <div
          className="progress-bar"
          style={{ width }}
          id="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Mute volume"
        />
      </div>
    </div>
  )
}

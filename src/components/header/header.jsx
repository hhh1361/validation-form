import React from 'react'
import './header.css'

export default function Header(props) {
  const { header1, header2 } = props
  return (
    <>
      <div className="col-12 d-flex justify-content-center flex-column header">
        <div className="d-inline-flex justify-content-center">
          <h3 className="text-muted">{header1}</h3>
        </div>
        <div className="d-inline-flex justify-content-center">
          <h3 className="text-muted">{header2}</h3>
        </div>
      </div>
      <p className="createAccount">CREATE ACCOUNT</p>
    </>
  )
}

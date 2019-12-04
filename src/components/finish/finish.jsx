import React from 'react'
import 'bootstrap'
import { connect } from 'react-redux'
import './finish.css'

class Finish extends React.Component {
  onClickChoseGender(e) {
    document.querySelector('.inputGender').innerHTML = e.target.innerHTML
    document.querySelector('.inputGender').style.border = '1px solid green'
  }

  onChangeHandler(e) {
    if (e.target.value.length) {
      e.target.parentNode.style.border = '1px solid gray'
    } else {
      e.target.parentNode.style.border = '1px solid red'
    }
    if (e.target.id === 'email') {
      this.emailCheck(e.target)
    }
  }

  onChoseTimezone(i) {
    const array = Array.from(document.getElementsByTagName('option'))
    let timezone = ''
    array.forEach(e => {
      if (e.value === i) {
        timezone = e.innerHTML
      }
    })
    return timezone
  }

  onNextStep() {
    const ctx = this
    const email = document.querySelector('.inputEmail')
    const name = document.querySelector('.inputName').value
    const surname = document.querySelector('.inputSurname').value
    const gender = document.querySelector('.inputGender').innerHTML
    const company = document.querySelector('.inputCompany').value
    const timezone = this.onChoseTimezone(
      document.getElementById('timezone').value,
    )

    const url = new URL('https://frontapi.vinchain.io/auth/api/check-email/')
    const json = JSON.stringify({
      email: email.value,
    })
    fetch(url, {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: json,
    }).then(data => {
      if (data.status === 200) {
        if (name && surname && gender !== 'Gender' && timezone) {
          ctx.props.onNextStep(
            email.value,
            name,
            surname,
            gender,
            company,
            timezone,
          )
        }
      }
    })
  }

  emailCheck(e) {
    const url = new URL('https://frontapi.vinchain.io/auth/api/check-email/')
    const json = JSON.stringify({
      email: e.value,
    })
    fetch(url, {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: json,
    }).then(data => {
      if (data.status === 200) {
        e.parentNode.style.border = '1px solid gray'
      } else {
        e.parentNode.style.border = '1px solid red'
      }
    })
  }

  render() {
    const { email, name, surname, gender, company, timezone } = this.props
    return (
      <>
        <div className="col-12 d-flex justify-content-center flex-column header">
          <div className="d-inline-flex justify-content-center">
            <h3 className="text-muted">Check your data</h3>
          </div>
        </div>
        <p className="createAccount">CREATE ACCOUNT</p>
        <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <div className="progress" id="progress">
            <div
              className="progress-bar"
              style={{ width: '100%' }}
              id="progress-bar"
              role="progressbar"
              aria-label="Mute volume"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div className="field-wrapper col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <p className="text-justify">Email</p>
          <input
            type="text"
            className="form-control inputData inputEmail text-muted"
            id="email"
            placeholder="email"
            defaultValue={email}
            onChange={this.onChangeHandler.bind(this)}
          />
        </div>
        <div className="field-wrapper col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <p className="text-justify">First name</p>
          <input
            type="text"
            className="form-control inputData inputName text-muted"
            placeholder="First name"
            defaultValue={name}
            onChange={this.onChangeHandler.bind(this)}
          />
        </div>
        <div className="field-wrapper col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <p className="text-justify">Last name</p>
          <input
            type="text"
            className="form-control inputData inputSurname text-muted"
            placeholder="Second name"
            defaultValue={surname}
            onChange={this.onChangeHandler.bind(this)}
          />
        </div>
        <div className="field-wrapper col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <p className="text-justify">Gender</p>
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
              <div
                className="dropdown-item"
                onClick={this.onClickChoseGender.bind(this)}
              >
                Male
              </div>
              <div
                className="dropdown-item"
                onClick={this.onClickChoseGender.bind(this)}
              >
                Female
              </div>
            </div>
          </div>
        </div>
        <div className="field-wrapper col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
          <p className="text-justify">Company</p>
          <input
            type="text"
            className="form-control inputData inputCompany text-muted"
            placeholder="Company"
            defaultValue={company}
          />
        </div>
        <div className="field-wrapper timezone-wrapper col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <p className="text-justify">Select your timezone</p>
          <select
            className="timezone form-control"
            name="timezone"
            id="timezone"
            defaultValue={timezone}
          >
            <option value="-12.0">(GMT -12:00) Eniwetok, Kwajalein</option>
            <option value="-11.0">(GMT -11:00) Midway Island, Samoa</option>
            <option value="-10.0">(GMT -10:00) Hawaii</option>
            <option value="-09.0">(GMT -9:00) Alaska</option>
            <option value="-08.0">
              (GMT -8:00) Pacific Time (US &amp; Canada)
            </option>
            <option value="-07.0">
              (GMT -7:00) Mountain Time (US &amp; Canada)
            </option>
            <option value="-06.0">
              (GMT -6:00) Central Time (US &amp; Canada), Mexico City
            </option>
            <option value="-05.0">
              (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
            </option>
            <option value="-04.0">
              (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
            </option>
            <option value="-03.0">
              (GMT -3:00) Brazil, Buenos Aires, Georgetown
            </option>
            <option value="-02.0">(GMT -2:00) Mid-Atlantic</option>
            <option value="-01.0">
              (GMT -1:00 hour) Azores, Cape Verde Islands
            </option>
            <option value="00.00">
              (GMT) Western Europe Time, London, Lisbon, Casablanca
            </option>
            <option value="+01.0">
              (GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris
            </option>
            <option value="+02.0">(GMT +2:00) Kaliningrad, South Africa</option>
            <option value="+03.0">
              (GMT +3:00) Baghdad, Riyadh, Minsk, Moscow
            </option>
            <option value="+04.0">
              (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
            </option>
            <option value="+05.0">
              (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
            </option>
            <option value="+06.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
            <option value="+07.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
            <option value="+08.0">
              (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
            </option>
            <option value="+09.0">
              (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
            </option>
            <option value="+10.0">
              (GMT +10:00) Eastern Australia, Guam, Vladivostok
            </option>
            <option value="+11.0">
              (GMT +11:00) Magadan, Solomon Islands, New Caledonia
            </option>
            <option value="+12.0">
              (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
            </option>
          </select>
        </div>
        <div className="container">
          <div className="col-sm">
            <button
              type="button"
              className="btn btn-primary btn-block"
              id="btn-next"
              onClick={this.onNextStep.bind(this)}
            >
              CREATE ACCOUNT
            </button>
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
      email: state.email,
      name: state.name,
      surname: state.surname,
      gender: state.gender,
      company: state.company,
      timezone: state.timezone,
    }
  },
  dispatch => ({
    onNextStep: (email, name, surname, gender, company, timezone) => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'completed' })
      dispatch({ type: 'ADD_EMAIL', payload: email })
      dispatch({ type: 'ADD_NAME', payload: name })
      dispatch({ type: 'ADD_SURNAME', payload: surname })
      dispatch({ type: 'ADD_GENDER', payload: gender })
      dispatch({ type: 'ADD_COMPANY', payload: company })
      dispatch({ type: 'ADD_TIMEZONE', payload: timezone })
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'timezone' })
    },
  }),
)(Finish)

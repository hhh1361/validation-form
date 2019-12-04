import React from 'react';

import { connect } from 'react-redux'
import './timezone.css'
import timezone from './timezone';

class Timezone extends React.Component {
  onPrevStep() {
    this.props.onPrevStep()
  }
  onNextStep() {
    this.progressBar('100%')
    const timezone = document.querySelector('.timezone').value;
    this.props.onNextStep(timezone)
  }
  progressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = value
  }

  render() {  
    const now = new Date();
    const GMT = `${now.toString().slice(28,31)}.0`
    return(
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center flex-column header">
        <div className="d-inline-flex justify-content-center">
          <h3 className="text-muted">Set your time zone</h3>
        </div>
      </div>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <div className="progress" id='progress'>
          <div className="progress-bar" style={{width: '80%'}}id='progress-bar' role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <p className="createAccount">CREATE ACCOUNT</p>
      <div className="timezone-wrapper col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <p className="text-justify">Select your timezone</p>
        <select className="timezone form-control" name="timezone" id="timezone" defaultValue={GMT}>
            <option value="-12.0">(GMT -12:00) Eniwetok, Kwajalein</option>
            <option value="-11.0">(GMT -11:00) Midway Island, Samoa</option>
            <option value="-10.0">(GMT -10:00) Hawaii</option>
            <option value="-09.0">(GMT -9:00) Alaska</option>
            <option value="-08.0">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
            <option value="-07.0">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
            <option value="-06.0">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
            <option value="-05.0">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
            <option value="-04.0">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
            <option value="-03.0">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
            <option value="-02.0">(GMT -2:00) Mid-Atlantic</option>
            <option value="-01.0">(GMT -1:00 hour) Azores, Cape Verde Islands</option>
            <option value="00.00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
            <option value="+01.0">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</option>
            <option value="+02.0">(GMT +2:00) Kaliningrad, South Africa</option>
            <option value="+03.0">(GMT +3:00) Baghdad, Riyadh, Minsk, Moscow</option>
            <option value="+04.0">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
            <option value="+05.0">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
            <option value="+06.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
            <option value="+07.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
            <option value="+08.0">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
            <option value="+09.0">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
            <option value="+10.0">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
            <option value="+11.0">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
            <option value="+12.0">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
        </select>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-1" />
          <div className="col-sm">
            <button className="btn btn-primary" id='btn-previous' onClick={this.onPrevStep.bind(this)}> &#60; PREV STEP</button>
          </div>
          <div className="col-md-3 col-1" />
          <div className="col-sm">
            <div className="col-sm">
              <button className="btn btn-primary" id='btn-next' onClick={this.onNextStep.bind(this)}>NEXT STEP ></button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}


export default connect(
  state => {
    return ({
    stage: state.stage,
    timezone: state.timezone
})},
  dispatch => ({
    onNextStep: (timezone) => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'finish' });
      dispatch({ type: 'ADD_TIMEZONE', payload: timezone });
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'company' });
    }
  })
)(Timezone);

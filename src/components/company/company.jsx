import React from 'react';
import 'bootstrap';
import { connect } from 'react-redux'
import './company.css'

class Company extends React.Component {
  onPrevStep() {
    this.props.onPrevStep()
  }
  onNextStep() {
    const name = document.querySelector('.inputName').value;
    const surname = document.querySelector('.inputSurname').value;
    const gender = document.querySelector('.inputGender').innerHTML;
    this.props.onNextStep(name, surname, gender)
  }
  progressBar() {
    const inputName = document.querySelector('.inputName');
    const inputSurname = document.querySelector('.inputSurname');
    const inputGender = document.querySelector('.inputGender');
    const progressBar = document.getElementById('progress-bar');
    const progress = (inputName.value.length ? 11 : 0) + (inputSurname.value.length ? 11 : 0) + (inputGender.innerHTML !== 'Gender' ? 11 : 0);
    progressBar.style.width = 33+progress+'%'
  }
  onChangeNameHandler(e) {
    if (e.target.value.length) {
      e.target.style.border = '1px solid green'
    } else {
      e.target.style.border = '1px solid red'
    }
    this.progressBar();
  }

  onClickChoseGender(e) {
    document.querySelector('.inputGender').innerHTML = e.target.innerHTML;
    document.querySelector('.inputGender').style.border = '1px solid green';
    this.progressBar();
  }


  render() {  






    return(
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center flex-column header">
        <div className="d-inline-flex justify-content-center">
          <h3 className="text-muted">Let`s introduce ourselves!</h3>
        </div>
        <div className="d-inline-flex justify-content-center">
        <h3 className="text-muted">Your name will be displayed in all reports, documents, exc.</h3>
        </div>
      </div>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <div className="progress" id='progress'>
          <div className="progress-bar" style={{width: '33%'}}id='progress-bar' role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <p className="createAccount">CREATE ACCOUNT</p>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <input type="text" className="form-control inputData inputName text-muted" placeholder="First name" onChange={this.onChangeNameHandler.bind(this)}/>
      </div>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <input type="text" className="form-control inputData inputSurname text-muted" placeholder="Second name" onChange={this.onChangeNameHandler.bind(this)}/>
      </div>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle inputData inputGender" 
                  type="button" id="dropdownMenuButton" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                  data-offset="0">
            Gender
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="dropdown-item" onClick={this.onClickChoseGender.bind(this)}>Male</div>
            <div className="dropdown-item" onClick={this.onClickChoseGender.bind(this)}>Fermale</div>
          </div>
        </div>
      </div>
      <p className="text-muted description">We`ll email a link to create a password for your new account.</p>
      <div className="container">
        <div className="row">
          <div className="col-2" />
          <div className="col-sm">
            <button className="btn btn-primary" id='btn-previous' onClick={this.onPrevStep.bind(this)}> &#60; PREV STEP</button>
          </div>
          <div className="col-3" />
          <div className="col-sm">
            <button className="btn btn-primary" id='btn-next' onClick={this.onNextStep.bind(this)}>NEXT STEP ></button>
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
    store: state.stage
})},
  dispatch => ({
    onNextStep: (name, surname, gender) => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'company' });
      dispatch({ type: 'ADD_NAME', payload: name });
      dispatch({ type: 'ADD_SURNAME', payload: surname });
      dispatch({ type: 'ADD_GENDER', payload: gender });
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' });
    }
  })
)(Company);

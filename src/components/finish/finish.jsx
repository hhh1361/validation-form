import React from 'react';
import 'bootstrap';
import { connect } from 'react-redux'
import './finish.css'

class Finish extends React.Component {
  onPrevStep() {
    this.props.onPrevStep()
  }
  onNextStep() {
    const name = document.querySelector('.inputName');
    const surname = document.querySelector('.inputSurname');
    const gender = document.querySelector('.inputGender');
    console.log(name, surname, gender !== 'Gender')
    if (name.value && surname.value && gender.innerHTML !== 'Gender') {
      this.props.onNextStep(name.value, surname.value, gender.innerHTML)
    } else {
      if (!name.value) {
        name.style.border = '1px solid red'
      }
      if(!surname.value) {
        surname.style.border = '1px solid red'
      }
      if(gender.innerHTML === 'Gender') {
        console.log(gender.innerHTML)
        gender.style.border = '1px solid red'
      }
    }
    
  }
  progressBar() {
    const inputName = document.querySelector('.inputName');
    const inputSurname = document.querySelector('.inputSurname');
    const inputGender = document.querySelector('.inputGender');
    const progressBar = document.getElementById('progress-bar');
    const progress = (inputName.value.length ? 13 : 0) + (inputSurname.value.length ? 13 : 0) + (inputGender.innerHTML !== 'Gender' ? 13 : 0);
    progressBar.style.width = 20+progress+'%'
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
        {this.props.name.length ? 
            <div className="progress-bar" style={{width: '59%'}}id='progress-bar' role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> :
            <div className="progress-bar" style={{width: '20%'}}id='progress-bar' role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            }
        </div>
      </div>
      <p className="createAccount">CREATE ACCOUNT</p>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <input type="text" className="form-control inputData inputName text-muted" placeholder="First name" defaultValue={this.props.name} onChange={this.onChangeNameHandler.bind(this)}/>
      </div>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <input type="text" className="form-control inputData inputSurname text-muted" placeholder="Second name" defaultValue={this.props.surname} onChange={this.onChangeNameHandler.bind(this)}/>
      </div>
      <div className="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle inputData inputGender" 
                  type="button" id="dropdownMenuButton" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                  data-offset="0">
            {this.props.gender ? this.props.gender : 'Gender'}
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
        <div className="col-md-2 col-1" />
          <div className="col-sm">
            <button className="btn btn-primary" id='btn-previous' onClick={this.onPrevStep.bind(this)}> &#60; PREV STEP</button>
          </div>
          <div className="col-md-3 col-1" />
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
    stage: state.stage,
    name: state.name,
    surname: state.surname,
    gender: state.gender
})},
  dispatch => ({
    onNextStep: (name, surname, gender) => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'company' });
      dispatch({ type: 'ADD_NAME', payload: name });
      dispatch({ type: 'ADD_SURNAME', payload: surname });
      dispatch({ type: 'ADD_GENDER', payload: gender });
    },
    onPrevStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'email' });
    }
  })
)(Finish);

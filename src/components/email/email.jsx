import React from 'react';
import { connect } from 'react-redux'
import './email.css'

class Email extends React.Component {
  addTrack() {
    const ctx = this;
    const url = new URL('https://frontapi.vinchain.io/auth/api/check-email/');
    const email = document.querySelector('.inputEmail');
    const json = JSON.stringify({
      email: email.value,
    });

    fetch(url, {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: json,
    })
    .then(json)  
      .then(function (data) {  
        console.log('Correct email');  
        ctx.props.onAddTrack(email.value);
      })  
      .catch(function (error) {  
        console.log('Incorrect email'); 
        email.value = ''; 
      });

    
}


  render() {  






    return(
    <React.Fragment>
      <div class="col-12 d-flex justify-content-center flex-column header">
        <div className="d-inline-flex justify-content-center">
          <h3 className="text-muted">Create your VINchain account.</h3>
        </div>
        <div className="d-inline-flex justify-content-center">
        <h3 className="text-muted">Easy to use anytime, anywhere, for everyone.</h3>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <div class="progress" id='progress'>
          <div class="progress-bar" id='progress-bar' role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <p className="createAccount">CREATE ACCOUNT</p>
      <div class="col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5"> 
        <input type="text" className="form-control inputEmail text-muted" defaultValue="lalala@mail.ru"/>
      </div>
      <p className="text-muted description">We`ll email a link to create a password for your new account.</p>
      <div class="container">
        <div class="row">
          <div class="col-2" />
          <div class="col-sm" />
          <div class="col-3" />
          <div class="col-sm">
            <button className="btn btn-primary" id='btn-next' onClick={this.addTrack.bind(this)}>NEXT STEP ></button>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}


export default connect(
  state => {
    console.log('connect', state.stage)
    return ({
    store: state.stage
})},
  dispatch => ({
    onAddTrack: (email) => {
      dispatch({ type: 'ADD_EMAIL', payload: email });
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' });
    }
  })
)(Email);

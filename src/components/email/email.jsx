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
      <p>Create your VINchain account.</p>
      <p>Easy to use anytime, anywhere, for everyone.</p>
      <p>CREATE ACCOUNT</p>
      <input className="inputEmail" type="text" defaultValue="lalala@mail.ru"/>
      <p>We`ll email a link to create a password for your new account.</p>
      <button className="btn btn-danger" onClick={this.addTrack.bind(this)}>NEXT STEP ></button>
    </React.Fragment>
    )
  }
}


export default connect(
  state => {
    console.log('connect', state)
    return ({
    store: state
})},
  dispatch => ({
    onAddTrack: (email) => {
      dispatch({ type: 'ADD_EMAIL', payload: email });
      dispatch({ type: 'CHANGE_STAGE', payload: 'info' });
    }
  })
)(Email);

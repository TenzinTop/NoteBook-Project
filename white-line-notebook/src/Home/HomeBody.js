import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo1 from '../logo1.jpg'
import { Button } from 'react-bootstrap'
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from  'firebase'
import Card from 'react-bootstrap/Card'
import HomeContent from './HomeContent'


export class HomeBody extends Component {

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  render() {
    return (
      <div>
              <HomeContent/>
              <Card style={{ 
                  width: '18rem',
                marginTop:'10px',
                marginLeft:'220px',
                bg:'' }}>
              <Card.Body>
                <Card.Title style={{
                  paddingLeft:'85px'
                }}>SIGN-IN!</Card.Title>
                <hr></hr>
                <Card.Text>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}>
                </StyledFirebaseAuth>
                </Card.Text>
                
              </Card.Body>
              
            </Card>
              
              <img src={logo1} style= {{
                height: '130px',
                width: '130px',
                marginLeft:'720px',
                marginBottom:'10px'
              }}></img>
              
        
      </div>
    )
  }
}

export default HomeBody

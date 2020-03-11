import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import React, { Component } from 'react'
import FbLogin from './Fblogin';
import Clock from './Clock';
import logo1 from '../logo1.jpg'
import firebase from 'firebase'

class componentName extends Component {
  render() {
    return (
      <div>
            <Navbar bg="light" expand="lg">
            <img src={logo1} style= {{
              height: '85px',
              width: '85px'
            }}></img>
            <Navbar.Brand href="#home" style={{
              paddingLeft:'10px'
            }}>WHITELINE-Notebook</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#/user" style={{
                  height:'20px',
                  paddingBottom: '35px'
                }}><Clock/></Nav.Link>
                <div class="d-flex justify-content-center">
                </div>
                </Nav>
                <h6 style={{
                  paddingTop:'10px'
                }}>WELCOME , </h6>
                <img alt="Profile Picture" src={firebase.auth().currentUser.photoURL} style={{
                  height: '50px',
                  width: '50px',
                  paddingLeft: '5px'
                }}></img>
                <NavDropdown title={firebase.auth().currentUser.displayName}  id="basic-nav-dropdown" style={{
                  paddingRight: '30px'
                }}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" >Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={() => firebase.auth().signOut()}>Log Out</NavDropdown.Item>
                </NavDropdown> 
            </Navbar.Collapse>
            </Navbar>
      
        
      </div>
    )
  }
}

export default componentName


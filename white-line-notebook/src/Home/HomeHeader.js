import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo1 from '../logo1.jpg'
import { Button } from 'react-bootstrap'
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from  'firebase'
import Modal from 'react-bootstrap/Modal'
import React, { useState, Component } from 'react'
import Card from 'react-bootstrap/Card'


class componentName extends Component {
   
    render() {
      return (
        <div>
              <Navbar bg="dark" expand="lg" variant="dark">
              <Navbar.Brand href="#home" style={{
                  paddingLeft: '15px'
              }}><h3>WHITELINE-Notebook</h3></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  

                  </Nav> 
              
              </Navbar.Collapse>
              </Navbar>
               
        </div>
      )
    }
  }
  
  export default componentName
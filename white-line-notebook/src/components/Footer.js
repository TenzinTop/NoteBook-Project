import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import React, { Component } from 'react'
import logo1 from '../logo1.jpg'
import prodlogo1 from '../prodlogo1.png'
import Clock from './Clock';


export class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={{
                position: 'absolute',
                bottom: '0',
                width:'100%',
                height: '60px',
                lineHeight: '60px',
                background:'#f5f5f5',
                paddingLeft:'650px'
            }}>
            <div className="container">
            <span className="text-muted">&copy; {new Date().getFullYear()} Copyright: TenzinTopProduction</span>
            <Clock/>
            </div>
            </footer>
            
        )
    }
}

export default Footer
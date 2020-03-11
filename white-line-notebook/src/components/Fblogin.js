import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';


export default class Fblogin extends Component {
    state = {
        isLoggedIn:false,
        userId:"",
        name:"",
        email:"",
        picture:""

    }
    responseFacebook = response => {
        // console.log(response);
        this.setState({
          isLoggedIn:true,
          userId:response.userId,
          name:response.name,
          email:response.email,
          picture:response.picture.data.url
        })
    }

    
    
    componentClicked = () => console.log("clicked"); 
    render() {
        let fbContent;

        if(this.state.isLoggedIn){
          fbContent = (
              <div>
                <img src={this.state.picture} alt={this.state.name} style={{
                  border:'double',
                  height:'30px',
                  width:'30px',
                  }}/>
                  <br></br>
                  <NavDropdown title={this.state.name} id="basic-nav-dropdown">
                      <NavDropdown.Item href="http://www.facebook.com" target="_blank">Facebook Profile</NavDropdown.Item>
                      <NavDropdown.Item><a href="#" onClick={(e)=>{e.preventDefault(); window.FB.logout()}}>logout</a></NavDropdown.Item>
                  </NavDropdown>
                
              </div>
  
            );
        }else{
            
            fbContent = (<FacebookLogin
                appId="514458539487962"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
              
        }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

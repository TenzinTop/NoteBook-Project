import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class HomeContent extends Component {
    render() {
        return (
            <div>
                <div class="row featurette" style = {{
                    height:'250px'
                }}>
                <div class="col-md-7" style={{
                    paddingTop:'30px',
                    paddingLeft:'35px'
                }}>
                    <h2 class="featurette-heading">Write & Read in an instance <span class="text-muted">It’ll blow your mind.</span></h2><hr></hr>
                    <p class="lead">Access this Notebook students free to use with all the notes and its manager ready to use.<br></br>
                    Access with the <strong>Login below</strong> and ready to rock n roll with your notes. With unlimited space and storage create 
                    a wonderful use with touch of a button.</p><hr></hr>
                    <p>“The mind is not a vessel to be filled, but a fire to be kindled.” <strong>-Plutarch</strong></p><hr></hr>
                </div>
                <div class="col-md-5" style={{
                    paddingTop:'25px'
                }}>
                    <img class="main-image" src="https://s3.us-east-2.amazonaws.com/mortalnote-images/homepage-hero-desktop.png" 
                    style={{
                        height:'400px',
                        width:'600px',
                        border:'shadow-box'
                    }}></img>
                </div>
                </div>
                
            </div>
        )
    }
}

export default HomeContent

              
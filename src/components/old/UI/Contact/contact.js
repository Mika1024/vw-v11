import React, { Component } from 'react';
import img from "./../../IMG/24.png"
import img1 from "./../../IMG/16.png"
import img2 from "./../../IMG/25.png"
export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        
        return (
            <div className="Contact" id="Contact">
                <span className="contact-h">Contact with me</span>
                <span className="contact-f handwrite"> What are you waiting for? </span>
                <div className="resources">
                    <div className="resource"><i class="fa fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/in/mikael-montgomery-56924a228/"> Look to my Linkedin</a></div>
                    <div className="resource"><i class="fa fa-google" aria-hidden="true"></i>wellfine.prog@gmail.com</div>
                  </div>
                <img src={img} className="contact-img" />
                <img src={img2} className="gfr1 sasp" />
                <img src={img1} className="gfr1" />
                
            </div>
        )
    }
}
import React, { Component } from 'react';
import Plan from '../Plan/plan';
import img from './../../IMG/22.png';
import { NavLink, BrowserRouter } from "react-router-dom";

export default class ooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }
    


    render() {

        return (
            <BrowserRouter>
            <div className="Footer">
                <span className="footer-h">Wellfine/</span>
                <div className="resources footer-r">
                    <div className="resource"><i class="fa fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/in/mikael-montgomery-56924a228/"> Linkedin</a></div>
                    <div className="resource"><i class="fa fa-google" aria-hidden="true"></i> wellfine.prog@gmail.com</div>
                </div>
                <img src={img} className="footer-i" />
                <div className="right">
                        <a href="#Home" className="footer-a fa1" end>Home</a>
                        <a href="#About" className="footer-a fa2" end>About me</a>
                        <a href="#Whyme" className="footer-a fa3" end>Why me?</a>
                        <a href="#Plan" className="footer-a fa4" end>Plan</a>
                        <a href="#Contact" className="footer-a fa5" end>Contact</a>
                </div>
                </div>
            </BrowserRouter>
        )
    }
}
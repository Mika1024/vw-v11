import React, { Component } from 'react';
import img from './../../IMG/20.png';
import img2 from './../../IMG/8.png';
import img3 from './../../IMG/21.png';
import $ from 'jquery';
export default class About extends Component{
    constructor(props) {
        super(props)
        this.state = {
            phone: false,
        }
    }
    componentDidMount() {

        

            window.onscroll = function () { fixTop() };
            var header = document.getElementById("sticky");
            function fixTop() {
                if (window.pageYOffset > 9.5 * window.screen.height && window.pageYOffset < 11.8* window.screen.height) {
                    header.classList.add("sticky");
                }
                else {
                    header.classList.remove("sticky");
                }
                if (window.pageYOffset >= 11.8* window.screen.height) {
                    header.classList.add("top13");
                }
                else {
                    header.classList.remove("top13");
                }
        }
        if ("ontouchstart" in document.documentElement) {
            this.setState({ phone: true })
        }
        else {
            this.setState({ phone: false })
        }
        $(function () {
            window.addEventListener("scroll", function (event) {

                var top = this.pageYOffset;

                var layers = $("#sticky");
                var speed, yPos;
                layers.each(function () {
                    if (9.5 * window.screen.height - top + window.screen.width * 1.2 > 0) {
                        var yPos = -(9.5 * window.screen.height - top + window.screen.width * 1.1);
                        if (header.classList.contains("sticky-style")) {
                            header.classList.remove("sticky-style");
                        }
                    }
                    else {
                        var yPos = 0;
                        if (!header.classList.contains("sticky-style")) {
                            header.classList.add("sticky-style");
                        }

                    }
                    $(this).attr('style', 'right:' +  yPos+ 'px');
                });

            });
        }
        );

    }
    render() {
        if (!this.state.phone) {
            return (
                <div>
                    <div className="main-c-about">
                        <div className="content-c-about" id="sticky">
                            <div className="block-lp" id="About">
                                <span className="about-r">About me</span>
                                <img src={img} className="about-img" />
                                <span className="about-r text-bg nf">About me</span>
                                <span className="about-t">Greetings. I'm a WEB developer. I work in a company AVA BITHOLD related to NEAR blockchain, focused on listeners who don't like to do things for nothing. I am excellent in FRONT-END development, more than just a sign with website design.I don't like to talk much about myself. Draw conclusions from what you see.</span>
                                <span className="about-l"> HTML  &nbsp;  &nbsp; CSS  &nbsp; &nbsp; REACT  &nbsp; &nbsp; Java Script  &nbsp; &nbsp; jQuery  &nbsp; &nbsp; Bootstrap</span>

                                <a href="#contact" class="main-btn a-s">Read portfolio</a>
                                <img src={img2} className="about-tex" />
                                <img src={img3} className="about-tex1" />
                                <img src={img3} className="about-tex2" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="phone-a">
                    <span className="about-p-a">About me</span>
                    <div className="color-box">
                    <span className="about-p-t">Greetings. I'm a WEB developer. I work in a company AVA BITHOLD related to NEAR blockchain, focused on listeners who don't like to do things for nothing. I am excellent in FRONT-END development, more than just a sign with website design.I don't like to talk much about myself. Draw conclusions from what you see.</span>
                        <a href="#contact" class="a-p">Read portfolio</a>
                        <span className="about-p-l"> HTML  &nbsp;  &nbsp; CSS  &nbsp; &nbsp; REACT  &nbsp; &nbsp; Java Script  &nbsp; &nbsp; jQuery  &nbsp; &nbsp; Bootstrap</span>
                    </div>
                </div>
                )
        }
    }
}
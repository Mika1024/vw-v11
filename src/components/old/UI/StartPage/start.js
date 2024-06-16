import img from './../../IMG/30.png';
import img1 from './../../IMG/25.png';
import img5 from './../../IMG/13.png';
import img2 from './../../IMG/26.png';
import img3 from './../../IMG/27.png';
import React, { Component } from 'react';


export default class StartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        (function () {
            // Add event listener
            document.addEventListener("mousemove", parallax);
            const elem = document.querySelector("#parallax");
            const elem1 = document.querySelector("#parallax1");
            const elem2 = document.querySelector("#parallax2");
            // Magic happens here
            function parallax(e) {
                let _w = window.innerWidth / 2;
                let _h = window.innerHeight / 2;
                let _mouseX = e.clientX;
                let _mouseY = e.clientY;
                let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
                let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
                let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
                let x = `${_depth3}, ${_depth2}, ${_depth1}`;
                elem.style.backgroundPosition = x;
            }

        })();
    }

    render() {
        return (
            <div className="left" id="Home">
                <span className="start-t1">Wellfine/</span>
                <img src={img2} id="parallax" class="start-if1 wow animate__animated animate__fadeInUp" />
                <img src={img1} id="parallax1" class="start-if wow animate__animated animate__fadeInUp" />
                <img src={img} class="start-i" />
                <span className="start-t1 text-bg st1">Wellfine/</span>
                <img src={img3} id="parallax2" class="srart-i1 wow animate__animated animate__fadeInUp" />
                <span className="start-lf">Web<br /> developer</span>
                <img src={img5} class="srart-i4" />
            </div>
        )
    }
}


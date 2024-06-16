import { connect } from "react-redux";
import React, { useEffect } from "react";
const BuyPage = ({store}) => {
  useEffect(() => {
    const handleScroll = (event) => {
            const l1 = document.querySelector(".l1");
            const l2 = document.querySelector(".l2")
            const l3 = document.querySelector(".l3");
            const l4 = document.querySelector(".l4")

            const x = window.screen.width*0.87 - window.scrollY - 980

            if(window.scrollY > window.screen.width*0.4 && window.scrollY < window.screen.width*2){
              l1.setAttribute("style", "transform: rotateZ(-10deg) translateY(-8vw) translateZ(-1vw) translateX(" + x*1.5 + "px)")
              l2.setAttribute("style", "transform: rotateZ(10deg) translateY(10vw) translateZ(-1vw) translateX(" + x*0.3 + "px)")
              l3.setAttribute("style", "transform: rotateZ(-5deg) translateY(-7vw)translateZ(-1vw) translateX(" + x*0.8 + "px)")
              l4.setAttribute("style", "transform: rotateZ(15deg) translateY(10vw) translateZ(-1vw) translateX(" + x*1.1 + "px)")
            }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return <>
    <div style={{width: "100vw", height: "50vw", overflow: "hidden", marginTop: "5vw", float: "left"}} className="fif">
    <div className="list l1"><span>Order a website!</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span></div>
    <div className="list l2"><span>Order a website!</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span></div>
    <div className="list l3"><span>Order a website!</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span></div>
    <div className="list l4"><span>Order a website!</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span><span>Order a website</span><span>Order a website!</span></div>
        
        <div className="buyList">
            <span className="ads">We both understand why you're here...</span>
            <span className="maybe">I can read your thoughts</span>
            <span className="tho"><span className="kch">"</span>I want to order a modern, adaptive, and definitely a unique website that stands out with its creativity <span className="kch">"</span></span>
            <span className="answer">What are you waiting for?</span>
            <span className="btn-b animate__animated animate__infinite animate__headShake">See all</span>
        </div>
        </div>
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(BuyPage);
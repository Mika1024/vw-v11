import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { connect } from "react-redux";
const Header = ({store, changeMoon, changeSun}) => {
  document.title = "Wellfine.org || Web-developer "
    useEffect(() => {
      const element = document.querySelector(".fix-c")
      const element1 = document.querySelector("#reqt");
      const element2 = document.querySelector("#veqt");
      const navbar3 = document.querySelector(".navbar");
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
    
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.screen.width <= 1300) {
        element.setAttribute("style", "display: none");
       }
    const handleScroll = (event) => {
            const element = document.querySelector("#reqt");
            const element1 = document.querySelector("#veqt");
            const navbar = document.querySelector(".navbar");


            if( window.scrollY+48+71 > window.screen.width*0.76){
                
                element.setAttribute("style", "display: block; width: calc(100vw)")
                
            }
            else{
                element.setAttribute("style", "display: block; width: calc(60vw + 5px)")

            }
            if( window.scrollY+ 48 + 71 > window.screen.width*0.86  && window.scrollY+96 + 71 < window.screen.width*1.22 ){
                element1.setAttribute("style", "display: block; width: calc(15vw + 5px)")
                element.style.width = "calc(15vw + 5px)"
            }else{
                element1.removeAttribute("style")
                element1.setAttribute("style", "display: none")
            }
            if(window.scrollY+96 + 71 > window.screen.width*1.47){
                navbar.setAttribute("style","background-color: #4361ee; position: fixed; width: 100vw; z-index: 1000; transition: 1s ease; margin-top: -100px")
    
            }
            else{
                navbar.setAttribute("style","background-color: #4361ee; position: fixed; width: 100vw; z-index: 1000; transition: 1s ease;")
            }
            
            if(window.scrollY+96 + 71 > window.screen.width*1.42 ){
                element1.setAttribute("style", "display: none")
                element.setAttribute("style", "display: none")
            }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
        return <>
        <nav  class="navbar navbar-dark navbar-expand-md navigation-clean-search" style={{
            backgroundColor: "#4361ee", position: "fixed", width: "100vw", zIndex: "1000"
            }}>
            <div id="reqt"></div>
            <div id="veqt"></div>
            <div class="container"><a class="navbar-brand" href="#">Wellfine/</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse"
                    id="navcol-1">
                    <ul class="nav navbar-nav">
                    <li class="nav-item blog" role="presentation"><Link class="nav-link active" to="/blog/">blog</Link></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#Aboutme">About me</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#Contact">Contact</a></li>
                    </ul>
                    </div></div>
        </nav>
        <div className="fix-c" ><i class="fa fa-sun-o" aria-hidden="true" onClick={changeSun}></i><i onClick={changeMoon} class="fa fa-moon-o"  aria-hidden="true"></i></div>
</>
}

const mapStateToProps = store => {
    return {
      store: store
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      changeMoon: () => dispatch({type: "style/changeMoon"}),
      changeSun: () => dispatch({type: "style/changeSun"})
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
//<li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
//    <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
//</li>
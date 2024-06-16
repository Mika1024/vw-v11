
import { connect } from "react-redux";
import React from "react";
import { useEffect } from "react";
import img from "./2.png"
import img1 from "./3.png"
import img2 from "./5.png"
import img3 from "./6.png"

const Whyme = ({store}) =>  {
    
    useEffect(() => {
        const handleScroll = () => {
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.screen.width <= 1300) {
            
            }
            else{
                const element = document.querySelector(".main-h");
                const element2 = document.querySelector(".second-h");
                const element1 = document.querySelector(".main-w");
                element.setAttribute("style", "transform: translateX(" + (element1.offsetTop - window.scrollY*1)*0.3  + "px)")
                element2.setAttribute("style", "transform: translateX(" + (window.scrollY*1 - element1.offsetTop)*0.3  + "px)")
                
            }
        };
      
        window.addEventListener('scroll', handleScroll);
    
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.screen.width <= 1300) {
            return (
                <div className="whyme-b" id="Whyme">
                    <span className="whyme" style={{color: "#4361ee", fontSize: "19vw", margin: "0"}}>Why me?</span>
                    <div className="w-b ng" style={{marginTop: "10vh"}}>
                        <div className="w-h">Free consultation</div>
                        <div className="w-l">I can help you find the purpose of your website</div>
                    </div>
                    <div className="w-b ng">
                        <div className="w-h">Page-by-page reconciliation</div>
                        <div className="w-l">I am interested in getting a result that would satisfy you 100%, so you will be informed every step of the way</div>
                    </div>
                    <div className="w-b ng">
                        <div className="w-h">Accurately determine the timing and price of the work</div>
                        <div className="w-l"> All moments are negotiated in advance, I will work in strict accordance with the timing and conditions </div>
                    </div>
                    <div className="w-b ng">
                        <div className="w-h">Always in touch</div>
                        <div className="w-l">If i start work with you, i will available all time</div>
                    </div>
                </div>
            )
        }
     else{
        return <>
        <div className="main-w">
            <span className="main-h">Why me?</span>
            <span className="second-h">What can I be interested in?</span>
            <img src={img1} className="img-w-c1"/>
            <div className="preserve">
            <div className="item-w">
                <div className="item-w-n">Free consultation<span className="top-w">use</span></div>
                <div className="item-w-d">I can help you find the purpose of your website<span className="back-w">Beca</span></div>
            </div>
            <div className="item-w-r">
                <div className="item-w-n-r">Page-by-page reconciliation<span className="top-w-r th2">d...</span></div>
                <div className="item-w-d-r">I am interested in getting a result that would satisfy you 100%, so you will be informed every step of the way<span className="back-w-r t2">An</span></div>
            </div>
            <div className="item-w m1">
                <div className="item-w-n">Always in touch<span className="top-w th3">des</span></div>
                <div className="item-w-d">If i start work with you, i will available all time<span className="back-w t3">Besi</span></div>
            </div>
            <div className="item-w-r m2">
                <div className="item-w-n-r">Pinpoint the details<span className="top-w th4">o...</span></div>
                <div className="item-w-d-r">All moments are negotiated in advance, I will work in strict accordance with the timing and conditions<span className="back-w-r t4">Als</span></div>
            </div>
        </div>
        <img src={img} className="img-w-c"/>
        </div>
        
    </>
     }
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(Whyme);
  /*
1. Человек может привезти 2 клиентов, деньги за третьего он забирает себе
2. Человек получает по 10% процентов с каждого приведенного им клиента
*/
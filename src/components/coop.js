
import { connect } from "react-redux";
import React from "react";
import { useEffect } from "react";
import img from "./2.png"
import img1 from "./3.png"
import img2 from "./5.png"
import img3 from "./6.png"

const Coop = ({store}) =>  {
    
  useEffect(() => {
    const element = document.querySelector(".con-w");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.screen.width <= 1300) {
      element.setAttribute("style", "transform: translateX(" +0 + "px)")
    
     }else{
    element.setAttribute("style", "transform: translateX(" + (element.offsetTop - window.scrollY)*window.screen.width/window.screen.height  + "px)")
     }
    const handleScroll = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.screen.width <= 1300) {
        element.setAttribute("style", "transform: translateX(" +0 + "px)")
      
       }else{
      element.setAttribute("style", "transform: translateX(" + (element.offsetTop - window.scrollY)*window.screen.width/window.screen.height  + "px)")
       }
    };
  
    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

        return <>
            <div className="con-w">
              <div className="d1">
                <img className="img-ad-1" src={img2} />
                <div className="ads-b"></div>
                <span className="ads-t">Partnership</span>
                <span className="ads-h">How can you cooperate with me?</span>
                <span className="ads-c">Choose what is closer to your heart</span>
              </div>
              <div className="d2">
                <img className="img-ad-2" src={img} />
                <div className="ads-b-2"></div>
                <span className="ads-t-2">Sales!</span>
                <div className="st-ads">
                  <span>1. Contact me</span>
                  <span>2. Find two clients, you get the money for the third site completely</span>
                  <span className="ads-tet">But keep in mind, in this case, <br />regardless of whether I get the money or not, I am...</span>
                  <span>1. I'm not responsible for the time</span>
                  <span>2. You undertake the entire collection of information</span>
                </div>
              </div>
              <div className="d3">
              <img className="img-ad-3" src={img1} />
                <div className="ads-b-2"></div>
                <span className="ads-t-2" style={{marginLeft: "-35vw"}}>Some fee</span>
                <div className="st-ads" style={{marginRight: "35vw"}}>
                  <span>1. Contact me</span>
                  <span>2. Find a client, get 10% of the revenue for the site</span>
                  <span className="ads-tet">But keep in mind, in this case, <br />regardless of whether I get the money or not, I am...</span>
                  <span>1. I'm responsible for the time</span>
                  <span>2. I'm undertake the entire collection of information</span>
                  <span>3. You make a commitment to the client's contact with me</span>
                </div>
              </div>
</div>
        </>
    
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(Coop);
  /*
1. Человек может привезти 2 клиентов, деньги за третьего он забирает себе
2. Человек получает по 10% процентов с каждого приведенного им клиента
*/
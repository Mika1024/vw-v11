import * as oldStore from "../../../BLL/store";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { useState } from "react";
import { store } from "../store";
import { addPostNext } from "../posts";
import { Link } from "react-router-dom";
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"
import img7 from "./img/7.jpg"
import img8 from "./img/8.jpg"
import img9 from "./img/9.jpg"
import img10 from "./img/10.jpg"
import img11 from "./img/11.jpg"
import img12 from "./img/12.jpg"
import img13 from "./img/13.jpg"
import img14 from "./img/14.jpg"
import img15 from "./img/15.jpg"
import img16 from "./img/16.jpg"
import img17 from "./img/17.jpg"
import img18 from "./img/18.jpg"
import img19 from "./img/19.jpg"
import img20 from "./img/20.jpg"
import img21 from "./img/21.jpg"
import img22 from "./img/22.jpg"
import img23 from "./img/23.jpg"
import img24 from "./img/24.jpg"
import img25 from "./img/25.jpg"
import img26 from "./img/26.jpg"
import img27 from "./img/27.jpg"
import img28 from "./img/28.jpg"
import img29 from "./img/29.jpg"
import img30 from "./img/30.jpg"
import img31 from "./img/31.jpg"
import img32 from "./img/32.jpg"
import img33 from "./img/33.jpg"
import img34 from "./img/34.jpg"
import img35 from "./img/35.jpg"
import img36 from "./img/36.jpg"

const f = (storer) =>{
    const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,img23,img24,img25,img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36]
    let fi = []
    let num = 0
    for(let key in storer){
      num++
    }
    for(let i = 0; i < num; i++){
        var g2 = new Date(storer[i].createdAt);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        fi[i] = <Link to={'/blog/post/' + storer[i]._id}><div className="blog-posts"><div className="avatars"><img className="img-posts-ava" src={img[Math.floor(Math.random() * 36)]}/></div><span className="name-posts">{storer[i].name}</span><span className="countSees"><i class="fa-solid fa-eye"> </i> {storer[i].countSee}</span><span className="time-posts">{g2.getDate() + " " + months[g2.getMonth()] + " " + g2.getFullYear()} <br/>{ " " + g2.getMinutes() + ":" + g2.getSeconds()}</span></div></Link>
    }
    return fi
}
const MainPage = ({storege, disp}) =>  {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
    let louding = false;
    let first = true
    let lastWidth = document.body.scrollHeight-window.screen.height;
    useEffect(() => {
      oldStore.store.dispatch({type: "style/changeMoon"})
      const handleScroll = (event) => {
        if(store.getState().postsRes.search){
          lastWidth = 0
          louding = false;
          first = true
        }
        if(first || (!louding && lastWidth < document.body.scrollHeight-window.screen.height)){
          if(!store.getState().postsRes.search){
          first = false
            louding = true
            lastWidth = document.body.scrollHeight-window.screen.height
            disp()
        }
      }
          setTimeout(() => louding = false, 3000)
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

        return <>
            <div className="posts">
                {(storege.postsRes.posts.length != 0) ? f(storege.postsRes.posts): <div className="pre-pre-book"><div className="pre-book"><div class="book">
	<div class="book__pg-shadow"></div>
	<div class="book__pg"></div>
	<div class="book__pg book__pg--2"></div>
	<div class="book__pg book__pg--3"></div>
	<div class="book__pg book__pg--4"></div>
	<div class="book__pg book__pg--5"></div>
</div><span>Loading...</span></div></div>}
                {(storege.postsRes.search && storege.postsRes.posts.length == 0)? <div className="Error-post"><span className="er404">404!</span><br></br> <span className="ops">Oops, there's nothing here</span></div>: ""}
            </div>
        </>
   
}
const mapStateToProps = store => {
    return {
      storege: store
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
        disp: () => {let link = store.getState().postsRes.list; if(!store.getState().postsRes.endl)dispatch(addPostNext(link))}
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
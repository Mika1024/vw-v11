import img1 from "./blog/components/img/1.jpg"
import img2 from "./blog/components/img/2.jpg"
import img3 from "./blog/components/img/3.jpg"
import img4 from "./blog/components/img/4.jpg"
import img5 from "./blog/components/img/5.jpg"
import img6 from "./blog/components/img/6.jpg"
import img7 from "./blog/components/img/7.jpg"
import img8 from "./blog/components/img/8.jpg"
import img9 from "./blog/components/img/9.jpg"
import img10 from "./blog/components/img/10.jpg"
import img11 from "./blog/components/img/11.jpg"
import img12 from "./blog/components/img/12.jpg"
import img13 from "./blog/components/img/13.jpg"
import img14 from "./blog/components/img/14.jpg"
import img15 from "./blog/components/img/15.jpg"
import img16 from "./blog/components/img/16.jpg"
import img17 from "./blog/components/img/17.jpg"
import img18 from "./blog/components/img/18.jpg"
import img19 from "./blog/components/img/19.jpg"
import img20 from "./blog/components/img/20.jpg"
import img21 from "./blog/components/img/21.jpg"
import img22 from "./blog/components/img/22.jpg"
import img23 from "./blog/components/img/23.jpg"
import img24 from "./blog/components/img/24.jpg"
import img25 from "./blog/components/img/25.jpg"
import img26 from "./blog/components/img/26.jpg"
import img27 from "./blog/components/img/27.jpg"
import img28 from "./blog/components/img/28.jpg"
import img29 from "./blog/components/img/29.jpg"
import img30 from "./blog/components/img/30.jpg"
import img31 from "./blog/components/img/31.jpg"
import img32 from "./blog/components/img/32.jpg"
import img33 from "./blog/components/img/33.jpg"
import img34 from "./blog/components/img/34.jpg"
import img35 from "./blog/components/img/35.jpg"
import img36 from "./blog/components/img/36.jpg"
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

const f = (store) =>{
    const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,img23,img24,img25,img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36]
   
    let fi = []
    for(let i = 0; i < 3; i++){

        fi[i] = <Link to={'/blog/post/' + store[i]._id}><div className="blog-post"><div className="avatars"><img className="img-posts-ava" src={img[Math.floor(Math.random() * 36)]}/></div><span className="name-post">{store[i].name}</span></div></Link>
    }
    return fi
}

const MainPage = ({store}) =>  {
        return <>
            <div className="postup">
                <span className="fr-post">A lot of different information...</span>
                {(store.postsReducer.load)? f(store.postsReducer.posts) : <div className="pre-postup"><div className="pre-book"><div class="book">
	<div class="book__pg-shadow"></div>
	<div class="book__pg"></div>
	<div class="book__pg book__pg--2"></div>
	<div class="book__pg book__pg--3"></div>
	<div class="book__pg book__pg--4"></div>
	<div class="book__pg book__pg--5"></div>
</div><span>Loading...</span></div></div>}
                <Link to="/blog/" className="link-postup">See more <i class="fa-solid fa-arrow-right"></i></Link>
                <span className="br-post">... you can find in my blog</span>
            </div>
        </>
    
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(MainPage);
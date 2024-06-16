import { connect } from "react-redux";
import { Link, Navigate, Redirect, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addCreate, addPostiafterSerach } from "../posts";
import axios from "axios";
import { store } from "../store";
const Header = () => {
    const [text, setTextRe] = useState(store.getState().postsRes.text)
    const reSet = (e) => {
        if(text.replace(/\s/g, '') != ""){
        store.dispatch(addCreate(text))
        }else{
        store.dispatch(addPostiafterSerach(false))
        }
    }
    const setText = (texti) =>{
        setTextRe(texti)
    }
    return <>
        <header>
              
            <input className="search__input" type="text" onKeyPress={(e) => { e.key === 'Enter' && reSet() }} onChange={(e) => setText(e.target.value)} value={text} placeholder="" autofocus /> 
             
             <Link className="link-nav l22" to="/"><i class="fa-regular fa-house" style={{color: "#ffffff"}}></i></Link>
        </header>
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(Header);
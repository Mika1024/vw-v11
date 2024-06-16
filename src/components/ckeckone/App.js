import { store } from "../../BLL/store"
import axios from "axios"
import React from "react"
import Header from "./../blog/components/header"
import { Link } from "react-router-dom"
import Footer from "./../footer"



class CheckOne extends React.Component {
 name = ""
 def = async () => {
    const id = window.location.pathname.replace(/\/blog/s, "").slice(6)
    const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/id/' + id)
    this.name = response.data.name
    return response
}
async componentDidMount(){
    let response = await this.def()
    if(document.getElementById("rootir") != null){
        let root = document.getElementById("rootir")
        root.innerHTML += response.data.text
    }
    if(document.getElementById("name") != null){
        let named = document.getElementById("name")
        named.innerHTML += response.data.name
    }
    if(document.getElementById("see") != null){
        let see = document.getElementById("see")
        see.innerHTML += response.data.countSee
    }
    if(document.getElementById("data") != null){
        const data = document.getElementById("data")
        var g2 = new Date(response.data.createdAt);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var datas = g2.getDate() + " " + months[g2.getMonth()] + " " + g2.getFullYear() + " " + g2.getMinutes() + ":" + g2.getSeconds()
        data.innerHTML += datas
    }
    document.title = "Wellfine.org ||  " + response.data.name
}

render(){      
    document.body.style.backgroundColor = "#0c0c0c" 
return(
    <div className="post-items">
    <Link to="/blog/" className="back-s">Back</Link>
    <Link to="/blog/">
    <span className="big-well">Wellfine/</span>
    <span className="small-well">Blog</span>
    </Link>
    <span id="name"></span><br/>
    <i class="fa-solid fa-eye"></i> <span id="see"></span> 
    <span id="data">   </span>
    <div id="rootir"></div>
    <Footer />
    </div>

)
}
}
  export default CheckOne;
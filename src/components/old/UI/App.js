import './App.css';
import img from './../IMG/30.png';
import img1 from './../IMG/25.png';
import img5 from './../IMG/13.png';
import img2 from './../IMG/26.png';
import img3 from './../IMG/27.png';
import StartPage from "./StartPage/start.js";
import Awards from "./Awards/award.js";
import About from "./About/about.js";
import Price from "./Price/price.js";
import Plan from "./Plan/plan.js";
import Contact from "./Contact/contact.js";
import FAQ from "./FAQ/faq.js";
import Footer from "./Footer/footer.js";
import $ from 'jquery';

function App(props) { 
    document.title = "Wellfine.org || Old website || Web-developer"
    document.body.setAttribute("style", " ")
    return (
        <div className="App">
            

            <StartPage state={props.state} store={props.store} />
            <Awards />
            <About />
            <Price />
            <Plan />
            <Contact />

            <Footer />
        </div>
    );
    }


export default App;

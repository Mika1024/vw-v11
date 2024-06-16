
import { connect } from "react-redux";
import img from "./4.png"
const About = ({store}) => {
    return <>
      <div className="about" id="Aboutme">
      <br /> <span className="text-a-s"> <br />me </span>  <span className="text-a"> About <br /></span><br />
      <img src={img} className="img-a" />
      <span className="text-ab">Greetings.I am Mikael, fullstack web developer. I'm writing code for the frontend and backend that breaks all boundaries and stereotypes. I'm not afraid to experiment with new technologies. I create websites that stand out for their design. I'm not looking for compromises and I don't adjust to trends. I do what I like. I am what I do, and that's my style.</span></div>
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(About);
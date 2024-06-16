import img from './8.png'
import { connect } from "react-redux";
const Contact = ({store}) => {
    return <>
        <div className="contact" id="Contact">
            <img src={img} className='c-b-i' />
            <span>Contact me</span>
            <a href="https://www.instagram.com/wellfine.dev/"><i class="fa-brands fa-instagram"></i></a>
            <a href='https://www.linkedin.com/in/mikael-montgomery-56924a228/'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href='https://t.me/HardToImbue '><i class="fa fa-telegram" aria-hidden="true"></i></a>
        </div>
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(Contact);
  /* https://t.me/HardToImbue 
     https://www.instagram.com/wellfine.dev/
     https://www.linkedin.com/in/mikael-montgomery-56924a228/ */

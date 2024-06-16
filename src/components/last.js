import { Link } from "react-router-dom";
import { connect } from "react-redux";
import img from "./7.png"
const LastSite = ({store}) => {
    return <>
        <div className="Entry">
            <div className="name-e">
             <span>Maybe you're interested in a past version of the site?</span>
            </div>
            <Link to="/old" relative="path">
            <div className="block-e">
                <span>Click on this!</span>
                <img src={img} />
            </div>
            </Link>
        </div>
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(LastSite);
import Header from "./header";
import Footer from "./footer";
import FirstPage from "./first";
import BuyPage from "./buy";
import AboutMe from "./about";
import PostPage from "./postup";
import Whyme from "./why";
import LastSite from "./last";
import Coop from "./coop";
import Contact from "./contact";
import Plan from "./plan";
import { connect } from "react-redux";
import '../index.css';
const MainPage = ({store}) => {
    return <>
            <Header/>
            <FirstPage />
            <BuyPage />
            <PostPage />
            <AboutMe />
            <Whyme />
            <Coop />
            <LastSite />
            <Plan/>
            <Contact />
            <Footer />
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(MainPage);
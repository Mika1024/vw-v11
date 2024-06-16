import { connect } from "react-redux";
const First = ({store}) => {
  if((store.postsRes.search && store.postsRes.posts.length == 0)){
    return " "
  } 
    return <>
    <span className="big-well">Wellfine/</span>
    <span className="small-well">Blog</span>
    </>
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(First);
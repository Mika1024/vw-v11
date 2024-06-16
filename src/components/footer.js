import {store} from "../BLL/store";

const Footer = () => {
    if((store.getState().postsRes.search && store.getState().postsRes.posts.length == 0)){
        return " "
      } 
      return <>
    <footer>
            <span className="brand-l">Wellfine/</span>
        </footer>
        </>
}

  export default Footer;

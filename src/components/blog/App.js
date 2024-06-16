import './index.css'
import {Provider} from "react-redux";
import First from "./components/first";
import Header from "./components/header";
import Footer from "../footer";
import MainPage from "./components/post"
import { store } from "./store";
import { addPosti } from "./posts";


store.dispatch(addPosti(store.getState().postsRes.list));


const MainBlog = () => {
    document.body.style.backgroundColor = "#161616"
    document.title = "Wellfine.org || Blog "
    return <>
    <Provider store={store} >
        <Header />
        <First />
        <MainPage />   
        <Footer /> 

    </Provider>
    </>
}
store.subscribe(MainBlog)
  export default MainBlog;
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login n create/App'
import { connect} from 'react-redux';
import MainPage from './components/main'
import StartOld from './components/old'
import MainBlog from './components/blog/App'
import CheckOne from './components/ckeckone/App';

class App extends React.Component {
  componentDidMount(){
    
    document.body.style.backgroundColor = "#121212";
    document.body.setAttribute("style", "background-image: none !important");
 }
  render(){
    
  return (
    
      <div className="App"> 
       <meta id="meta-description" name="description" content=" Greetings.I am Mikael, fullstack web developer. I'm writing code for the frontend and backend that breaks all boundaries and stereotypes. I'm not afraid to experiment with new technologies. I create websites that stand out for their design. I'm not looking for compromises and I don't adjust to trends. I do what I like. I am what I do, and that's my style." />
       <meta id="og-title" property="og:title" content="Wellfine.org || Web-developer" />
           
      <div className={this.props.store.styleReducer.color} id="color">
      <Routes>
        <Route path='/old/' element = {<StartOld />}/>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/blog/" element={<MainBlog />}/>
        <Route path="/blog/search" element={<MainBlog />}/>
        <Route path="/auth/:code" element={<Login />}/>
        <Route path="/blog/post/:id" element={<CheckOne />}/>
      </Routes>
    </div>
    </div>
  );
  }
}

const mapStateToProps = store => {
  return {
    store: store
  };
};

export default connect(mapStateToProps)(App);
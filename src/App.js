import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import  Intro from  "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Works from "./Components/Works/Works";
import Footer from "./Components/Footer/Footer";
import {themeContext} from "./Context";
import {useContext} from "react";

function App() {
  const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? 'black' : '',
        color : darkMode? 'white' : ''
      }}
      
      >
      <Navbar/> 
      <Intro/>
      <Services/>
      <Experience/>
      <Contact/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;

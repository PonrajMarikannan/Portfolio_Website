import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import {useContext} from "react";
import {Link} from 'react-scroll'


const Intro = () => {
 
    const transition = {duration : 2, type: 'spring'}   

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   return(
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style = {{color: darkMode? 'white' : ''}}>Hey! I am</span>
                <span>Ponraj</span>
                <span>Frontend Developer with high level of experience in web designing and development producting the Quality work</span>
            </div>
        <button className='button i-button'>
            <Link to='Contact' smooth={true} spy={true}>Hire me</Link>
        </button>
        <div className='i-icons'>
            
            <a href="https://github.com/PonrajMarikannan">
                  <img src={Github} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/m-ponraj/">
               <img src={LinkedIn} alt=""/>
            </a>
           <a href="https://www.instagram.com/mr_comrade_offl/">
            <img src={Instagram} alt=""/>
           </a>
           
        </div>

        </div>
        <div className='i-right'>
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={boy} alt=""/>
            <img src={glassesimoji} alt=""/>
            <div style={{top:'-4%', left: '68%'}} className='floating-div'>
               <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18rem', left: '1rem'}} className='floating-div'>
               <FloatingDiv image={thumbup} txt1='Video Editing' txt2='Prize'/>
            </div>

            <div className='blur' style={{ background:"rgb(238 210 255)" }}>
            </div>
            <div className='blur' style={{background:'#c1f5ff',top:'17rem',width:'21rem', height:'11rem',left:'-9'}}>

            </div>

           
        </div>
    </div>
   )
}


export default Intro
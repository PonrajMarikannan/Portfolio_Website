import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import {useContext} from "react";

const Services = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className='services' id="Services">

        <div className='awesome'>
        <span style={{color: darkMode? 'white' :''}}>Technical</span>
        <span>Skills</span>
        <span>
        Technical skills are the specialized knowledge and expertise<br></br>required to perform specific tasks
        and use specific tools <br></br>and programs in real world situations.
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: "#ABF1FF94"}}></div>
        </div>
        <div className='cards'>
            
            <div style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Tools'}
                detail = {"Netbeans,Visual studio,Xampp,Ms-word"}
                />
            </div>

            <div style={{top:'12rem', left:"-4rem"}}>
                <Card
                emoji = {Glasses}
                heading = {'Web Technology'}
                detail = {"Html,CSS,JavaScript, React,Java,SQL,Php"}
                />
            </div>

            <div style={{top:'19rem', left:"12rem"}}>
                <Card
                emoji = {Humble}
                heading = {'Language'}
                detail = {"C, C++, Java"}
                />
            </div>

            <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>

        </div>
    </div>
  )
}

export default Services
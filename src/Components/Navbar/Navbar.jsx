import React from 'react'
import './Navbar.css'
import Toogle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className='n-name'>Ponraj</div>
                <Toogle/>
            </div>
            <div className="n-right">
            <div className='n-list'>
                <ul style={{listStyleType:'none'}}>
                    <li>
                        <Link to='Navbar' smooth={true} spy={true} activeClass="activeclass">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to='Services' smooth={true} spy={true}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='Experience' smooth={true} spy={true}>
                            Academics
                        </Link>
                    </li>
                    <li>
                        <Link to='Footer' smooth={true} spy={true}>
                            Links
                        </Link>
                    </li>
                </ul>
            </div>

            <button className='button'>
                   <Link to='Contact' smooth={true} spy={true}>
                        Contact us
                        </Link>
            </button>
        </div>
        </div>
    )
}

export default Navbar
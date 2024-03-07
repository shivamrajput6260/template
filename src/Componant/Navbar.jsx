import React from 'react'
import { Link } from "react-scroll";
import "./Navbar.css";


const Navbar = () => {

    return (
        <>
            <header className='main-navbar'>
                <div className='main-container'>
                    <div className='gour'>
                        <Link
                            to="home"  // Check that "home" matches the ID of the About section
                            smooth={true}
                            duration={500} >Gourmet au catering</Link>
                    </div>
                    <div className='ul-class'>
                        <ul >
                            <li className='link-item' >
                                <Link
                                    to="about"  // Check that "about" matches the ID of the About section
                                    smooth={true}
                                    duration={500}  >About</Link>
                            </li>
                            <li className='link-item' >
                                <Link
                                    to="menu"  // Check that "menu" matches the ID of the Menu section
                                    smooth={true}
                                    duration={500} >Menu</Link>
                            </li>
                            <li className='link-item'>
                                <Link
                                    to="contact"  // Check that "contact" matches the ID of the Contact section
                                    smooth={true}
                                    duration={500} >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </header>
        </>
    )
}

export default Navbar

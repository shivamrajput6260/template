import React from 'react'
import "./About.css";

const About = () => {
  return (
    <>
      <div className='about-section' id='about'>
        <div className='main-about'>
          <div className='about-right'>
            <img className='about-img' src='	https://www.w3schools.com/w3images/tablesetting2.jpg' alt='food-img' />
          </div>
          <div className='about-left'>
            {/* <div className='about-contant'> */}
            <h1>
              About Catering
            </h1>
            <p className='trad'>Tradition since 1889</p>
            <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span>seasonal </span>ingredients.</p>

            <p className='para2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* </div> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default About
import React from 'react'
import Profile from '../../assets/pallav.jpg'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import './home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"> 
          <span> Pallav Regmi </span> <br/>

          <TypeAnimation
          sequence={[
            'Collaborative', 2000,
            'Solution Oriented',2000,
            'Resolute', 2000
          ]} 
          speed={50}
          className='titles'
          wrapper='span'
          repeat={Infinity}
          />
          
          {/* FullStack Developer */}
          </h1>

          <p className="home__description">
            I am a FullStack Engineer with 6+ years of programming experience. 
            I earned my Computer Science degree from UW-Madison. 
            I'm passionate about bridging accessibility gaps to self-empowerment
             through tech and art  🎨 👨🏾‍💻  
         </p>

        <div className='home__buttons'>
          <Link to='/about' className='button' id='more-about-me'>
            More About Me {' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>

          <Link to='/portfolio' className='button' id='portfolio'
         >
            My Portfolio {' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
          </div>

        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home

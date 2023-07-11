import './index.scss'
import Loader from 'react-loaders'
import Brand from '../Home/Brand'
import Logo from './Logo'
import TimeLine from './TimeLine'
import { useEffect, useState } from 'react'
import Typed from 'react-typed'


const About = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const myIntro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor ligula, 
  egestas quis tellus sed, scelerisque porta justo. Proin condimentum nulla vel augue fringilla, vel 
  varius justo viverra. Etiam sodales dolor non nisl eleifend iaculis. `
  
  
  const handleIntroComplete = () => {
    setIsFinished(true);
  }

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 2000); // Set the desired delay in milliseconds
  
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
      const showDelayed = setTimeout(() => {
        const aboutIntroduction = document.querySelector('.about-introduction');
        aboutIntroduction.classList.add('show-delayed');
      }, 2000);
  
      return () => {
        clearTimeout(showDelayed);
      };
    }, []);
    return(
        <div>
            <Loader type="pacman" />
            <Brand />
            <p className='about-introduction'>
              {showIntro && (
                <Typed
                  strings={[ myIntro ]}
                  typeSpeed={40} // Set the typing speed in milliseconds
                  onComplete={handleIntroComplete}
                />
              )}
            </p>
            
            
            <div className='about'>
            <div className='about-breakline'/>
                <TimeLine />
            </div>
            <Logo />
        </div>
        
       
    )
}



export default About
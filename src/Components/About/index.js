import './index.scss'
import Loader from 'react-loaders'
import Brand from '../Home/Brand'
import Logo from './Logo'
import TimeLine from './TimeLine'
import { useEffect, useState, useRef } from 'react'
import Typed from 'react-typed'
import { motion, useAnimation, useInView } from 'framer-motion';


const About = () => {
  const [showIntro, setShowIntro] = useState(false);
  
  const myIntro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor ligula, 
  egestas quis tellus sed, scelerisque porta justo. Proin condimentum nulla vel augue fringilla, vel 
  varius justo viverra. Etiam sodales dolor non nisl eleifend iaculis. `
  
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

    const motionRef = useRef(null);
    const isInView = useInView(motionRef);

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    
    useEffect(() => {
      console.log(isInView)
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])

    return(
        <div>
            <Loader type="pacman" />
            <Brand />
            
            <div className='about'>
              <div className='about-intro-section'>
                <div>
                  <Logo />
                </div>
                <div className='about-introduction'>
                  {showIntro && (
                    <Typed
                      strings={[ myIntro ]}
                      typeSpeed={40}/>
                  )}                
                </div>
              </div>
              
              <div className='about-breakline'/>
              <div >
                   <TimeLine />
              </div>
              
            </div>  
            <div className='about-footer'></div>                     
        </div>
        
       
    )
}



export default About
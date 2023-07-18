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
  
  const myIntro = `Hello there! Welcome to my website. My name is Yuteng Wu and I am a recent computer science graduate from UC Riverside. <br><br> 
    I am current seeking a full-time software engineer role. I enjoy both front-end and back-end work.
    I am proficient in C/C++, Python, Javascript and other various tools and frameworks. <br><br>
    I was born in China and immigrated to the United States when I was 16 year old without knowing how to speak any English.
    One of my greatest accomplishments being able to speak English fluently today. <br><br>
    I was also a professional badminton player, representing the U.S. in multiple international competitions. <br><br>
    Last but certainly not least, I love video games and exercising.
    `
  
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
            {/* <Brand /> */}

            
            <div className='about'>
              <div className='about-intro-section'>
                <div className='about-logo'>
                  <Logo />
                </div>
                <div className='about-introduction'>
                  {showIntro && (
                    <Typed
                      strings={[ myIntro ]}
                      typeSpeed={10}
                      />
                  )}                
                </div>
              </div>
              
              <div className='about-breakline'/>
              <div className='timeline-box'>
                <h1 className='about-time-line'>TIMELINE</h1>
              </div>
              <div >
                   <TimeLine />
              </div>
              
            </div>  
            <div className='about-footer'></div>                     
        </div>
        
       
    )
}



export default About
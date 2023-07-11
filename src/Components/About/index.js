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
  
  const myIntro = `My name is Yuteng Wu and I am a recent computer science graduate from UC riverside.
      I have had a 10 months long internship with Seagate Technology for software engineer. 
      I am proficient in C/C++, Java, Python and Javascript. I was born in China, immigrated to the US when I was 16 without knowing how to speak English. My entire life in china was dedicated in sports. 
      I started train badminton when I was 7 and later started full time professional training. 
      I skipped school from 6th grade to 10th grade just to train 6 hours per day. However, 
      I was able to pivot from a full time athlete to a full time student in short time, catch up all the school material 
      I have left behind and eventual graduated with a cs degree, I think I am a person who has strong adaptability in different 
      environment and a fast learner. Asied from that, I have represented the U.S. for multiple internation badminton tournaments 
      and had won the PanAm championship.`
  
  
  const handleIntroComplete = () => {
    setIsFinished(true);
  }

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 5000); // Set the desired delay in milliseconds
  
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
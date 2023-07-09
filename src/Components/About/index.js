import './index.scss'
import Loader from 'react-loaders'
import Brand from '../Home/Brand'
import Logo from './Logo'


const About = () => {
    return(
        <>
            <Loader type="pacman" />
            <Brand />
            <Logo />
            <div className='about'>
                <a href='https://www.youtube.com/watch?v=v_ru-UPLNN4' target="_blank" rel="noreferrer">
                    <div className='about-america'></div>
                </a>
            </div>
        </>
        
       
    )
}



export default About
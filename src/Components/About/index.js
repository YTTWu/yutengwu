import './index.scss'
import Loader from 'react-loaders'
import Brand from '../Home/Brand'
import America from '../../assets/images/america.jpg'
const About = () => {
    return(
        <>
            <Loader type="pacman" />
            <Brand />
            <div className='about'>
                <a href='https://www.youtube.com/watch?v=v_ru-UPLNN4' target="_blank" rel="america, f-yeah">
                    <img className='about-america'src={America} ></img>
                </a>
            </div>
           
        </>
        
       
    )
}



export default About
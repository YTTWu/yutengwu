import './index.scss'
import Loader from 'react-loaders'
import Brand from '../Home/Brand'

const About = () => {
    return(
        <>
            <Loader type="pacman" />
            <Brand />
            <div className='About'>
                <a href='https://www.youtube.com/watch?v=v_ru-UPLNN4' target="_blank" rel="america, f-yeah">
                    <img src="https://m.media-amazon.com/images/I/71raQXOaZkL._AC_SL1300_.jpg" ></img>
                </a>
            </div>
           
        </>
        
       
    )
}



export default About
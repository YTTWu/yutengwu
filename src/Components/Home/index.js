import {useState, useEffect} from "react";
import LogoTitle from '../../assets/images/Y.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Brand from './Brand'
import Me from './Me'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'u', 't', 'e', 'n', 'g']
    const jobArray = ['F','u','l','l','-', 's','t','a','c','k', ' ', 'd','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <Loader type="pacman" />
            <Brand />
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i, </span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                         
                        <img src={LogoTitle} alt="developer"/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}

                        />
                        
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={20}

                        />
                    </h1>
                    <h2> JavaScript / C++ / Python / HTML/CSS / React.js / Node.js </h2>
                    <Link to="/contact" className="flat-button">Contact me</Link>
                </div>
                <div>
                    <Me />
                </div>
            </div>
            
        </>
        
    )
}

export default Home
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import LogoY from '../../assets/images/Y.png'
import { useEffect, useState } from 'react'



const Sidebar = () => {

    const [smallScreen, setSmallScreen] = useState(false);

    const [isOpne, setIsOpen] = useState(false);

    const [menuPos, setMenuPos] = useState('translateX(-100%)')

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (smallScreen <= 600) {
                setSmallScreen(true)
            }
        })
        
    }, [window.innerWidth])

    useEffect(() => {
        if (menuPos === 'translateX(-100%)') {
            setMenuPos('translateX(0%)')
        }
        else {
            setMenuPos('translateX(-100%)')
        }
    }, [isOpne])


    function handleClick() {
        setIsOpen(prevValue => (!prevValue));

    }

    return (
        <div>
            <button onClick={handleClick} aria-controls="primary-navigation" className='nav-btn' aria-expanded="false">
                <span className='sr-only'>menu</span>
            </button>
            <div className={`nav-bar ${smallScreen ? 'primary-navigation' : ''}`} style={{transform: menuPos}} >            
                <Link className='logo' to='/'>
                    <img src={LogoY} alt="logo" />
                    <h1>Yuteng Wu</h1>
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="avtive" to="/">
                        <FontAwesomeIcon icon={ faHome } />
                    </NavLink>
                    <NavLink exact="true" activeclassname="avtive" className="about-link" to="/about">
                        <FontAwesomeIcon icon={ faUser } />
                    </NavLink>
                    <NavLink exact="true" activeclassname="avtive" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </NavLink>
                </nav>
                <ul className='nav-linkedin'>
                    <li>
                        <a  
                            
                            href="https://www.linkedin.com/in/yutengwu/"
                            rel="noreferrer"
                            target='_blank'
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a  
                            href="https://github.com/YTTWu"
                            rel="noreferrer"
                            target='_blank'                    
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
)}


export default Sidebar
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import LogoY from '../../assets/images/Y.png'
import { useEffect, useState } from 'react'



const Sidebar = (props) => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsSmallScreen(prevValue => (!prevValue))
        }
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },)

    return (
        <div>
            <button onClick={props.handleClick} 
                className={`nav-btn ${props.isOpen ? 'nav-btn-img-close' : 'nav-btn-img-open'}`}
                >
                <span className='sr-only'>menu</span>
            </button>
            <div className={` ${isSmallScreen ? 'primary-navigation' : 'nav-bar'}`} style={{transform: props.menuPos}} >            
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
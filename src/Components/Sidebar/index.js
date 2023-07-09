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
            {/* <button onClick={props.handleClick} 
                className={`nav-btn ${props.isOpen ? 'nav-btn-img-close' : 'nav-btn-img-open'}`}
                >
                <span className='sr-only'>menu</span>
            </button> */}
            <button
      className={`menu  ${props.isOpen ? 'opened' : ''} `}
      onClick={props.handleClick}
      aria-label="Main Menu"
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          className="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="line line2" d="M 20,50 H 80" />
        <path
          className="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
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
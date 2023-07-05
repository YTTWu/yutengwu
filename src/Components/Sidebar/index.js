import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import LogoY from '../../assets/images/Y.png'



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoY} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
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
                    rel="linkedin"
                    target='_blank'
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a  
                    href="https://github.com/YTTWu"
                    rel="github"
                    target='_blank'
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar
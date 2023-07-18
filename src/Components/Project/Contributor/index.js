import './index.scss'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contributor = (props) => {
    return (
            <div className='each-contributor'>
                <FontAwesomeIcon className='contributor-icon' icon={faPerson} />
                <h3>{props.contributor}</h3>
            </div>            
        )
}

export default Contributor
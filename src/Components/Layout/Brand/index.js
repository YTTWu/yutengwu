import './index.scss'
import { Link } from 'react-router-dom'
import brand from '../../../assets/images/YutengWu3D.png'

const Brand = () => {
    return (
        <div className='brand'>
            <Link to='/'>
                <img className="brand-yuteng" src={brand} alt='yuteng'></img>
            </Link>
            <a className='about-resume' href="https://docs.google.com/document/d/1SQlUDccAwzaDaZgDKdl6gzOq-T-8eU39T8TgFeHZAaQ/edit?usp=sharing" 
                    target='_blank' rel="noopener noreferre">
                    <button >RESUME</button>
            </a>
        </div>
        
        
    )
}

export default Brand
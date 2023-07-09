import './index.scss'
import Loader from 'react-loaders'
import Brand from '../Home/Brand'

const Contact = () => {
    return (
        <>
            <Loader type="pacman" />
            <Brand />
            <div className='message'>
                <h2 className='text'>Hi, thank you for visiting</h2>
                <h2 className='text'>Email: yutengwu.dev@gmail.com</h2>
                <h2 className='text'>Cell: 7028583382</h2>
            </div>
            
        </>
        
    )
}

export default Contact
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom' 
import Sidebar from '../Sidebar'
import './index.scss'
import Footer from './Footer'
import Brand from './Brand'



const Layout = () => {

    const [menuPos, setMenuPos] = useState('translateX(-100%)')

    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (!isOpen && menuPos === 'translateX(0%)') {
            setMenuPos('translateX(-100%)');
        }
        else if (isOpen && menuPos === 'translateX(-100%)') {
            setMenuPos('translateX(0%)');
        }
    }, [isOpen, menuPos])

    useEffect(() => {
        // Close the Sidebar when the location changes
        setIsOpen(false);
        setMenuPos('translateX(-100%)');
      }, [location]);

    function handleClick() {
        setIsOpen(prevValue => (!prevValue));
    }


    return (
        <div>
            
            <Brand />
            
            
            <div className='App'>
                <Sidebar 
                    menuPos={menuPos}
                    handleClick={handleClick}
                    isOpen={isOpen}/>
                <div className='page'>
                    {/* <span className='tags top-tags'>
                        &lt;html&gt;
                        <br />
                        <span className='top-body'>&lt;body&gt;</span>
                    </span> */}
                    <Outlet />
                    {/* <span className='tags bottom-tags'>
                        &lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span> */}
                </div>
                
            </div>
            {/* <Footer className="footer"/> */}
            
        </div>
    
    )
}


export default Layout
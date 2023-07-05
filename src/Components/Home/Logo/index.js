import { useEffect, useRef } from 'react'
// import LogoS from '../../../assets/images/logo-s.png'
import LogoY from '../../../assets/images/Y.svg'
import './index.scss'
import anime from 'animejs/lib/anime.es.js'


const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const inlineLogoRef = useRef()
    const solidLogoRef = useRef()

    

    useEffect(() => {
        anime({
            targets: bgRef.current,
            duration: 10000,
            opacity: 1,
        });
        
        anime({
            targets: outlineLogoRef.current,
            delay: 2000,
            duration: 1500,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
        });

        anime({
            targets: inlineLogoRef.current,
            delay: 2000,
            duration: 6500,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
        });
    
        anime({
            targets: solidLogoRef.current,
            duration: 6000,
            delay: 2600,
            opacity: 1,
        });
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoY}
                alt="JavaScript,  Developer"
            />


            <svg
                viewBox="0 0 720 820">
            
            <g className=' cls-1 svg-container'>
                <g
                    aria-label="Y"
                    transform="translate(122.2 595.56)"
                    id="text55"
                    
                    >

                </g>
                <g
                    aria-label="Y"
                    transform="translate(162.79 595.56)"
                    id="text59"
                    
                    
                    >
                    <path
                        ref={outlineLogoRef}
                        d="M 152.4,-166.8 V 0 h 94.2 v -164.4 l 159,-264 h -105 L 201,-259.2 100.8,-428.4 H -4.8 Z"
                        id="path64" />
                </g>
            </g>
            
            </svg>
        </div>
        
    )
}

export default Logo
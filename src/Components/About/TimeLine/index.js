import './index.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from '../../../assets/data/timelineData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ToolIcon from './ToolIcon';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react'
import useLater from './useLater';

const TimeLine = () => {
    let iconStyle = {background: "#ffd700"}
    let workIcon = <FontAwesomeIcon icon={faBriefcase} />
    let schoolIcon = <FontAwesomeIcon icon={faGraduationCap} />

  

    const motionRefs = useRef([]);
    
    const isInView = useInView(motionRefs, {once: true});

    // const isInView = useLater(motionRefs);

 



    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            
            mainControls.start("visible");
            slideControls.start("visible");
        }
        
    }, [isInView,mainControls,slideControls])

  

    
    
    return (
        <div >
                
                <VerticalTimeline lineColor={ 'yellow' }>
                {
                    
                    timelineData.map((eachData, index) => {
                        let isWorkIcon = eachData.icon === "work"
                        let showButton = eachData.buttonText !== undefined && 
                            eachData.buttonText !== null && eachData.buttonText !== "";
                        
                        return (
                            
                            <VerticalTimelineElement
                                                        
                            contentStyle={{ height: "400px"}}
                            className='timeline'
                            key={eachData.key}
                            date={eachData.date}
                            dateClassName='date'
                            iconStyle={iconStyle}
                            icon={ isWorkIcon ? workIcon : schoolIcon}
                            
                        >
                            
                            
                            <div ref={(element) => motionRefs.current.push(element)} >
                            <motion.div
                                
                                variants={{
                                    hidden: {opacity: 0, y: 75},
                                    visible: {opacity: 1, y: 0},
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            
                            >
                                
                                <div className='timeline-element-format'>
                                    <div className='timeline-element-format-icon' >
                                        {eachData.tool.map((eachTool, index) => {
                                            return (
                                                <div className='icon_'> 
                                                    <ToolIcon key={index} name={eachTool}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <h1
                                        className='vertical-timeline-element-title'>{eachData.title}
                                    </h1>                            
                                    <h3 className='vertical-timeline-element-subtitle'>
                                        {eachData.location}
                                    </h3>
                                    <p id="description">
                                        {eachData.Description}
                                    </p>
                                    {
                                        showButton
                                        && 
                                        <a 
                                            className={`button ${isWorkIcon ? "workButton" : "schoolButton" }`} 
                                            href="/"
                                            > 
                                            Click here 
                                        </a> 
                                    }
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: {left:0},
                                    visible: {left: "100%"},
                                }}
                                initial="hidden"
                                animate={slideControls}
                                transition= {{ duration: 3.5, delay: 0.2, ease: "easeIn"}}
                                style={{
                                    position: "absolute",
                                    top:4,
                                    bottom: 4,
                                    left:0,
                                    right:0,
                                    background: "yellow",
                                    zIndex: 20,
                                }}
                                >
                                </motion.div>
                            </div> 
                        </VerticalTimelineElement>       
                            
                        )
                    })
                }
                </VerticalTimeline> 
               
        </div>
        
    )
}


export default TimeLine












{/* <VerticalTimeline lineColor={ 'yellow' }>
                {
                    
                    timelineData.map((eachData, index) => {
                        let isWorkIcon = eachData.icon === "work"
                        let showButton = eachData.buttonText !== undefined && 
                            eachData.buttonText !== null && eachData.buttonText !== "";
                        
                        return (
                            
                            <VerticalTimelineElement
                                                        
                            contentStyle={{ height: "400px"}}
                            className='timeline'
                            key={eachData.key}
                            date={eachData.date}
                            dateClassName='date'
                            iconStyle={iconStyle}
                            icon={ isWorkIcon ? workIcon : schoolIcon}                            
                        >                                                                                                                                                                  
                                <div className='timeline-element-format'>
                                    <div className='timeline-element-format-icon' >
                                        {eachData.tool.map((eachTool, index) => {
                                            return (
                                                <div className='icon_'> 
                                                    <ToolIcon key={index} name={eachTool}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <h1
                                        className='vertical-timeline-element-title'>{eachData.title}
                                    </h1>                            
                                    <h3 className='vertical-timeline-element-subtitle'>
                                        {eachData.location}
                                    </h3>
                                    <p id="description">
                                        {eachData.Description}
                                    </p>
                                    {
                                        showButton
                                        && 
                                        <a 
                                            className={`button ${isWorkIcon ? "workButton" : "schoolButton" }`} 
                                            href="/"
                                            > 
                                            Click here 
                                        </a> 
                                    }
                                </div>
                           
                           
                            
                        </VerticalTimelineElement>       
                            
                        )
                    })
                }
                </VerticalTimeline> */}
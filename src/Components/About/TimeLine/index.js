import './index.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from '../../../assets/data/timelineData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ToolIcon from './ToolIcon';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SeagateIcon from '../../../assets/images/Seagate.png';
import UCRIcon from '../../../assets/images/UCR.png';
import FoothillIcon from '../../../assets/images/Foothill.png'
import MSLC from '../../../assets/images/MSLC.png'

const TimeLine = () => {
    let iconStyle = {background: "#ffd700"}
    let workIcon = <FontAwesomeIcon icon={faBriefcase} />
    let schoolIcon = <FontAwesomeIcon icon={faGraduationCap} />

  
    const motionRef0 = useRef();
    const motionRef1 = useRef();
    const motionRef2 = useRef();
    const motionRef3 = useRef();
    const motionRef4 = useRef();
    
    const motionRefSet = [motionRef0, motionRef1, motionRef2, motionRef3, motionRef4]
    
    const isInView0 = useInView(motionRef0, {once: true});
    const isInView1 = useInView(motionRef1, {once: true});
    const isInView2 = useInView(motionRef2, {once: true});
    const isInView3 = useInView(motionRef3, {once: true});
    const isInView4 = useInView(motionRef4, {once: true});

    // const isInView = useLater(motionRefs);



    const mainControls0 = useAnimation();
    const slideControls0 = useAnimation();
    const mainControls1 = useAnimation();
    const slideControls1 = useAnimation();
    const mainControls2 = useAnimation();
    const slideControls2 = useAnimation();
    const mainControls3 = useAnimation();
    const slideControls3 = useAnimation();
    const mainControls4 = useAnimation();
    const slideControls4 = useAnimation();

    const mainControlSet = [mainControls0, mainControls1, mainControls2, mainControls3, mainControls4]
    const slideControlSet = [slideControls0, slideControls1, slideControls2, slideControls3, slideControls4]

    useEffect(() => {
        if (isInView0) {            
            mainControls0.start("visible");
            slideControls0.start("visible");
        }
        if (isInView1) {            
            mainControls1.start("visible");
            slideControls1.start("visible");
        }
        if (isInView2) {            
            mainControls2.start("visible");
            slideControls2.start("visible");
        }
        if (isInView3) {            
            mainControls3.start("visible");
            slideControls3.start("visible");
        }
        if (isInView4) {            
            mainControls4.start("visible");
            slideControls4.start("visible");
        }
        
        
    }, [isInView0,isInView1, isInView2, isInView3, isInView4])


    return (
        <div >
                
                <VerticalTimeline lineColor={ 'yellow' }>
                {
                    
                    timelineData.map((eachData, index) => {
                        let isWorkIcon = eachData.icon === "work"
                        let showButton = eachData.buttonText !== undefined && 
                            eachData.buttonText !== null && eachData.buttonText !== "";
                        let workImg;

                        if (eachData.company === "Seagate Technology")
                        {
                            workImg = SeagateIcon;
                        }
                        else if (eachData.company === "University of California Riverside") {
                            workImg = UCRIcon;
                        }
                        else if (eachData.company === "Foothill College") {
                            workImg = FoothillIcon;
                        }
                        else if (eachData.company === "Mustard Seed Learning Center") {
                            workImg = MSLC
                        }
                        
                        return (
                            
                            <VerticalTimelineElement
                                                        
                            // contentStyle={{ height: "430px"}}
                            className='timeline'
                            key={eachData.key}
                            date={eachData.date}
                            dateClassName='date'
                            iconStyle={iconStyle}
                            icon={ isWorkIcon ? workIcon : schoolIcon}
                            
                        >
                            
                            
                            {/* <div ref={(element) => motionRefs.current.push(element)} > */}
                            <div ref={motionRefSet[index]}>
                            {console.log((motionRef1.current))}
                            <motion.div
                                className={motion}
                                variants={{
                                    hidden: {opacity: 0, y: 75},
                                    visible: {opacity: 1, y: 0},
                                }}
                                initial="hidden"
                                animate={mainControlSet[index]}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            
                            >
                                
                                <div className='timeline-element-format'>
                                    {eachData.tool ? <div className='timeline-element-format-icon' >
                                        {eachData.tool.map((eachTool, index) => {
                                            return (
                                                <div className='icon_'> 
                                                    <ToolIcon key={index} name={eachTool}/>
                                                </div>
                                            )
                                        })}
                                    </div> : (<></>)}
                                    {eachData.company ? <div className='company'>
                                        <div >
                                            <img className='company-img' src={workImg} />
                                        </div>
                                        <h1>{eachData.company}</h1>
                                    </div> : (<> </> )}
                                    <h2
                                        className='vertical-timeline-element-title'>{eachData.title}
                                    </h2>                            
                                    <h3 className='vertical-timeline-element-subtitle'>
                                        {eachData.location}
                                    </h3>
                                    {eachData.Description ? <p id="description">
                                        {eachData.Description}
                                    </p> : (<></>)}
                                    {/* {
                                        showButton
                                        && 
                                        <a 
                                            className={`button ${isWorkIcon ? "workButton" : "schoolButton" }`} 
                                            href="/"
                                            > 
                                            Click here 
                                        </a> 
                                    } */}
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: {left:0},
                                    visible: {left: "100%"},
                                }}
                                initial="hidden"
                                animate={slideControlSet[index]}
                                transition= {{ duration: 2.0, delay: 0.2, ease: "easeIn"}}
                                style={{
                                    position: "absolute",
                                    top:4,
                                    bottom: 4,
                                    left:0,
                                    right:0,
                                    background: "#EEF1BD",
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












/* <VerticalTimeline lineColor={ 'yellow' }>
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
                </VerticalTimeline> */
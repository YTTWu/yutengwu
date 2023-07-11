import './index.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from '../../../assets/data/timelineData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ToolIcon from './ToolIcon';

const TimeLine = () => {
    let iconStyle = {background: "#ffd700"}
    let workIcon = <FontAwesomeIcon icon={faBriefcase} />
    let schoolIcon = <FontAwesomeIcon icon={faGraduationCap} />
    return (
        <VerticalTimeline lineColor={ 'yellow' }>
            {
                timelineData.map(eachData => {
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
                                <div className='timeline-element-format-icon'>
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
        </VerticalTimeline>
        
    )
}


export default TimeLine
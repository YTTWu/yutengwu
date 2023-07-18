import './index.scss'
import Spotability from "../../../assets/images/Spotibility.png"
import ToolIcon from '../ToolIcon'
import Contributor from '../Contributor' 
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EachProject = ({ project }) => {
    let preview; 
    if (project.name === "Spotability") {
        preview = "spotability"
    }
    else if (project.name === "Kusa") {
        preview = "kusa"
    }
    else if (project.name === "Anime Database Data Analytics") {
        preview = "CS180"
    }
    else if (project.name === "Chess") {
        preview = "chess"
    }

    
    return (
        <div className='project'>
            <h1 className="project-title">{project.name}</h1>
            <a 
                className="project-link" 
                href={project.link}
                target='_blank' rel="noopener noreferre"
            >
                <div className={`project-preview ${preview}`}></div>
            </a>
            <div className="project-description">
                {
                    project.description.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))
                }            
            </div>
            {/* <ToolIcon name={project.name}/> */}
            <div className='project-tool'>
                {
                    project.tool.map(eachTool => {
                        return (
                            <div className='icon_'>
                                <ToolIcon className="toolcon_" name={eachTool}/>
                            </div>
                        )
                    })
                }
                <a className='project-link' href={project.github} target="_blank" rel="noopener noreferre" >
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
            </div>

            <div className='project-contributor'>
                {
                    project.contributor.map(eachContributor => {
                        return (
                                <Contributor contributor={eachContributor}/>                            
                        )
                    })
                }
            </div>
        </div>
    )
}


export default EachProject
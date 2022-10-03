import React,{ useContext } from 'react'
import { ThemeContext } from '../../../hoc/darkmode/themeContext'
import classes from './projectItem.module.css'

//components
import projectContent from '../../../components/section/projects/timeline/project'
import { useNavigate } from 'react-router-dom'
import routes from '../../../config/routes'

const ProjectItem = () => {
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    
  return (
    <div className={theme ? classes.con : classes.con+ " pureDark"}>
        {projectContent.map((element, index) => (
            <div key={index} className={theme ? classes.card : classes.card+ " dark"} onClick={() => navigate("../" + routes.PROJECT + "/" + element.id)}>
                <div className={classes.cardImg}>
                    <img src={element.cardIcon} alt='card-icon'></img>
                </div>
                <div>
                    <h2 className={classes.title}>
                        {element.title}
                    </h2>
                    <p className={classes.date}>
                        {element.date}
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProjectItem
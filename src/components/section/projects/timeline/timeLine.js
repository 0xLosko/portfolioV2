import project from "./project"
import classes from './timeline.module.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import {Link} from 'react-router-dom'
import "react-vertical-timeline-component/style.min.css"
import { useContext } from "react"
import routes from "../../../../config/routes"
import { ThemeContext } from "../../../../hoc/darkmode/themeContext"
//components
import { ReactComponent as WorkIcon } from "../svg/work.svg"
import { ReactComponent as SchoolIcon } from "../svg/school.svg"

function TimeLine() {
  let workIconStyles = { background: "#70DAC2" }
  let schoolIconStyles = { background: "#f9c74f" }
  const styleTimelineElements = {
    textAlign: 'left',
    backgroundColor: "#F5F5F7"
   }
  const darkTimeLineElements = {
    textAlign: 'left',
    backgroundColor: '#1d1d1f'
  }
  const arrowCSS = {
    borderRight: "7px solid #F5F5F7"
  }
  const arrowCSSDark = {
    borderRight: "7px solid #1d1d1f"
  }
  const {theme} = useContext(ThemeContext)
  return (

    <div className={classes.timecon}>
      <VerticalTimeline lineColor={theme ? '#314663' : '#3997f7'}>
        {project.slice(0, 7).map(element => {
          let isWorkIcon = element.icon === "work"
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ""

          return (
            <VerticalTimelineElement
                contentStyle={theme ? styleTimelineElements : darkTimeLineElements}
                contentArrowStyle={theme ? arrowCSS : arrowCSSDark }
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title} 
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.techno}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <Link className={theme ? classes.btn : classes.btn + ' darkBlue'} to={routes.PROJECT + "/" + element.id}>En savoir plus</Link>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine

import React ,{ useContext } from 'react'
import classes from './details.module.css'
import { ThemeContext } from '../../../hoc/darkmode/themeContext'

const Details = (props) => {
    const {theme} = useContext(ThemeContext)
  return (
    <section className={theme ? classes.sCon : classes.sCon + ' pureDark'}>
        <h2>Détails</h2>
        <div className={classes.con}>
           
            <div className={classes.left}>
                <div className={classes.detailItem}>
                    <p><span className="fa-solid fa-calendar-day fa-1x"></span>{props.date}</p>
                </div>
                <div className={classes.detailItem}>
                    <p><span className="fa-solid fa-hourglass fa-1x"></span>{props.time}</p>
                </div>
                <div className={classes.detailItem}>
                    <p><span className="fa-solid fa-user-group fa-1x"></span>{props.group}</p>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.detailItem}>
                    <p><span className="fa-solid fa-mobile fa-1x"></span>{props.resp}</p>
                </div>
                <div className={classes.detailItem}>
                    <p><span className="fa-solid fa-code fa-1x"></span>{props.techno}</p>
                </div>
                
            </div>
        </div>
      
    </section>
  )
}

export default Details
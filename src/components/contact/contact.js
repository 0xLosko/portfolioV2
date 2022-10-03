import React, { useContext } from 'react'
import { ThemeContext } from '../../hoc/darkmode/themeContext'
import classes from './contact.module.css'
import { Link } from 'react-router-dom'
import routes from '../../config/routes'

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme ? classes.scon : classes.scon + " dark"}>
        <div className={classes.con}>
            <h2>
              intéressé pour travailler<br/>avec moi ?
            </h2>
            <Link to={routes.CONTACT }className={theme ? classes.link : classes.link +  " darkBlue"}>
                {"Me contacter >"}
            </Link>
        </div>
    </section>
  )
}

export default Contact
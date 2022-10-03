import React, { useContext } from 'react'
import classes from './desc.module.css'
import { ThemeContext } from '../../../hoc/darkmode/themeContext'
const Desc = (props) => {
    const {theme} = useContext(ThemeContext);
  return (
    <section className={theme ? classes.sCon : classes.sCon + ' pureDark'}>
         <h2>Description</h2>
         <div className={theme ? classes.con : classes.con + ' dark'}>
            <p>
                {props.desc}
            </p>
         </div>
    </section>
  )
}

export default Desc
import React, { useContext } from 'react'
import classes from './imgcon.module.css'
import { ThemeContext } from '../../../hoc/darkmode/themeContext'
const ImgCon = (props) => {
    const {theme} = useContext(ThemeContext);
  return (
    <section className={theme ? classes.sCon : classes.sCon + ' pureDark'}>
        <h2>Aperçu</h2>
        <div className={classes.con}>
           
          {props.imgSrc1 ? <img src={props.imgSrc1} alt='projet'></img> : null}
          {props.imgSrc2 ? <img src={props.imgSrc2} alt='projet'></img> : null}
          {props.imgSrc3 ? <img src={props.imgSrc3} alt='projet'></img> : null}
                
        </div>
    </section>
  )
}

export default ImgCon
import React, {useContext} from 'react'
import { ThemeContext } from './themeContext'
import { ReactComponent as NightIcon } from "./svg/moon.svg"
import { ReactComponent as SunIcon } from "./svg/sun.svg"

const DarkMode = (props) => {
  const {toggleTheme, theme} = useContext(ThemeContext);
  return (
    <div onClick={toggleTheme} className={props.style}>
        {theme ?<NightIcon /> : <SunIcon />} 
    </div>
  )
}

export default DarkMode
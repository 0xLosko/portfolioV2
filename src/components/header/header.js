import React, { useContext, useState } from 'react'
import classes from './header.module.css'
import { ThemeContext } from '../../hoc/darkmode/themeContext'
//components
import Navigation from './navigation/navigation'

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  const  [isConnected, setIsConnected] = useState(false);

  return (
    <>
        <header className={classes.Header}>
            <div className={classes.con}>
                <nav className={theme ? classes.nav : classes.nav + " dark " + classes.darkModule}>
                    <Navigation connected={props.connected}/>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header
import React, { useContext } from 'react'
import classes from './header.module.css'
import { ThemeContext } from '../../hoc/darkmode/themeContext'
//components
import Navigation from './navigation/navigation'

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
        <header className={classes.Header}>
            <div className={classes.con}>
                <nav className={theme ? classes.nav : classes.nav + " dark " + classes.darkModule}>
                    <Navigation />
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header
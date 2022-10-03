import React, { useContext } from 'react'
import classes from './footer.module.css'
import { Link } from  'react-router-dom';
import { ThemeContext } from '../../hoc/darkmode/themeContext';

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <footer className={theme ? classes.fcon : classes.fcon+ " dark"}>
        <div className={theme ? classes.con : classes.con + " dark " +classes.borderDark}>
            <div>
                <p className={classes.copyr}>© Made by Loris, All rights reserved.</p>
            </div>
            <div>
                <Link className={theme ? null : "dark"} to="/">Accueil</Link>
                <Link className={theme ? null : "dark"} to="/">Réalisations</Link>
                <Link className={theme ? null : "dark"} to="/">Contact</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
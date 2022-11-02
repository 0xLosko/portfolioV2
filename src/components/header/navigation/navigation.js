import React, { useContext,useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import classes from './nagivation.module.css';
import { ThemeContext } from '../../../hoc/darkmode/themeContext';
import routes from '../../../config/routes';

const Navigation = () => {
  const {theme} = useContext(ThemeContext);
  const [co, setCo] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCo(true)
    }
  }, []);
  return (
    <div className={classes.navcon}>
      <div className={classes.logo}>
        Loris Daca
      </div>
      <ul className={classes.ul}>
        <li className={classes.li}> 
          <Link to={'../' + routes.HOME} className={theme ? classes.white : 'dark'}>Accueil</Link>
        </li>
        <li className={classes.li}>
          <Link to={'../' + routes.PROJECTS}  className={theme ? classes.white : 'dark'}>Réalisations</Link>
        </li>
        <li className={classes.li}>
          <Link to={'../' + routes.CONTACT} className={theme ? classes.white : 'dark'}>Contact</Link>
        </li>
        <li className={classes.lic}>
          {co
            ? <Link to={'../' + routes.BACKOFFICE} className={theme ? classes.white : "darkBlue"}>{'Backoffice >'}</Link>
            : <Link to={'../' + routes.CONNECT} className={theme ? classes.white : "darkBlue"}>{'Connexion >'}</Link>
          }
        </li>
      </ul>
    </div>
    
  )
}

export default Navigation
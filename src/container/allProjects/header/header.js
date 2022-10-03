import React,{ useContext }from 'react'
import classes from './header.module.css'

//components
import DarkMode from '../../../hoc/darkmode/darkmode'
import { ReactComponent as GitHubSvg } from '../header/svg/github.svg'
import routes from '../../../config/routes'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../hoc/darkmode/themeContext'

const Header = (props) => {
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate();
  const GithubClickedHandler = () => {
    window.location.href = routes.GITHUB;
  }
  return (
    <header className={theme ? classes.con : classes.con+ " pureDark"}>
        <div className={classes.headerLeft}>
        <GitHubSvg className={theme ? null : classes.svgWhite} onClick={GithubClickedHandler}/>
            <h2 className={classes.rea}>
                {props.title}
            </h2>
        </div>
        <div className={classes.headerRight}>
            <p className={theme ? null : ' darkBlue'}onClick={() => navigate(-1)}>{'Revenir >'}</p>
            <DarkMode style={classes.icon}/>
        </div>
    </header>
  )
}

export default Header
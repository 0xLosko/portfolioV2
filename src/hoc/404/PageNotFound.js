import React from 'react'
import { Link } from 'react-router-dom';
import classes from './error404.module.css'
import routes from '../../config/routes'

const PageNotFound = () => {
  return (
    <div className={classes.con}>
      <span>404</span>
      <p>page non trouvée</p>
      <Link to={routes.HOME}>{'Home >'}</Link>
    </div>
  )
}

export default PageNotFound;
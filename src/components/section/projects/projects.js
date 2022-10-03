import React, { useContext } from 'react'
import { ThemeContext } from '../../../hoc/darkmode/themeContext'
import classes from './projects.module.css'
import { Link } from 'react-router-dom'
import routes from '../../../config/routes';
//components
import Timeline from './timeline/timeLine'
const Projects = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={theme ? classes.scon : classes.scon + ' pureDark'}>
            <div className={theme ? classes.con : classes.con + ' pureDark'}>
              <div>
                <h2>
                  A propos de moi
                </h2>
                <p className={classes.pu}>
                  Je suis un développeur Full Stack, j'ai commencé le développement dans ma chambre, à l'époque je faisais des plugins minecraft
                  puis j'ai commencé à y prendre goût. Plus récemment j'ai découvert la blockchain et les smartcontracts.
                  Passionné par la blockchain et le développement c'est tout naturellement que j'ai décidé d'en faire mon métier !
                </p>
                <img src={'/images/icon/icon-white.png'} alt="Banniere Logo des techno que j'utilise"></img>
              </div>
                
                <div className={theme ? classes.sdivpre : classes.sdivpre + ' dark'}>
                    <p>Mes projets rècents 👇</p>
                </div>
            </div>
           
            <Timeline />
            <Link to={routes.PROJECTS} className={theme ? classes.pmore : classes.pmore + ' darkBlue'}>Voir plus</Link>
    </section>
  )
}

export default Projects
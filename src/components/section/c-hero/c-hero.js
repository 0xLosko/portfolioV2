import React, { useContext } from 'react';
import classes from './c-hero.module.css';
import { ThemeContext } from '../../../hoc/darkmode/themeContext';
import '../../../App.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';

const Chero = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <section className={theme ? classes.scon : classes.scon + ' dark'}>
            <div className={classes.con}> 
                <div>
                    <h1>
                        Bonjour, <span className={theme ? null : ' white'}> Loris👋</span>.
                        <br/>
                        Développeur FullStack.
                    </h1>
                </div>
                <div className={classes.player}>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/db0b43d3-cd94-4d2d-8f2c-bddc10772ea9/X0BBkFWHV9.json"
                        style={{ background:"#324763", maxHeight: '500px', maxWidth: '500px',borderRadius: '360px' }}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                <Link to={routes.CONTACT} className={theme ? classes.link : classes.link + " darkBlue"}>
                    {'Démarrer une demande de projet >'}
                </Link>
            
            </div>
        </section>
    )
    }

export default Chero
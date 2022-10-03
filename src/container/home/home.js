import React from 'react'
import classes from './home.module.css'

import Chero from '../../components/section/c-hero/c-hero';
import Projects from '../../components/section/projects/projects';
import Contact from '../../components/contact/contact';
import Layout from '../../hoc/layout/layout';
import DarkMode from '../../hoc/darkmode/darkmode';

const Home = () => {
  return (
    <>  
        <Layout>
          <Chero />
          <Projects />
          <Contact />
        </Layout>
        <DarkMode style={classes.icon}/>        
    </>
  )
}

export default Home;
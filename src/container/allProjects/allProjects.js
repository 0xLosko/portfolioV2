import React from 'react'

//components
import Header from './header/header'
import ProjectItem from './projectItem/projectItem';
import Layout from '../../hoc/layout/layout'

const AllProjects = () => {
    return (
      <Layout>
        <Header title='Réalisations' />
        <ProjectItem />
      </Layout>
  );
}

export default AllProjects

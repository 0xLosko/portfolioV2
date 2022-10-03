import React from 'react'
import {  useParams } from 'react-router-dom';
//components
import Header from '../allProjects/header/header';
import projectContent from '../../components/section/projects/timeline/project'
import Details from './details/details';
import Desc from './desc/desc';
import ImgCon from './imgCon/imgCon';
import routes from '../../config/routes';


const Projects = () => {
  const { id } = useParams();
    if (isNaN(id) || id > projectContent.length-1){
      document.location.href=routes.ERROR404; 
    }
    return (
      <>
        <Header />
        <Details 
          date={projectContent[id].date}
          time={projectContent[id].time}
          group={projectContent[id].group}
          resp={projectContent[id].resp}
          techno={projectContent[id].techno}
        />
        <Desc desc={projectContent[id].description}/>
        <ImgCon 
          imgSrc1={projectContent[id].image.src1}
          imgSrc2={projectContent[id].image.src2}
          imgSrc3={projectContent[id].image.src3}
        />
      </>
    )
}

export default Projects
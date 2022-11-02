import './App.css';
import {Routes, Route} from 'react-router-dom';
import routes from './config/routes';
//components
import Home from './container/home/home'
import AllProjects from './container/allProjects/allProjects';
import ThemeContexteProvider from './hoc/darkmode/themeContext';
import Modal from './components/contact/modal/modal';
import Project from './container/project/projects';
import PageNotFound from './hoc/404/PageNotFound';
import Connect from './components/connect/connect';
import Backoffice from './components/backoffice/backoffice';

function App() {
  
  return (
    <ThemeContexteProvider>
      <Routes>
        <Route path={routes.HOME} element={<Home />}/>
        <Route exact path={routes.PROJECTS} element={<AllProjects />}/>
        <Route exact path={routes.CONTACT} element={<Modal />}/>
        <Route exact path={routes.PROJECT + '/:id'} element={<Project />}/>
        <Route exact path={routes.CONNECT} element = {<Connect />}/>
        <Route exact path={routes.BACKOFFICE} element = {<Backoffice />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeContexteProvider>
  );
}

export default App;

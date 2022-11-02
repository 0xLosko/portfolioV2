import {useEffect} from "react"
import React from 'react'
import {useNavigate} from "react-router-dom";
import routes from "../../config/routes";
import Header from "../header/header";
import classes from "./backoffice.module.css"

const Backoffice = () => {
  const navigate = useNavigate();
  const onDisconnect = () => {
    localStorage.clear();
    navigate('../' + routes.CONNECT);
  }

  useEffect(() => {
    let co = false
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      co = true;
    }  
    if(!co){
      navigate('../' + routes.CONNECT);
    }
  }, []);
  return (
    <>
    <Header />
    <div className={classes.con}>
      <div className={classes.wrapper}>
        <p className={classes.items}>📬</p>
        <p className={classes.items}>🔧</p>
      </div>
      <button className={classes.btn} onClick={onDisconnect}>déconnexion</button>
    </div>
    </>
  )
}

export default Backoffice
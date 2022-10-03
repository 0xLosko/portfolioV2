import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';
import classes from './modal.module.css'
import { ThemeContext } from '../../../hoc/darkmode/themeContext';

const Modal = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [errorStyle, setErrorStyle] = useState({});
    const [modalPoint , setModalPoint] = useState(0);
    const [contactValue, setContactValue] = useState([]);

    const incModalPoint = () =>{
        if(modalPoint < 3){
            setModalPoint(modalPoint + 1);
        }
    }
    const desModalPoint = () => {
        if(modalPoint > 0) {
           
            setModalPoint(modalPoint - 1);
            const nvCVU = [...contactValue];
            nvCVU[modalPoint - 1] = {
                id: modalPoint, 
                value: null};
            setContactValue(nvCVU);
            
        }
    }

    const CloseFinishForm = () => {
        setContactValue([]);
        setModalPoint(0);
        navigate(routes.HOME)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(event.target[0].value.length >= 3){
           
            incModalPoint();
            const nvCV = [...contactValue];
            nvCV[modalPoint] = {
                id: modalPoint, 
                value: event.target[0].value};
            setContactValue(nvCV);
            event.target[0].value = '';
        }else{
            setErrorStyle({
                borderColor: 'red'
               })
        }
        
    }

    const handleChange = (event) => {
        event.preventDefault();
    }
    let labelform = '';
    let back = '';
    let filled1 = '';
    let filled2 = '';

    switch(modalPoint){
        default :
            labelform = 'Votre nom';
            break;
        case 1:
            labelform = 'Votre mail';
            back = <p className={classes.back} onClick={desModalPoint}>{'< back'}</p>;
            filled1 = classes.filled;
            break;
        case 2:
            labelform = 'Votre message';
            back = <p className={classes.back} onClick={desModalPoint}>{'< back'}</p>;
            filled1 = classes.filled;
            filled2 = classes.filled;
            break;
        case 3:
            filled1 = classes.filled;
            filled2 = classes.filled;
            break;
    }
  
    let cancel = 
        <p onClick={() => navigate(-1)}className={theme ? classes.headerClose : classes.headerClose + ' white'} >
            Annuler
        </p>
    let form = 
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                <input className={classes.inputForm} style={errorStyle}onChange={(e) => handleChange(e)} />
            <input className={classes.btn} type="submit" value="Suivant" />
        </form>

      if(modalPoint > 2) {
        form = 
        <>
            <h1>Message envoyé</h1>
            <button className={classes.btn} onClick={CloseFinishForm}>
                Close
            </button>
        </>
        cancel = null
    }

    
    return (
       <section className={theme ? classes.conBg : classes.conBg+ " dark"}>
            <div className={theme ? classes.con : classes.con+ " pureDark"}>
                <div className={theme ? classes.modal : classes.modal+ " pureDark"}>
                    <header className={classes.header}>
                    <div className={classes.progress}>
                        {back}
                        <div className={classes.formProgressStep + ' ' + classes.filled}></div>
                        <div className={classes.formProgressStep + ' ' + filled1}></div>
                        <div className={classes.formProgressStep + ' ' + filled2}></div>
                        {cancel}
                    </div>
                    </header>
                    
                    <main className={classes.main}>
                        <h2 className={classes.labelForm}>{labelform}</h2>
                        {form}
                    </main>
                </div>
            </div>
        </section>
    );
  };
  
  export default Modal;
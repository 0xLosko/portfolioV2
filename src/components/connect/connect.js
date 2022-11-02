import React, { useState } from 'react'
import Header from '../header/header'
import classes from './connect.module.css'
import Web3 from 'web3'
import routes from '../../config/routes';
import {useNavigate} from 'react-router-dom';

function Connect() {
  
  const [isConnected, setIsConnected] = useState(false);
  const [statut, setStatut] = useState('');
  const navigate = useNavigate();
  
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      setIsConnected("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  
  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
      if(currentProvider) {
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount  = await web3.eth.getAccounts();
        const account = userAccount[0];
        let signature = await web3.eth.personal.sign(web3.utils.utf8ToHex('Portail de connexion -> backoffice \nêtes-vous sûrs ? '), account, "password?");
        let accountSign = web3.eth.personal.ecRecover('Portail de connexion -> backoffice \nêtes-vous sûrs ? ', signature);
        if (await accountSign === '0x638f48888636166ac9c09871c5c9cd26ee9db9bf'){
          let user = {proof: signature};
          setIsConnected('true');
          localStorage.setItem('user', JSON.stringify(user));
          navigate('../' + routes.BACKOFFICE);
        } else {
          setStatut('😇');
          setIsConnected('false');
        }
      } else {
        setStatut('MetaMask non détecté');
      }
    } catch(err) {
      setStatut(err.message);
    }
  }  
  
  return (
    <div className={classes.con}>
        <Header/>

    
        <>
            <button className={classes.btn} onClick={onConnect}>Connexion</button>
            <p>{statut}</p>
        </>   
    </div>
    )
}

export default Connect;
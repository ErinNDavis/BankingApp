import { HashRouter, Route } from 'react-router-dom';
import "./App.css";
import NavBar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Home from './components/home';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import React, {createContext, useState} from 'react';

export const DataContext = createContext();

function App() {
  
  const [user, updateUser]= useState({users:'peter', updateUsers:updateUsers, email:'peter@mit.edu', updateEmail:updateEmail, password:'secret', updatePassword:updatePassword, balance:100, updateBalance:updateBalance});
  

  function updateEmail(email){
    user.email = email;
  }

  function updateUsers(Name){
    user.users = Name;
  }

  function updatePassword(password){
    user.password = password;
  }
  
  function updateBalance(depositAmount, transaction ){
    if(transaction ==="ADD"){
      user.balance = parseInt(depositAmount) + user.balance;
      updateUser(user);
      console.log(user.balance);
    }   
    if(transaction ==="MINUS"){
      user.balance = user.balance - parseInt(depositAmount);
      updateUser(user);
      console.log(user.balance);
    }
  }

  return (
      <HashRouter>
        <NavBar/>
        <DataContext.Provider value={user}>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} /> 
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/alldata/" component={AllData} />
            </div>
          </DataContext.Provider>
        </HashRouter>
    
  );
}

export default App;

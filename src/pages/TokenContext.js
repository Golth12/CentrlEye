import React, { createContext, useState , useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState('');

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  

  // page refresher 

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (token === '' ){ // ifthe user is using it shouldnt change anything here 
    if (storedToken !== '')
    updateToken(storedToken);
    }
  }, [user]);

  useEffect(() => {
    // a token is good but this code literally permits someone to be connected as someone else , well its just word and all it doesnt help with 
    // accessing the database tho gotta think about it ... 
    if (token !== '') {
      console.log("we in here");
      console.log(token);
        const decodedToken = jwtDecode(token);
        
        console.log("user has been refreshed but it works");
        console.log(decodedToken);
        setUser(decodedToken);
        
        console.log("user has been refreshed but it works ???");
        
        console.log(user);
        setLoggedIn(true);
       
    } 
  }, [token]);

  //const  [storedToken, strdToken] = useState(localStorage.getItem('token'));

  return (
    <TokenContext.Provider value={{ token, updateToken, user, updateUser, loggedIn, setLoggedIn }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
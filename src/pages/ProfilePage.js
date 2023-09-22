import React, { useContext, useEffect, useState } from 'react';
import './ProfilePage.css';
import TokenContext from './TokenContext';

const ProfilePage = () => {
const { token, updateToken, user, updateUser, loggedIn, setLoggedIn } = useContext(TokenContext);
// to be changed so that we dont give away the ability to be connected to someones page in the code 
console.log(user);
console.log('the profile');
const handleSignUpClick = () => {
  // Redirect the user to the desired email address
  window.location.href = '/EventCreator';
};
  return (
    
    <div className='profile-page'>
      <h1>Profile</h1>
      <div className='profile-details'>
        <img className='profile-avatar' alt='Profile Avatar' />
        <p><strong  >Username:</strong>  {user.username}</p>
        <p><strong>Email:</strong> {user.mail}</p>
        {/* Add other user details here */}



        <button type="submit" className="btnformReg" onClick={handleSignUpClick}>
            Create an event
          </button>
      </div>
    </div>
  );
};

export default ProfilePage;

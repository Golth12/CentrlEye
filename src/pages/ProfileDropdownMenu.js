import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './ProfileDropdownMenu.css'; // Import the CSS file for the component

const handleProfileEnter = () => {
  window.location.href = './ProfilePage'
  
};

const ProfileDropdownMenu = ({ handleLogOutClick }) => {
  return (
    <div className='profile-dropdown-menu'>
      <ul>
        {/* Add other dropdown menu options here if needed */}
        <li className='dropdown-item' onClick={handleProfileEnter}>
          <FontAwesomeIcon icon={faUser} />
          Profile
        </li>
        <li className='dropdown-item' onClick={handleLogOutClick}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdownMenu;

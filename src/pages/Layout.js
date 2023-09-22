import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from "../images/Untitled design (1).png";
import React, { useContext, useState } from 'react';
import TokenContext from './TokenContext';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import ProfilePage from "./ProfilePage";

const Layout = () => {
  const { token, updateToken, user, updateUser, loggedIn, setLoggedIn } = useContext(TokenContext);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage the visibility of the dropdown menu

  const handleLogOutClick = async () => {
    try {
      // await axios.post("http://localhost:3001/logout");
      updateToken('');
      updateUser('');
      setLoggedIn(false);
      localStorage.setItem('token', '');
      localStorage.setItem('user', '');
      window.location.href = '/Signinup';
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleProfileIconClick = () => {
    setShowDropdown((prevState) => !prevState); // Toggle the visibility of the dropdown menu
  };

  return (
    <div className="layout">
      <nav className="container navbar">
        <div className="logo">
          <Link to="/"> {/* Make the logo clickable and redirect to the home page */}
            <img className="logo-img" src={Logo} alt="CentrlEye Logo" />
          </Link>
        </div>
        <menu>
          <ul className="nav-links">
            <li>
              <Link to="/">Home </Link> {/* Clicking the logo redirects to the home page */}
              <FontAwesomeIcon className='nav-down' icon={faAngleDown} />
            </li>
            <li>
              <Link to="/Events">Events</Link>
              <FontAwesomeIcon className='nav-down' icon={faAngleDown} />
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <FontAwesomeIcon className='nav-down' icon={faAngleDown} />
            </li>
            <li>
              <Link to="/CenPlus">CentrlEye+</Link>
            </li>
            {!loggedIn ? (
              <li id="login">
                <Link to="/Signinup">Login</Link>
              </li>
            ) : (
              <li className='profile-section'>
                {/* Profile icon and dropdown menu */}
                <div className='profile-icon' onClick={handleProfileIconClick}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                {/* Dropdown menu */}
                {showDropdown && (
                  <ProfileDropdownMenu user={user} handleLogOutClick={handleLogOutClick} />
                )}
              </li>
            )}

          </ul>
        </menu>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;

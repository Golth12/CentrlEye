import React, { useContext, useEffect, useState } from 'react';
import './EventCreator.css';
import axios from "axios";


import TokenContext from './TokenContext';

const EventCreator = () => {
    const { token, updateToken, user, updateUser, loggedIn, setLoggedIn } = useContext(TokenContext);
    const [formData, setFormData] = useState({
        username: user.username,
        Description: '',
        Name: '',
        Category: '',
        private: false,
      });


      const handleSignInClick = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:3001/Cevent", {
              formData
            });
      
            if (response.data.message === '555') {
              // Update the login status and store user data
              alert('Failed to sign in');
      
              // Optionally, you can redirect to another page after successful login
              // window.location.href = '/dashboard';
            } else {
                window.location.href = '/ProfilePage';
                 
              
            }
          } catch (error) {
            console.error('Error signing in:', error);
            alert('Failed to sign in');
          }
        };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
        
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send the form data to the server using axios
        axios
          .post('/Cevent', formData)
          .then((response) => {
            console.log(response.data);
            // Do something with the response if needed
          })
          .catch((error) => {
            console.error('Error submitting the form:', error);
            // Handle errors here
          });
      };
    
      return (
        <div className="signuppage">
          <form onSubmit={handleSubmit} className="signupform">
            <h1>Create an Event</h1>
    
            <div className="inputField">
              <label htmlFor="username">Host Username:</label>
              <label>{user.username}</label>
              
            </div>

            <div className="inputField">
              <label htmlFor="Name">Event Name:</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="inputField">
              <label htmlFor="Description">Description:</label>
              <textarea
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                required
              />
            </div>
    
            
    
            <div className="inputField">
              <label htmlFor="Category">Category:</label>
              <input
                type="text"
                id="Category"
                name="Category"
                value={formData.Category}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="inputField">
          <label>Private:</label>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                id="privateYes"
                name="private"
                value="yes"
                checked={formData.private === 'yes'}
                onChange={handleChange}
              />
              <label htmlFor="privateYes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="privateNo"
                name="private"
                value="no"
                checked={formData.private === 'no'}
                onChange={handleChange}
              />
              <label htmlFor="privateNo">No</label>
            </div>
          </div>
        </div>
            
    
            <button type="submit" className="btnformReg" onClick={handleSignInClick}>
              Create Event
            </button>
          </form>
        </div>
      );
};

export default EventCreator;

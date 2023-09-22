import React, { useState, useEffect } from 'react';
import "./RegistrationDetails.css";
import axios from "axios";

const SignUpDetails = () => {
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [real_username, setusername] = useState('');

  const handleSignUpClick = () => {
    // Redirect the user to the desired email address
    window.location.href = '/Signinup';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Array to store the missing fields
    const missingFields = [];

    // Check if name field is blank
    if (!name) {
      missingFields.push('Name');
    }

    // Check if surname field is blank
    if (!surname) {
      missingFields.push('Surname');
    }

    if (!mail) {
      missingFields.push('Email');
    }
    
    if (!password) {
      missingFields.push('Password');
    }

    if (missingFields.length > 0) {
      const missingFieldsMessage = `Please fill in the following fields: ${missingFields.join(', ')}`;
      alert(missingFieldsMessage);
      return;
    }
    
    if(password.length < 8){
      alert('Invalid Password');
      return;
    }

  // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      alert('Please enter a valid email address');
      return;
    }

    // Send a POST request to your server with email and password
    try {
      const response=  await  axios.post("http://localhost:3001/users/register", {
        mail : mail,
         username: real_username,
         password: password,
         fname: name,
         lname: surname

       })

       if (response.status === 200) {
         alert('User signed up successfully!');
         handleSignUpClick();
       } 
     } catch (error) {
       console.error('Error signing up:', error);
       alert('This email already exists!');
     }
  };


  return (
    <div className='signuppage'>
      <div className='signupform'>
        <h1>Join Us Today!</h1>
        <p>Sign up and start exploring our platform!</p>
        <form  className="formReg">
          <div className="inputField">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" placeholder="Enter your first name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" placeholder="Enter your last name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            />
            
          </div>


          <div className="inputField">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="Enter your email"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
            />

          
          
          </div>

          <div className="inputField">
            <label htmlFor="user">Username*</label>
            <input type="user" id="email" placeholder="Enter your username"
            value={real_username}
            onChange={(e) => setusername(e.target.value)}
            /> 
          </div>

          <div className="inputField">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="password-length-info">(Password must be longer than 8 characters)</span>
          <button type="submit" className="btnformReg" onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
        <span>Already have an account? <a href="./Signinup">Sign In</a></span>
      </div>
    </div>
  );
}

export default SignUpDetails;
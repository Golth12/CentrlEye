import React, { useContext  , useState } from 'react';
import './Signinup.css';
import axios from "axios";
import TokenContext from './TokenContext';

const Signupin = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [user, setUser] = useState(null); // Store user data (you can store any other relevant user data here)

  // token and the user to be uniform
    const { token, updateToken, user, updateUser, loggedIn, setLoggedIn } = useContext(TokenContext);



  const handleSignInClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users/LoginUser", {
        username: username,
        password: password,
      });

      if (response.data.message === '555') {
        // Update the login status and store user data
        alert('Failed to sign in');

        // Optionally, you can redirect to another page after successful login
        // window.location.href = '/dashboard';
      } else {
        setLoggedIn(true);
        const { user, token } = response.data;
        updateToken(token);
        updateUser(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        console.log(user);
        console.log("el user");
           
        
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Failed to sign in');
    }
  };

  const handleSignUpClick = () => {
    // Redirect the user to the desired email address
    window.location.href = '/SignUpDetails';
  };

  const handlePassword = () => {
    // Redirect the user to the desired email address
    window.location.href = '/ForgotPassword';
  };

  const handleLogOutClick = () => {
    // Clear the user data and update login status when the user logs out
      updateToken('');
        updateUser('');
        setLoggedIn(false)
  };

  return (
    <div >
      {loggedIn ? ( // If the user is logged in, show the personalized message and the "Log Out" button
        <div className='welcome-message'>
          <h1>Hello {user.username}!</h1>
          <button onClick={handleLogOutClick}>Log Out</button>
        </div>
      ) : ( // If not logged in, show the sign-in form and sign-up section
        <>
            <div className='userlogin'>
      <div className='signin'>
        <h1>Sign in</h1>
        <span>or use your account</span>
        <form className='form'>
          <fieldset>
            <input type='email'
             onChange={(e) => setEmail(e.target.value)}
            placeholder='Email' />
          </fieldset>
          <fieldset>
            <input type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
          </fieldset>
          <button type='submit'    onClick={handleSignInClick} className='btnform'>
       
            SIGN IN
          </button>
        </form>
        <span className='forgotpassword' onClick={handlePassword}>
          Forgot your password?
        </span>
      </div>
  
      <div className='signup'>
        <div className='signup1'>
          <h1>Join Us Today!</h1>
        </div>
        <div className='signup2'>
          Look for events and grow your business!
        </div>
        <button type='submit' className='btnsignup' onClick={handleSignUpClick}>
          SIGN UP
        </button>
      </div>
    </div>
        </>
      )}
    </div>
  );
};

export default Signupin;
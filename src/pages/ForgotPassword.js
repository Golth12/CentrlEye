import React, { useState } from 'react';
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPasswordClick = async () => {
    // Validate the email and send a password reset request to the server
    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Send a POST request to your server for password reset
      // Replace "YOUR_RESET_PASSWORD_ENDPOINT" with your actual endpoint
      const response = await fetch('YOUR_RESET_PASSWORD_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Password reset link sent successfully!');
        // Handle success, e.g., show a confirmation message or redirect to a success page
      } else {
        // Handle error response
        const data = await response.json();
        alert(data.error || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending password reset request:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Forgot Your Password?</h1>
        <p style={styles.subHeading}>Enter your email address to reset your password.</p>
        <form style={styles.form}>
          <div style={styles.inputField}>
            <label htmlFor='email'>Email*</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
          <button
            type='button'
            style={styles.btnForm}
            onClick={handleForgotPasswordClick}
          >
            RESET PASSWORD
          </button>
        </form>
        <span style={styles.signInLink}>
          Remembered your password? <a href='./Signinup' style={styles.link}>Sign In</a>
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    width: '25%',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#777',
  },
  form: {
    marginTop: '20px',
  },
  inputField: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  btnForm: {
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    cursor: 'pointer',
  },
  signInLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
  },
};

export default ForgotPassword;

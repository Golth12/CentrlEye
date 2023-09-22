const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Import the MySQL library

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
//const { registerUser } = require('./user');
const session = require("express-session");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


app.put('/update-user', (req, res) => {
  const userId = req.body.id;
  const newUsername = req.body.username;
  const newPassword = req.body.password;
  const newEmail = req.body.mail;

  // Check if the new username is already taken
  const sqlCheckUsername = 'SELECT * FROM users WHERE username = ?';
  db.query(sqlCheckUsername, [newUsername], (checkUsernameErr, checkUsernameResult) => {
    if (checkUsernameErr) {
      console.error('Error checking username:', checkUsernameErr);
      res.status(500).json({ error: 'An error occurred while checking username availability' });
      return;
    }
    if (checkUsernameResult.length > 0) {
      // Username already taken
      if (checkUsernameResult[0].id !== userId){

        res.status(409).json({ error: 'Username is already taken. Please choose a different username.' });
      return;
      };

    }

    // Update the user's details in the database
    let sqlUpdateUser;
    let sqlUpdateParams;

    if (newPassword) {
      // Update both username and password
      sqlUpdateUser = 'UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?';
      sqlUpdateParams = [newUsername, newPassword, newEmail, userId];
    } else {
      // Update only the username and email
      sqlUpdateUser = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
      sqlUpdateParams = [newUsername, newEmail, userId];
    }
db.query(sqlUpdateUser, sqlUpdateParams, (updateErr, updateResult) => {
      if (updateErr) {
        console.error('Error updating user details:', updateErr);
        res.status(500).json({ error: 'Failed to update user details' });
      } else {
        const user = {
          id: userId,
          username: newUsername,
          mail: newEmail,
          name: req.body.name,
          surname: req.body.surname
        };
        const newToken = generateToken(user);

        console.log('User details updated:', updateResult);
        res.status(200).json({ message: 'User details updated successfully', newToken: newToken });
      }
    });
  });
});


app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );


  function generateRandomKey() {
    return crypto.randomBytes(32).toString('hex');
  }
  
  // Set up a new strong secret key for signing tokens
  const secretKey = generateRandomKey();

  function generateToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
  }


// Create a database connection pool
const pool = mysql.createPool({
 host: 'localhost', // Replace with your MySQL host
  user: 'root',
  password: '',
  database: 'first_test',
});

// Function to execute queries on the database using the pool
const query = (sql, params, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      callback(err, null);
    } else {
      connection.query(sql, params, (err, result) => {
        connection.release();
        callback(err, result);
      });
    }
  });
};


//const { registerEvent } = require('./Events');
app.post('/Cevent', (req, res) => {
  // insert in event database.
  // having links inside of the database ? 
  // need to be able to recognize peoples evennt if they created it ? if they wanna be in te event etc  ...
  console.log('Received a registration request:', req.body);
  // create a url, 

  // pass the token from the header 
  // so we have who created it etc 
  // need to have a form about event and information about it 

 //const { username, password } = req.body;
  
    const username = req.body.formData.username; // host 

    const Description = req.body.formData.Description;
    const Name = req.body.formData.Name; // need to check if the name is free . 

    const Category = req.body.formData.Category;

    const private = req.body.formData.private; // private decides who can see the post  is important for the reasearch algo 

  // ticket number,  , create a new database with the tikets for the place and who got some . 
  // create a date for ticket a list of the people coming  that the creator can see 

  // Perform the database insertion
  const sql = 'INSERT INTO Events (username, Description , country, address , city, Name, Category, private ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [username, Description , Name, Category, private], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database: ', err);
      res.status(500).json({ error: 'Failed to add element to the database' });
    } else {
      console.log('Element added to the database:', result);
      res.status(200).json({ message: 'Element added successfully' });
    }
  });
});



// Route for user registration
const { registerUser , LoginUser  } = require('./user');

app.post('/users/register', (req, res) => {
  const { username, mail, fname, lname, password } = req.body;

  // Call the registerUser function from the user.js file
  registerUser(query, username, mail, fname, lname, password, (err, result) => {
    if (err) {
      console.error('Error registering user: ', err);
      res.status(500).json({ error: 'Failed to register user' });
    } else {
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});


app.post('/users/LoginUser', (req, res) => {
  const { username, password } = req.body;

  // Call the registerUser function from the user.js file
  LoginUser(query,generateToken, username, password, (err, result) => {
    if(err){

      res.send({ err: err });
    }
    if (result == '555') {
      res.send({   message : '555' });
    } else {
      //req.session.user = result.user;
      res.send({user : result.user, message : 'success',  token: result.token} );;
    }
  });
});

// Other routes for different functionalities can be defined here

// tokenation.

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
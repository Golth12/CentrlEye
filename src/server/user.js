const registerUser = (query, username, email, fname, lname, password, callback) => {
    // Perform the database insertion
    const sql = 'INSERT INTO users (username, email, Lname, Fname, password) VALUES (?, ?, ?, ?, ?)';
    query(sql, [username, email, fname, lname, password], (err, result) => {
      if (err) {
        console.error('Error inserting data into the database: ', err);
        callback(err, null);
      } else {
        console.log('User added to the database:', result);
        callback(null, result);
      }
    });
  };
  

  const LoginUser = (query, generateToken, username , password, callback) => {
    // Perform the database insertion
   console.log('Received a login request:');
    const sql = "SELECT * FROM users WHERE username = ?;"
    query(sql, username, (err, result) => {
      if (err) {
        callback(err, null);
        
      }
      if (result.length > 0) {
        if (password === result[0].password) {
          const user = {
              id: result[0].id,
              username: result[0].username,
              mail:  result[0].email,
              name: result[0].Fname,
              surname: result[0].Lname
            };
        
          const token = generateToken(user);
          const answ = {
                user: user,
                token: token
               

          };
          callback(null, answ);
         // res.send({user : user, message : 'success',  token: token} );
        } else {
        //  console.log('bad combination', req.body);
          callback(null, '555');
         // res.send({   message : '555' });
        }
      } else {
          console.log('no user', req.body);
            callback(null, '555');
      }
    }
    );
  };
  
  module.exports = {
    registerUser,
    LoginUser,
  };
const registerEvent = (query, username, email, fname, lname, password, callback) => {
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
    
      const username = req.body.username; // host 

      const Description = req.body.Description;
      const Name = req.body.Name; // need to check if the name is free . 

      const Category = req.body.Category;
      const private = req.body.private; // private decides who can see the post  is important for the reasearch algo 

    // ticket number,  , create a new database with the tikets for the place and who got some . 
    // create a date for ticket a list of the people coming  that the creator can see 

    // Perform the database insertion
    const sql = 'INSERT INTO Events (username, Description , Name, Category, private ) VALUES (?, ?, ?, ?, ?)';

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



   
  module.exports = {
    registerEvent,
  };
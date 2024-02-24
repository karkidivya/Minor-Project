import db from '../../db.js';
import util from 'util';

const queryAsync = util.promisify(db.query).bind(db);

const userController = {
  registerUser: (req, res) => {
    try {
      const {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation
      } = req.body;

      const newUser = {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation
      };

      queryAsync('INSERT INTO Users SET ?', newUser)
        .then(result => {
          if (result.affectedRows === 1) {
            res.status(201).json({ message: 'User registered successfully' });
          } else {
            res.status(500).json({ error: 'Failed to register user' });
          }
        })
        .catch(error => {
          console.error('Error registering user:', error);
          res.status(500).json({ error: 'Internal server error' });
        });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  login: (req, res) => {
    console.log("check login")
    // try {
    //   const { username, password } = req.body;

    //   // Check if username and password are provided
    //   if (!username || !password) {
    //     return res.status(400).json({ error: 'Username and password are required' });
    //   }

    //   // Check if the user exists in the database
    //   queryAsync('SELECT * FROM Users WHERE username = ?', [username])
    //     .then(user => {
    //       if (user.length === 0) {
    //         return res.status(404).json({ error: 'User not found' });
    //       }

    //       // Check if the password is correct
    //       if (user[0].password !== password) {
    //         return res.status(401).json({ error: 'Incorrect password' });
    //       }

    //       // At this point, authentication is successful
    //       // You can generate an access token and send it back to the client
    //       // For example, you can use JWT for token generation

    //       const accessToken = generateAccessToken(user[0].userId); // Assuming you have a function to generate JWT access token
    //       res.status(200).json({ accessToken });
    //     })
    //     .catch(error => {
    //       console.error('Error logging in:', error);
    //       res.status(500).json({ error: 'Internal server error' });
    //     });
    // } catch (error) {
    //   console.error('Error logging in:', error);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  },

  updateProfile: (req, res) => {
    try {
      const {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation
      } = req.body;

      const userId = req.userId; // Assuming userId is extracted from the access token

      const updatedUser = {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation
      };

      queryAsync('UPDATE Users SET ? WHERE userId = ?', [updatedUser, userId])
        .then(result => {
          if (result.affectedRows === 1) {
            res.status(200).json({ message: 'User profile updated successfully' });
          } else {
            res.status(404).json({ error: 'User not found or unable to update profile' });
          }
        })
        .catch(error => {
          console.error('Error updating user profile:', error);
          res.status(500).json({ error: 'Internal server error' });
        });
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export default userController;

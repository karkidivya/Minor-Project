import db from '../../db.js';
import util from 'util';

const queryAsync = util.promisify(db.query).bind(db);

const userController = {
  registerUser: async (req, res) => {
    try {
      const {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        creditScore,
        accountStatus,
        paymentInformation,
      } = req.body;

      const newUser = {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        creditScore,
        accountStatus,
        paymentInformation: JSON.stringify(paymentInformation),
      };

      // Check if username and email are unique
      const existingUser = await queryAsync('SELECT * FROM User WHERE name = ? OR emailAddress = ?', [newUser.username, newUser.emailAddress]);
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
      const result = await queryAsync('INSERT INTO User SET ?', newUser);
      const user = await queryAsync('SELECT * FROM User WHERE name = ?', [newUser.name])
      console.log(user)
      if (result.affectedRows === 1) {
        res.status(201).json({ message: 'User registered successfully' , payload : user[0] });
      } else {
        res.status(500).json({ error: 'Failed to register user' });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  userProfile: async(req,res) =>{
    try {
      const userId = req.params.id; // Accessing userId from the request parameters
      const user = await queryAsync('SELECT name FROM User WHERE userId = ?', [userId]);
      res.json(user);
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  ,
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Check if username and password are provided
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }

      // Check if the user exists in the database
      const user = await queryAsync('SELECT * FROM User WHERE username = ?', [username]);
      console.log(user ," users data ")
      if (user.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if the password is correct
      if (user[0].password !== password) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      res.status(200).json({ success : 'login successful', payload : user });

    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        creditScore,
        accountStatus,
        paymentInformation,
      } = req.body;

      const userId = req.userId; // Assuming userId is extracted from the access token

      const updatedUser = {
        username,
        password,
        name,
        emailAddress,
        phoneNumber,
        address,
        creditScore,
        accountStatus,
        paymentInformation: JSON.stringify(paymentInformation),
      };

      const result = await queryAsync('UPDATE User SET ? WHERE userId = ?', [updatedUser, userId]);
      
      if (result.affectedRows === 1) {
        res.status(200).json({ message: 'User profile updated successfully', payload : result });
      } else {
        res.status(404).json({ error: 'User not found or unable to update profile' });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
};

export default userController;

import db from '../../db.js';
import util from 'util';

const queryAsync = util.promisify(db.query).bind(db);

const userController = {
  registerUser: async (req, res) => {
    try {
      const {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation,
        email,
        profilePicture,
        introduction,
        skill,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        payment
      } = req.body;

      const newUser = {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation,
        email,
        profilePicture,
        introduction,
        skill,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        payment
      };
  

      // Check if username and email are unique
      const existingUser = await queryAsync('SELECT * FROM Users WHERE username = ? OR emailAddress = ?', [newUser.username, newUser.emailAddress]);
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
      const result = await queryAsync('INSERT INTO Users SET ?', newUser);
      
      if (result.affectedRows === 1) {
        res.status(201).json({ message: 'User registered successfully' , payload : "data required to be determined 6969 " });
      } else {
        res.status(500).json({ error: 'Failed to register user' });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      
      // Check if username and password are provided
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }

      // Check if the user exists in the database
      const user = await queryAsync('SELECT * FROM Users WHERE username = ?', [username]);
      console.log(user ," users data ")
      if (user.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if the password is correct
      if (user[0].password !== password) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      res.status(200).json({ success : 'login successfull', payload : user })

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
        fullName,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation,
        email,
        profilePicture,
        introduction,
        skill,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        payment
      } = req.body;

      const userId = req.userId; // Assuming userId is extracted from the access token

      const updatedUser = {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        address,
        location,
        role,
        rating,
        numberOfViews,
        accountStatus,
        paymentInformation,
        email,
        profilePicture,
        introduction,
        skill,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        payment
      };

      const result = await queryAsync('UPDATE Users SET ? WHERE userId = ?', [updatedUser, userId]);
      
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

  // Other controller methods remain the same
};

export default userController;

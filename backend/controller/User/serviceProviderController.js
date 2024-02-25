// Import the necessary modules
import db from '../../db.js';
import util from 'util';

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

// Define the serviceProviderController object
const serviceProviderController = {
  // Function to register a new service provider
  registerServiceProvider: async (req, res) => {
    try {
      // Extract data from the request body
      const {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        location,
        profilePicture,
        introduction,
        categoryId,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        rating,
        numberOfViews,
        accountStatus,
        services,
        paymentHistory
      } = req.body;

      // Create a newServiceProvider object
      const newServiceProvider = {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        location,
        profilePicture,
        introduction,
        categoryId,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        rating,
        numberOfViews,
        accountStatus,
        services: JSON.stringify(services), // Convert services to JSON string
        paymentHistory: JSON.stringify(paymentHistory) // Convert paymentHistory to JSON string
      };

      // Check if username and email are unique
      const existingServiceProvider = await queryAsync('SELECT * FROM ServiceProvider WHERE username = ? OR emailAddress = ?', [newServiceProvider.username, newServiceProvider.emailAddress]);
      if (existingServiceProvider.length > 0) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }

      // Insert the newServiceProvider into the database
      const result = await queryAsync('INSERT INTO ServiceProvider SET ?', newServiceProvider);

      // Check if the registration was successful
      if (result.affectedRows === 1) {
        res.status(201).json({ message: 'Service provider registered successfully', payload: "data required to be determined 6969" });
      } else {
        res.status(500).json({ error: 'Failed to register service provider' });
      }
    } catch (error) {
      console.error('Error registering service provider:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Function to log in a service provider
  login: async (req, res) => {
    try {
      // Extract username and password from the request body
      const { username, password } = req.body;

      // Check if username and password are provided
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }

      // Check if the user exists in the database
      const serviceProvider = await queryAsync('SELECT * FROM ServiceProvider WHERE username = ?', [username]);
      console.log(serviceProvider, " service providers data ");
      if (serviceProvider.length === 0) {
        return res.status(404).json({ error: 'Service provider not found' });
      }

      // Check if the password is correct
      if (serviceProvider[0].password !== password) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      // Send success response with service provider data
      res.status(200).json({ success: 'Login successful', payload: serviceProvider });

    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Function to update service provider profile
  updateProfile: async (req, res) => {
    try {
      // Extract data from the request body
      const {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        location,
        profilePicture,
        introduction,
        categoryId,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        rating,
        numberOfViews,
        accountStatus,
        services,
        paymentHistory
      } = req.body;

      // Extract serviceProviderId from the request
      const serviceProviderId = req.serviceProviderId;

      // Create an updatedServiceProvider object
      const updatedServiceProvider = {
        username,
        password,
        fullName,
        emailAddress,
        phoneNumber,
        location,
        profilePicture,
        introduction,
        categoryId,
        proficiency,
        availability,
        preference,
        company,
        position,
        timeOfWork,
        reference,
        certificate,
        education,
        rating,
        numberOfViews,
        accountStatus,
        services: JSON.stringify(services), // Convert services to JSON string
        paymentHistory: JSON.stringify(paymentHistory) // Convert paymentHistory to JSON string
      };

      // Update the service provider profile in the database
      const result = await queryAsync('UPDATE ServiceProvider SET ? WHERE serviceProviderId = ?', [updatedServiceProvider, serviceProviderId]);

      // Check if the profile update was successful
      if (result.affectedRows === 1) {
        res.status(200).json({ message: 'Service provider profile updated successfully', payload: result });
      } else {
        res.status(404).json({ error: 'Service provider not found or unable to update profile' });
      }
    } catch (error) {
      console.error('Error updating service provider profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export default serviceProviderController;

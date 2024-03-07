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
    getProviderDetail: async(req,res)=>{
      try{
          const providerId = req.params.id;
          const provider = await queryAsync('SELECT fullName FROM ServiceProvider WHERE serviceProviderId = ?', [providerId]);
          res.status(200).json(provider);
      }catch(error){
          res.status(500).json({status: 'error', message:'Internal server error'})
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
  },
  getServiceProvidersByCategoryId: async (req, res) => {
    try {
      // Extract categoryId from request parameters
      const { categoryId } = req.params;

      // Query to retrieve service providers with the specified categoryId
      const query = 'SELECT * FROM ServiceProvider WHERE categoryId = ?';
      const serviceProviderList = await queryAsync(query, [categoryId]);

      // Send the fetched service providers as a JSON response
      res.status(200).json({ success: true, serviceProviders: serviceProviderList });
    } catch (error) {
      console.error('Error fetching service providers by category ID:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  featuredServiceProvider: async (req, res) => {
    try {
      // Query to retrieve service providers with the highest ratings
      const query = 'SELECT * FROM ServiceProvider ORDER BY rating DESC LIMIT 5';
      const featuredProviders = await queryAsync(query);
  
      // Send the fetched featured service providers as a JSON response
      res.status(200).json({ success: true, featuredProviders });
    } catch (error) {
      console.error('Error fetching featured service providers:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  unVerifiedServiceProvider: async (req, res) => {
    try {
      // Query to retrieve unverified service providers
      const query = 'SELECT * FROM ServiceProvider WHERE verificationStatus = FALSE';
      const unverifiedProviders = await queryAsync(query);

      // Send the fetched unverified service providers as a JSON response
      res.status(200).json({ success: true, unverifiedProviders });
    } catch (error) {
      console.error('Error fetching unverified service providers:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  verifiedServiceProvider: async (req, res) => {
    try {
      // Query to retrieve verified service providers
      const query = 'SELECT * FROM ServiceProvider WHERE verificationStatus = TRUE';
      const verifiedProviders = await queryAsync(query);

      // Send the fetched verified service providers as a JSON response
      res.status(200).json({ success: true, verifiedProviders });
    } catch (error) {
      console.error('Error fetching verified service providers:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  updateServiceProviderToVerified: async (req, res) => {
    try {
      // Extract serviceProviderId from request parameters
      const { serviceProviderId } = req.params;

      // Update the verification status of the service provider
      const query = 'UPDATE ServiceProvider SET verificationStatus = TRUE WHERE serviceProviderId = ?';
      const result = await queryAsync(query, [serviceProviderId]);

      // Check if the update was successful
      if (result.affectedRows === 1) {
        res.status(200).json({ success: true, message: 'Service provider verified successfully' });
      } else {
        res.status(404).json({ success: false, error: 'Service provider not found or unable to verify' });
      }
    } catch (error) {
      console.error('Error updating service provider verification status:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  deleteServiceProvider: async (req, res) => {
    try {
      // Extract serviceProviderId from request parameters
      const { serviceProviderId } = req.params;

      // Delete the service provider from the database
      const query = 'DELETE FROM ServiceProvider WHERE serviceProviderId = ?';
      const result = await queryAsync(query, [serviceProviderId]);

      // Check if the deletion was successful
      if (result.affectedRows === 1) {
        res.status(200).json({ success: true, message: 'Service provider deleted successfully' });
      } else {
        res.status(404).json({ success: false, error: 'Service provider not found or unable to delete' });
      }
    } catch (error) {
      console.error('Error deleting service provider:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },
 
};

export default serviceProviderController;

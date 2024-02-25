import util from 'util';
import db from '../../db.js'; // Adjust the path based on your directory structure

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

const serviceController = {
    getAllServices: async (req, res) => {
        try {
            // Retrieve all services from the database
            const services = await queryAsync('SELECT * FROM Service WHERE categoryId = ?', [req.params.categoryId]);

            // Send the services as JSON response
            res.status(200).json({ status: 'success', data: services });
        } catch (error) {
            console.log('An error occurred while fetching services:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    getServiceByID: async (req, res) => {
        const serviceId = req.params.serviceId;
        try {
            // Retrieve the service with the specified ID from the database
            const service = await queryAsync('SELECT * FROM Service WHERE serviceId = ?', [serviceId]);

            // Check if service exists
            if (!service.length) {
                return res.status(404).json({ status: 'error', message: 'Service not found' });
            }

            // Send the service as JSON response
            res.status(200).json({ status: 'success', data: service[0] });
        } catch (error) {
            console.log('An error occurred while fetching service by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
};

export default serviceController;

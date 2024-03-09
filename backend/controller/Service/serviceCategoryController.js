import util from 'util';
import db from '../../db.js'; // Adjust the path based on your directory structure

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

const serviceCategoryController = {
    getAllServiceCategories: async (req, res) => {
        try {
            // Retrieve all service categories from the database
            const categories = await queryAsync('SELECT * FROM ServiceCategory');

            // Send the categories as JSON response
            res.status(200).json({ status: 'success', data: categories });
        } catch (error) {
            console.log('An error occurred while fetching service categories:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
    ,
    getServiceCategoryByID: async (req, res) => {
        const categoryId = req.params.categoryId;
        try {
            // Retrieve the service category with the specified ID from the database
            const category = await queryAsync('SELECT * FROM ServiceCategory WHERE categoryId = ?', [categoryId]);

            // Check if category exists
            if (!category.length) {
                return res.status(404).json({ status: 'error', message: 'Service category not found' });
            }

            // Send the category as JSON response
            res.status(200).json({ status: 'success', data: category[0] });
        } catch (error) {
            console.log('An error occurred while fetching service category by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
};

export default serviceCategoryController;

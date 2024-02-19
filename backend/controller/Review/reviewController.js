import util from 'util';
import db from '../../db.js';

const queryAsync = util.promisify(db.query).bind(db);

const reviewController = {

    getReviewByServiceProviderServiceId: async (req, res) => {
        const { serviceProviderId, serviceId } = req.params;
        try {
            // Assuming there is a column in the Review table for serviceProviderId and serviceId
            const reviews = await queryAsync('SELECT * FROM Review WHERE serviceProviderId = ? AND serviceId = ?', [serviceProviderId, serviceId]);
            res.status(200).json({ status: 'success', data: reviews });
        } catch (error) {
            console.log('An error occurred while fetching reviews by service provider and service ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },
    
    addReview: async (req, res) => {
        const { paymentId, bookingId, reviewerId, rating, dateAndTime, textReview } = req.body;
        try {
            const query = 'INSERT INTO Review (paymentId, bookingId, reviewerId, rating, dateAndTime, textReview) VALUES (?, ?, ?, ?, ?, ?)';
            await queryAsync(query, [paymentId, bookingId, reviewerId, rating, dateAndTime, textReview]);
            res.status(201).json({ status: 'success', message: 'Review added successfully' });
        } catch (error) {
            console.log('An error occurred while adding review:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    updateReview: async (req, res) => {
        const { reviewId, rating, textReview } = req.body;
        try {
            const query = 'UPDATE Review SET rating = ?, textReview = ? WHERE reviewId = ?';
            await queryAsync(query, [rating, textReview, reviewId]);
            res.status(200).json({ status: 'success', message: 'Review updated successfully' });
        } catch (error) {
            console.log('An error occurred while updating review:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    removeReview: async (req, res) => {
        const { reviewId } = req.body;
        try {
            await queryAsync('DELETE FROM Review WHERE reviewId = ?', [reviewId]);
            res.status(200).json({ status: 'success', message: 'Review deleted successfully' });
        } catch (error) {
            console.log('An error occurred while removing review:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
};

export default reviewController;

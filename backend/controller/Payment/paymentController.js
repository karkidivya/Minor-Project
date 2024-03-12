import util from 'util';
import db from '../../db.js'; // Adjust the path based on your directory structure

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

const paymentController = {
    getPayment: async (req, res) => {
        try {
            // Retrieve payments from the database
            const payments = await queryAsync('SELECT * FROM Payment');
            // Send the payments as JSON response
            res.status(200).json({ status: 'success', data: payments });
        } catch (error) {
            console.log('An error occurred while fetching payments:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    getPaymentById: async (req, res) => {
        const paymentId = req.params.id;
        try {
            // Retrieve the payment with the specified ID from the database
            const payment = await queryAsync('SELECT * FROM Payment WHERE id = ?', [paymentId]);

            // Check if payment exists
            if (!payment.length) {
                return res.status(404).json({ status: 'error', message: 'Payment not found' });
            }

            // Send the payment as JSON response
            res.status(200).json({ status: 'success', data: payment[0] });
        } catch (error) {
            console.log('An error occurred while fetching payment by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    deletePayment: async (req, res) => {
        const paymentId = req.params.id;
        try {
            // Delete the payment with the specified ID from the database
            await queryAsync('DELETE FROM Payment WHERE id = ?', [paymentId]);

            // Send success response
            res.status(200).json({ status: 'success', message: 'Payment deleted successfully' });
        } catch (error) {
            console.log('An error occurred while deleting payment:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    addPayment: async (req, res) => {
        const {
            bookingId,
            uuidf,
            amount
        } = req.body;

        try {
            // Insert the new payment into the database
            const query = `
                INSERT INTO Payment (
                    transaction_uuid,
                    total_amount,
                    status,
                    created_at,
                    updated_at
                ) VALUES (?, ?, ?,  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
            const values = [
                bookingId,
                amount,
                'waiting'
            ];
            await queryAsync(query, values);

            res.status(201).json({ status: 'success', message: 'Payment added successfully' });
        } catch (error) {
            console.log('An error occurred while adding payment:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    updatePaymentStatus: async (req, res) => {
        try {
            // Extract paymentId from request body
            const { paymentId } = req.body;
    
            // Update the payment status in the database to 'Success'
            const query = 'UPDATE Payment SET status = ? WHERE id = ?';
            const status = 'Success'; // Set the status to 'Success'
    
            // Assuming queryAsync is a function that executes the SQL query asynchronously
            await queryAsync(query, [status, paymentId]);
    
            res.status(200).json({ success: true, message: 'Payment status updated successfully' });
        } catch (error) {
            console.error('Error updating payment status:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    },
    

    getPaymentByStatus: async (req, res) => {
        const status = req.params.status;
        try {
            // Retrieve payments with the specified status from the database
            const payments = await queryAsync('SELECT * FROM Payment WHERE status = ?', [status]);

            // Send the payments as JSON response
            res.status(200).json({ status: 'success', data: payments });
        } catch (error) {
            console.log('An error occurred while fetching payments by status:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
};

export default paymentController;

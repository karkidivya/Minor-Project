import util from 'util';
import db from '../../db.js'; // Adjust the path based on your directory structure

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

const userDashboardController = {
    getUserDashboardDetails: async (req, res) => {
        const { customerId } = req.body; // Assuming customerId is sent in the request body
        
        try {
            // Retrieve booking and payment details based on customerId
            const query = `
                SELECT 
                    Booking.serviceProviderId, 
                    Booking.amount, 
                    Booking.serviceId, 
                    Booking.bookingStatus, 
                    Payment.total_amount as paymentAmount,
                    Payment.status as paymentStatus
                FROM 
                    Booking 
                LEFT JOIN 
                    Payment ON Booking.bookingId = Payment.transaction_uuid 
                WHERE 
                    Booking.customerId = ?`;

            const userDashboardData = await queryAsync(query, [customerId]);
            // console.log(userDashboardData)
            // Format the data as array of objects with desired details
            const userDashboardDetails = userDashboardData.map(entry => ({
                serviceProviderId: entry.serviceProviderId,
                totalAmount: entry.amount,
                serviceId: entry.serviceId,
                taskStatus: entry.bookingStatus,
                paymentAmount: entry.paymentAmount,
                paymentStatus: entry.paymentStatus
            }));

            res.status(200).json({ status: 'success', data: userDashboardDetails });
        } catch (error) {
            console.log('An error occurred while fetching user dashboard details:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
};

export default userDashboardController;

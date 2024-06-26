import util from 'util';
import db from '../../db.js'; // Adjust the path based on your directory structure

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

const bookingController = {
    getBooking: async (req, res) => {
        try {
            // Retrieve bookings from the database
            const bookings = await queryAsync('SELECT * FROM Booking');
            // Send the bookings as JSON response
            res.status(200).json({ status: 'success', data: bookings });
        } catch (error) {
            console.log('An error occurred while fetching bookings:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    getBookingById: async (req, res) => {
        const bookingId = req.params.id;
        try {
            // Retrieve the booking with the specified ID from the database
            const booking = await queryAsync('SELECT * FROM Booking WHERE bookingId = ?', [bookingId]);

            // Check if booking exists
            if (!booking.length) {
                return res.status(404).json({ status: 'error', message: 'Booking not found' });
            }

            // Send the booking as JSON response
            res.status(200).json({ status: 'success', data: booking[0] });
        } catch (error) {
            console.log('An error occurred while fetching booking by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },
    getBookingByUserId: async (req, res) => {
        const customerId = req.params.id;
        try {
            // Retrieve the booking with the specified ID from the database
            const booking = await queryAsync('SELECT * FROM Booking WHERE customerId = ?', [customerId]);

            // Check if booking exists
            if (!booking.length) {
                return res.status(404).json({ status: 'error', message: 'Booking not found' });
            }

            // Send the booking as JSON response
            res.status(200).json({ status: 'success', data: booking[0] });
        } catch (error) {
            console.log('An error occurred while fetching booking by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },
    getBookingByServiceId: async (req, res) => {
        const serviceId = req.params.id;
        try {
            // Retrieve the booking with the specified ID from the database
            const booking = await queryAsync('SELECT * FROM Booking WHERE serviceId = ?', [serviceId]);

            // Check if booking exists
            if (!booking.length) {
                return res.status(404).json({ status: 'error', message: 'Booking not found' });
            }

            // Send the booking as JSON response
            res.status(200).json({ status: 'success', data: booking });
        } catch (error) {
            console.log('An error occurred while fetching booking by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },
    getBookingByServiceProviderId: async (req, res) => {
        const serviceProviderId = req.params.id;
        try {
            // Retrieve the booking with the specified ID from the database
            const booking = await queryAsync('SELECT * FROM Booking WHERE serviceProviderId = ?', [serviceProviderId]);

            // Check if booking exists
            if (!booking.length) {
                return res.status(404).json({ status: 'error', message: 'Booking not found' });
            }

            // Send the booking as JSON response
            res.status(200).json({ status: 'success', data: booking });
        } catch (error) {
            console.log('An error occurred while fetching booking by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },

    deleteBooking: async (req, res) => {
        const bookingId = req.params.id;
        try {
            // Delete the booking with the specified ID from the database
            await queryAsync('DELETE FROM Booking WHERE bookingId = ?', [bookingId]);

            // Send success response
            res.status(200).json({ status: 'success', message: 'Booking deleted successfully' });
        } catch (error) {
            console.log('An error occurred while deleting booking:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    },
    updateBookingStatus: async (req, res) => {
        try {
          // Extract bookingId and bookingStatus from request body
          const { bookingId, bookingStatus } = req.body;
      
          // Update the booking status in the database
          const query = 'UPDATE Booking SET bookingStatus = ? WHERE bookingId = ?';
          const result = await queryAsync(query, [bookingStatus, bookingId]);
          // Check if the update was successful
          if (result.affectedRows === 1) {
            const bookingQuery = `SELECT * FROM Booking`
            const booking = await queryAsync(bookingQuery)

            res.status(200).json({ success: true, data: booking, message: 'Booking status updated successfully' });
          } else {
            res.status(500).json({ success: false, error: 'Booking not found or unable to update status' });
          }
        } catch (error) {
          console.error('Error updating booking status:', error);
          res.status(500).json({ success: false, error: 'Internal server error' });
        }
      },
      

    addBooking: async (req, res) => {
        const {
            customerId,
            serviceProviderId,
            serviceId,
            categoryId,
            location,
            amount,
            date ,
            time,
            phoneNumber,
            workDescription,
            additionalNotes,
            bookingStatus,
            paymentStatus,
            reviewId
        } = req.body;
        console.log(req.body)
        try {
            // Insert the new booking into the database
            const query = `
                INSERT INTO Booking (
                    customerId,
                    serviceProviderId,
                    serviceId,
                    categoryId,
                    location,
                    amount,
                    date ,
                    time,
                    phoneNumber,
                    workDescription,
                    additionalNotes,
                    bookingStatus,
                    paymentStatus,
                    reviewId,
                    createdAt,
                    updatedAt
                ) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?,?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
            const values = [
                customerId,
                serviceProviderId,
                serviceId, 
                categoryId,
                JSON.stringify(location),
                amount,
                date ,
                time,
                phoneNumber,
                workDescription,
                additionalNotes,
                bookingStatus,
                paymentStatus,
                JSON.stringify(reviewId) 
            ];
            await queryAsync(query, values);
    
           
            res.status(201).json({ status: 'success', message: 'Booking added successfully' });
        } catch (error) {
            console.log('An error occurred while adding booking:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
    
    
};

export default bookingController;

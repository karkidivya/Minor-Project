import util from 'util';
import db from '../../db.js'; // Adjust the path based on your directory structure

// Promisify the db.query method
const queryAsync = util.promisify(db.query).bind(db);

const bookingController = {
    getBooking: async (req, res) => {
        try {
            // Retrieve bookings from the database
            const bookings = await queryAsync('SELECT * FROM Booking');
            console.log(bookings)
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


  ////  checkout
    addBooking: async (req, res) => {
        const {bookingId, customerId, serviceProviderId, serviceId, dateAndTime, location, additionalNotes, bookingStatus, reviewId, createdAt, updatedAt } = req.body;
        try {

        //     {
        //         "bookingId": 5,
        //         "customerId": 2,
        //         "serviceProviderId": 3,
        //         "serviceId": 3,
        //         "dateAndTime": "2024-02-09T18:15:00.000Z",
        //         "location": 40.7128,
        //         "additionalNotes": "Bring tools",
        //         "bookingStatus": "confirmed",
        //         "reviewId": 1,
        //         "createdAt": "2024-02-08T18:15:00.000Z",
        //         "updatedAt": "2024-02-08T18:15:00.000Z"
        //   }
            // Insert the new booking into the database
            const query = 'INSERT INTO Booking (bookingId, customerId, serviceProviderId, serviceId, dateAndTime, location, additionalNotes, bookingStatus, reviewId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)';
            const values = [bookingId, customerId, serviceProviderId, serviceId, dateAndTime, location, additionalNotes, bookingStatus, reviewId, createdAt, updatedAt];
           console.log(values);
            await queryAsync(query, values);

            // Send success response
            res.status(201).json({ status: 'success', message: 'Booking added successfully' });
        } catch (error) {
            console.log('An error occurred while adding booking:', error);
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
};

export default bookingController;

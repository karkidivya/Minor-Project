// Importing necessary modules and components
'use client';
import React, { useState, useEffect } from 'react';
import esewaCall from './esewa'; // Make sure to import the esewaCall function
import axios from 'axios';

// Define the backend URL from environment variables
const backEnd = process.env.NEXT_PUBLIC_BACKEND_URL;

// Define the TestButton component
const TestButton = () => {
  // State to store booking details fetched from the backend
  const [bookingDetails, setBookingDetails] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [serviceProviderName, setServiceProviderName] = useState('');

  // Function to fetch booking details from the backend
  const fetchBookingDetails = async () => {
    try {
      const response = await axios.get(`${backEnd}/payment`);
      const updatedBookingDetails = response.data.length > 0 ? response.data : [{ bookingId: 123, amount: 123 }];
      setBookingDetails(updatedBookingDetails);
      console.log('Booking Details:', updatedBookingDetails);
    } catch (error) {
      console.error('Error fetching booking details:', error);
    }
  };
  

  const fetchCustomerDetail = async () => {
    try {
      let customerId = bookingDetails[0]?.customerId;
      const response = await axios.get(`${backEnd}/user/userDetail/${customerId}`);
      
      // Use the response.data if it's not an empty array, otherwise use a default value
      setCustomerName(response.data.length > 0 ? response.data : 'DefaultCustomerName');
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };
  
  const fetchServiceProviderDetail = async () => {
    try {
      let providerId = bookingDetails[0]?.serviceProviderId;
      const response = await axios.get(`${backEnd}/serviceProvider/${providerId}`);
      
      // Use the response.data if it's not an empty array, otherwise use a default value
      setServiceProviderName(response.data.length > 0 ? response.data : 'DefaultServiceProviderName');
    } catch (error) {
      console.error('Error fetching service provider details:', error);
    }
  };
  

  // useEffect hook to fetch booking details when the component mounts
  useEffect(() => {
    fetchBookingDetails();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // useEffect hook to fetch customer and service provider details
  useEffect(() => {
    if (Array.isArray(bookingDetails) && bookingDetails.length > 0) {
      fetchCustomerDetail();
      fetchServiceProviderDetail();
    }
  }, [bookingDetails]); // Re-run the effect when bookingDetails changes

  // Function to handle checkout button click
  const handleCheckout = (amount) => {
    console.log(amount);
    // Call the esewaCall function with the selected bookingId
    esewaCall(amount);
  };

  return (
    <div>
      {/* Display the fetched booking details in a table format */}
      <h2>Booking Details:</h2>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Service Provider Name</th>
            <th>Amount</th>
            {/* Add other table headers based on your data structure */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(bookingDetails) && bookingDetails.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId || 123}</td>
              <td>{customerName || 'DefaultCustomerName'}</td>
              <td>{serviceProviderName || 'DefaultServiceProviderName'}</td>
              <td>{booking.amount || 200}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Place the checkout button outside the loop */}
      <button onClick={() => handleCheckout(bookingDetails[0]?.amount || 200)}>
        Checkout
      </button>
    </div>
  );
};

export default TestButton;


// // export default TestButton;
// // Importing necessary modules and components
// 'use client';
// import React, { useState, useEffect } from 'react';
// import esewaCall from './esewa'; // Make sure to import the esewaCall function
// import axios from 'axios';

// // Define the backend URL from environment variables
// const backEnd = process.env.NEXT_PUBLIC_BACKEND_URL;

// // Define the TestButton component
// const TestButton = () => {
//   // State to store booking details fetched from the backend
//   const [bookingDetails, setBookingDetails] = useState([{bookingId:123,amount:123}]);
//   const [customerName, setCustomerName] = useState('');
//   const [serviceProviderName, setServiceProviderName] = useState('');

//   // Function to fetch booking details from the backend
//   const fetchBookingDetails = async () => {
//     try {
//       const response = await axios.get(`${backEnd}/payment`);
//       setBookingDetails(response.data); // Assuming the data from the backend is an array
//     } catch (error) {
//       console.error('Error fetching booking details:', error);
//     }
//   };

//   const fetchCustomerDetail = async () => {
//     try {
//       let customerId = bookingDetails[0].customerId;
//       const response = await axios.get(`${backEnd}/user/userDetail/${customerId}`);
//       setCustomerName(response.data); // Assuming the data from the backend is a string (name)
//     } catch (error) {
//       console.error('Error fetching customer details:', error);
//     }
//   };

//   const fetchServiceProviderDetail = async () => {
//     try {
//       let providerId = bookingDetails[0].serviceProviderId;
//       const response = await axios.get(`${backEnd}/serviceProvider/${providerId}`);
//       setServiceProviderName(response.data); // Assuming the data from the backend is a string (name)
//     } catch (error) {
//       console.error('Error fetching service provider details:', error);
//     }
//   };

//   // useEffect hook to fetch booking details when the component mounts
//   useEffect(() => {
//     fetchBookingDetails();
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   // useEffect hook to fetch customer and service provider details
//   useEffect(() => {
//     if (bookingDetails.length > 0) {
//       fetchCustomerDetail();
//       fetchServiceProviderDetail();
//     }
//   }, [bookingDetails]); // Re-run the effect when bookingDetails changes

//   // Function to handle checkout button click
//   const handleCheckout = (amount) => {
//     console.log(amount)
//     // Call the esewaCall function with the selected bookingId
//     esewaCall(amount);
//   };

//   return (
//     <div>
//       {/* Display the fetched booking details in a table format */}
//       <h2>Booking Details:</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>Customer Name</th>
//             <th>Service Provider Name</th>
//             <th>Amount</th>
//             {/* Add other table headers based on your data structure */}
//           </tr>
//         </thead>
//         <tbody>
//           {bookingDetails.map((booking) => (
//             <tr key={booking.bookingId}>
//               <td>{booking.bookingId || 123}</td>
//               <td>{customerName || Aahish}</td>
//               <td>{serviceProviderName || Shrestha}</td>
//               <td>{booking.amount || 200}</td>

//               {/* Add other table cells based on your data structure */}
//             </tr>
//             <>{console.log(booking)}</>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => handleCheckout(booking.amount||200)}>
//         Checkout
//       </button>
//     </div>
//   );
// };

// export default TestButton;

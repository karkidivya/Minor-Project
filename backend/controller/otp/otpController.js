import twilio from 'twilio';

// Twilio credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const client = twilio(accountSid, authToken);

// Generate a random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Store generated OTPs temporarily (you may want to use a more persistent storage in production)
const otps = {};
const otpController = {
 sendOTP : (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const otp = generateOTP();

    // Store the OTP with the phone number
    otps[phoneNumber] = otp;

    // Send OTP via Twilio
    client.messages.create({
        body: `Your OTP is ${otp}`,
        from: twilioPhoneNumber,
        to: phoneNumber
    })
    .then(message => {
        console.log(`OTP sent successfully to ${phoneNumber}`);
        res.status(200).send('OTP sent successfully');
    })
    .catch(error => {
        console.error(`Error sending OTP to ${phoneNumber}:`, error);
        res.status(500).send('Failed to send OTP');
    });
    },

     verifyOTP : (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const otp = req.body.otp;

    // Check if OTP matches
    if (otps[phoneNumber] && otps[phoneNumber] == otp) {
        // Clear OTP from storage
        delete otps[phoneNumber];
        res.status(200).send('OTP verification successful');
    } else {
        res.status(400).send('Invalid OTP');
    }
}

}

export default otpController
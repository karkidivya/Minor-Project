import twilio from 'twilio';
import dotenv from 'dotenv';
// Twilio credentials
const accountSid = process.env.accountSid
const authToken = process.env.authToken
const twilioPhoneNumber = process.env.twilioPhoneNumber

const client = twilio(accountSid, authToken);

// Generate a random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Store generated OTPs temporarily (you may want to use a more persistent storage in production)
const otps = {};
const otpController = {
 sendOTP : async (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber, accountSid)
    const otp = await generateOTP();
    console.log(otp)

    // Store the OTP with the phone number
    otps[phoneNumber] = otp;

    // Send OTP via Twilio
    await client.messages.create({
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

     verifyOTP : async (req, res) => {
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
import twilio from 'twilio';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Twilio credentials
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioPhoneNumber = process.env.twilioPhoneNumber;
const verifySid = process.env.verifySid
// Create Twilio client
const client = twilio(accountSid, authToken);

// Generate a random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Store generated OTPs temporarily (you may want to use a more persistent storage in production)
const otps = {};

const otpController = {
    sendOTP: async (req, res) => {
        client.verify.v2
        .services(verifySid)
        .verifications.create({ to: "+9779828896039", channel: "sms" })
        .then((verification) => console.log(verification.status))
        .then(() => {
            console.log("otp sent")
            res.status(200).send('OTP sent successfully');
        // client.verify.v2
        // .services(verifySid)
        // .verificationChecks.create({ to: "+9779828896039", code: otpCode })
        // .then((verification_check) => console.log(verification_check.status))
        // .then(() => readline.close());
        
        }).catch((err) => {
        console.log('From Otp controller',err )
        res.status(500).json({reason: err})
        })
    },

    verifyOTP: async (req, res) => {
        const phoneNumber = req.body.phoneNumber;
        const otp = req.body.otp;

        client.verify.v2
        .services(verifySid)
        .verificationChecks.create({to: "+9779828896039", code: otp})
        .then((verification_check) => {
            console.log(verification_check)
            res.status(200).send('OTP verification successful');
        }).catch((err) => {
            console.log('From Otp controller',err )
            res.status(500).json({reason: error})
        })

    }
};

export default otpController;

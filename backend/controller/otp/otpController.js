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
        .then((verification) => {
            console.log(verification)
            if(verification.status == 'pending')
                return
            else 
                throw Error("Couldn't be sent")
        })
        .then(() => {
            console.log("otp sent")
            res.status(200).send('OTP sent successfully');
        }).catch((err) => {
        console.log('Error Otp sendinng controller' )
        res.status(500).json({reason: err})
        })
    },

    verifyOTP: async (req, res) => {
        // const phoneNumber = req.body.phoneNumber;
        const otp = req.body.otp;

        client.verify.v2
        .services(verifySid)
        .verificationChecks.create({to: "+9779828896039", code: otp})
        .then((verification_check) => {
            console.log(verification_check)
            if(verification_check.status == 'approved')
                res.status(200).send('OTP verification successful');
            else
                throw Error("Wrong Otp")
        }).catch((err) => {
            console.log('From Otp controller',err )
            res.status(500).json({reason: err})
        })

    }
};

export default otpController;

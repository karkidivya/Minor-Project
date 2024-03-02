
import express from 'express'
import verifyPayment from '../controller/Payment/esewa.js'

const esewaRouter = express.Router()

esewaRouter.post(
    '/verify-payment',
    verifyPayment,
);


export default esewaRouter
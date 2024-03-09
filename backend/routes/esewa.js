
import express from 'express'
import {verifyPayment,paymentDetail} from '../controller/Payment/esewa.js'

const esewaRouter = express.Router()

esewaRouter.get('/',paymentDetail)
esewaRouter.post(
    '/verify-payment',
    verifyPayment,
);


export default esewaRouter
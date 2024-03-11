import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export default async function esewaCall(bookingId, amount) {
  const uuidf = uuidv4();
  const backEnd = process.env.NEXT_PUBLIC_BACKEND_URL; // Replace with your actual backend URL
  const paymentdata = {bookingId,uuidf,amount}
  try {
    // Make an asynchronous axios call
    await axios.post(`${backEnd}/payment`,paymentdata);

    // Continue with the rest of the code only if the axios call is successful
    const Message = `total_amount=${amount},transaction_uuid=${uuidf},product_code=EPAYTEST`;
    const secret = "8gBm/:&EnhH.1/q";
    const hash = CryptoJS.HmacSHA256(Message, secret);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
    const params = {
      amount: `${amount}`,
      failure_url: "https://google.com",
      product_delivery_charge: "0", // Adjust as needed
      product_service_charge: "0", // Adjust as needed
      product_code: "EPAYTEST",
      signature: hashInBase64,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: "http://localhost:3000/checkout/esewaPaySuccess",
      tax_amount: "0", // Adjust as needed
      total_amount: `${amount}`,
      transaction_uuid: uuidf,
    };

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error("Error in axios call:", error);
    // Handle the error as needed
  }
}

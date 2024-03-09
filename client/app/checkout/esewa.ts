// import CryptoJS from "crypto-js";
// import { uuid } from 'uuidv4';

// export default function esewaCall(amount){
//   const total_amount =  0;
//   const tax_amount = 0;
//   const product_delivery_charge = 0;
//   const product_service_charge = 0;

//   // const uuidf = uuid();
//   const uuidf = uuid();  
//     const Message = `total_amount=${total_amount},transaction_uuid=${uuidf},product_code=EPAYTEST`
//     const secret = "8gBm/:&EnhH.1/q"
//     var hash = CryptoJS.HmacSHA256(Message, secret);
//     var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
//     var path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
//     var params = {
//       amount: `${amount}`,
//       failure_url: "https://google.com",
//       product_delivery_charge: `${product_delivery_charge}`,
//       product_service_charge: `${product_service_charge}`,
//       product_code: "EPAYTEST",
//       signature: hashInBase64,
//       signed_field_names: "total_amount,transaction_uuid,product_code",
//       success_url: `http://localhost:3000/checkout/esewaPaySuccess`,
//       tax_amount: `${tax_amount}`,
//       total_amount: `${total_amount}`,
//       transaction_uuid: uuidf,
//     }
//     var form = document.createElement("form");
//     form.setAttribute("method", "POST");
//     form.setAttribute("action", path);

//     for (var key in params) {
//       var hiddenField = document.createElement("input");
//       hiddenField.setAttribute("type", "hidden");
//       hiddenField.setAttribute("name", key);
//       hiddenField.setAttribute(
//         "value",
//         params[key as keyof typeof params].toString()
//       );
//       form.appendChild(hiddenField);
//     }

//     document.body.appendChild(form);
//     form.submit();

// }

import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

export default function esewaCall(amount) {
  const uuidf = uuidv4();

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
}

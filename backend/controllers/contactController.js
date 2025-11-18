import { transporter } from "../config/transporter.js";
import { sendWhatsApp } from "../services/whatsappService.js";

export const sendInquiry = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    // 1️⃣ Email Send
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Website Contact Inquiry",
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // // 2️⃣ WhatsApp Message
    // await sendWhatsApp({ name, email, phone, message });

    // 3️⃣ Response
    res.status(200).json({
      success: true,
      message: "Inquiry sent successfully!",
    });

  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Try again.",
    });
  }
};

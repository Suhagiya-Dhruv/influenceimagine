import dotenv from "dotenv";
import twilio from "twilio";
dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export const sendWhatsApp = async (data) => {
  return await client.messages.create({
    from: process.env.TWILIO_WHATSAPP,
    to: process.env.OWNER_WHATSAPP,
    body: `
📩 New Website Inquiry

👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
📝 Message: ${data.message}
    `,
  });
};

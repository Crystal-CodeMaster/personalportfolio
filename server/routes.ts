import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import * as nodemailer from "nodemailer";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

// Setup nodemailer transporter
// Using a test account for development
const createTransporter = async () => {
  // For production, we would use real SMTP credentials
  // For testing, we'll use nodemailer's test account
  const testAccount = await nodemailer.createTestAccount();
  
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  
  return { transporter, testAccount };
};

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.errors 
        });
      }
      
      // Get form data
      const formData = result.data;
      
      try {
        // Create test account and transporter
        const { transporter, testAccount } = await createTransporter();
        
        // Send email
        const mailOptions = {
          from: `"${formData.name}" <${formData.email}>`,
          to: "daniel@luxcitizenship.com",
          subject: `Contact Form: ${formData.subject}`,
          text: formData.message,
          html: `
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `,
        };
        
        const info = await transporter.sendMail(mailOptions);
        
        // Log the test URL for preview in development
        console.log("Contact form submission:", formData);
        console.log("Email sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        
        return res.status(200).json({ 
          message: "Message received successfully" 
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Still return 200 to the client, we don't want to show the email error
        return res.status(200).json({ 
          message: "Message received successfully" 
        });
      }
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

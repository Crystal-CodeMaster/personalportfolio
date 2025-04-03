import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Daniel Atz</title>
        <meta name="description" content="Privacy Policy for Daniel Atz's personal website." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <motion.div 
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: {currentYear}-03-22</p>
              
              <h2>1. Introduction</h2>
              <p>
                Welcome to Daniel Atz's personal website. I respect your privacy and am committed to protecting your personal data. 
                This Privacy Policy will inform you about how I look after your personal data when you visit my website 
                and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>2. Information I May Collect</h2>
              <p>I may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal identification information</strong>: When you contact me through the website, 
                  I may collect your name, email address, and any other information you provide in your message.
                </li>
                <li>
                  <strong>Usage data</strong>: Information about how you use the website, including your IP address, 
                  browser type, time spent on pages, pages visited, and other diagnostic data.
                </li>
                <li>
                  <strong>Cookies</strong>: The website may use cookies to enhance your experience. You can instruct your 
                  browser to refuse all cookies or to indicate when a cookie is being sent.
                </li>
              </ul>

              <h2>3. How I Use Your Information</h2>
              <p>I use the information I collect for various purposes, including to:</p>
              <ul>
                <li>Respond to your inquiries and communication</li>
                <li>Improve the website and user experience</li>
                <li>Monitor website usage and analytics</li>
                <li>Protect the website from misuse or unauthorized access</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                I implement appropriate security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
                storage is 100% secure, and I cannot guarantee absolute security.
              </p>

              <h2>5. Third-Party Services</h2>
              <p>
                This website may use third-party services such as analytics providers and booking services. These third parties 
                may have access to your personal data only to perform specific tasks on my behalf and are obligated not to disclose 
                or use it for any other purpose.
              </p>

              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the following data protection rights:</p>
              <ul>
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to rectification if your information is inaccurate or incomplete</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to restriction of processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact me at:{" "}
                <a href="mailto:daniel@luxcitizenship.com" className="text-primary hover:text-primary/80">
                  daniel@luxcitizenship.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Terms of Service | Daniel Atz</title>
        <meta name="description" content="Terms of Service for Daniel Atz's personal website." />
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
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: {currentYear}-03-22</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Daniel Atz's personal website. These Terms of Service ("Terms") govern your use of this website. 
                By accessing or using this website, you agree to be bound by these Terms. If you disagree with any part of the 
                Terms, you may not access the website.
              </p>

              <h2>2. Intellectual Property</h2>
              <p>
                The content on this website, including but not limited to text, graphics, images, logos, button icons, 
                software, audio clips, and videos, is the property of Daniel Atz or his content suppliers and is protected by 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                The compilation of all content on this website is the exclusive property of Daniel Atz and is protected by 
                international copyright laws. All software used on this website is the property of Daniel Atz or his software 
                suppliers and is protected by international copyright laws.
              </p>

              <h2>3. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Daniel Atz's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
                license, you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Daniel Atz's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
                Daniel Atz at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                you must destroy any downloaded materials in your possession, whether in electronic or printed format.
              </p>

              <h2>4. Disclaimer</h2>
              <p>
                The materials on Daniel Atz's website are provided on an 'as is' basis. Daniel Atz makes no warranties, expressed 
                or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties 
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or 
                other violation of rights.
              </p>
              <p>
                Further, Daniel Atz does not warrant or make any representations concerning the accuracy, likely results, or 
                reliability of the use of the materials on his website or otherwise relating to such materials or on any sites 
                linked to this site.
              </p>

              <h2>5. Limitations</h2>
              <p>
                In no event shall Daniel Atz or his suppliers be liable for any damages (including, without limitation, damages 
                for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
                materials on Daniel Atz's website, even if Daniel Atz or a Daniel Atz authorized representative has been notified 
                orally or in writing of the possibility of such damage.
              </p>

              <h2>6. Links to Other Websites</h2>
              <p>
                This website may contain links to third-party websites or services that are not owned or controlled by Daniel Atz. 
                Daniel Atz has no control over and assumes no responsibility for the content, privacy policies, or practices of any 
                third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that Daniel Atz shall not be responsible or liable, directly or indirectly, for any 
                damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, 
                goods, or services available on or through any such websites or services.
              </p>

              <h2>7. Revisions and Errata</h2>
              <p>
                The materials appearing on Daniel Atz's website could include technical, typographical, or photographic errors. 
                Daniel Atz does not warrant that any of the materials on his website are accurate, complete, or current. Daniel Atz 
                may make changes to the materials contained on his website at any time without notice.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws applicable to the residence of Daniel Atz, 
                without regard to its conflict of law provisions. Any legal suit, action, or proceeding arising out of, or related to, 
                these Terms or the website shall be instituted exclusively in the federal courts or the courts of the state in which 
                Daniel Atz resides.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                Daniel Atz reserves the right, at his sole discretion, to modify or replace these Terms at any time. What constitutes 
                a material change will be determined at Daniel Atz's sole discretion. By continuing to access or use this website 
                after those revisions become effective, you agree to be bound by the revised terms.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact me at:{" "}
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

export default TermsOfService;
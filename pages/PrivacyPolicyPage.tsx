import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Privacy Policy"
        description="Read the privacy policy for KayJay Security, a trusted security provider in Sri Lanka. We are committed to protecting your personal information and being transparent about its use."
        imageUrl="https://picsum.photos/1200/630?random=18"
      />
      <PageHeader title="Privacy Policy" subtitle="Our Commitment to Your Privacy" />

      <section className="py-16 md:py-24 bg-white" data-aos="fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2>Introduction</h2>
            <p>
              KayJay Security Services (Pvt) Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://kayjaysecurity.com (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and company name, that you voluntarily give to us when you fill out a contact form, request a quote, or apply for a career.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </li>
            </ul>

            <h2>Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
                <li>Respond to your inquiries and offer support.</li>
                <li>Email you regarding your quote or application.</li>
                <li>Improve our website and services.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We do not share, sell, rent or trade your information with any third parties for their promotional purposes. We may share information we have collected about you in certain situations, such as with our third-party service providers who perform services for us or on our behalf, including data analysis, email delivery, and hosting services.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic">
              KayJay Security Services (Pvt) Ltd.<br />
              618, Aluthmawatha Road,<br />
              Colombo 15, Sri Lanka<br />
              Email: <a href="mailto:kayjay@kayjay-group.com">kayjay@kayjay-group.com</a>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
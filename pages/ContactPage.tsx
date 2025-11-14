
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ReCaptchaV2 from '../components/ReCaptchaV2';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import BranchNetworkMap from '../components/BranchNetworkMap';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactInfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-green text-kayjay-gold mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-kayjay-green mb-3">{title}</h3>
    <div className="text-gray-600 space-y-1">{children}</div>
  </div>
);

const generalContactInfo = [
    { title: "Phone", icon: <FaPhoneAlt className="h-8 w-8" />, content: <><p><a href="tel:+94722249254" className="hover:text-kayjay-gold font-bold">+94 (72) 224 9254 (Hotline)</a></p><p><a href="tel:+94112522302" className="hover:text-kayjay-gold">+94 (11) 252 2302</a></p><p><a href="tel:+94112529242" className="hover:text-kayjay-gold">+94 (11) 252 9242</a></p><p><a href="tel:+94112526060" className="hover:text-kayjay-gold">+94 (11) 252 6060</a></p><p><a href="tel:+94114891888" className="hover:text-kayjay-gold">+94 (11) 489 1888</a></p></> },
    { title: "Email", icon: <FaEnvelope className="h-8 w-8" />, content: <><p><a href="mailto:kayjay@kayjay-group.com" className="hover:text-kayjay-gold">kayjay@kayjay-group.com</a></p><p><a href="mailto:sales@kayjay-group.com" className="hover:text-kayjay-gold">sales@kayjay-group.com</a></p><p><a href="mailto:marketing@kayjay-group.com" className="hover:text-kayjay-gold">marketing@kayjay-group.com</a></p></> },
];

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestCall: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;

    if (!formState.name.trim()) newErrors.name = 'Full Name is required.';
    
    if (!formState.email.trim()) {
        newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formState.email)) {
        newErrors.email = 'Please enter a valid email address.';
    }

    if (formState.requestCall && !formState.phone.trim()) {
        newErrors.phone = 'Phone Number is required for a call back.';
    } else if (formState.phone.trim() && !phoneRegex.test(formState.phone)) {
        newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formState.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formState.message.trim()) newErrors.message = 'Message is required.';
    
    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please verify that you are not a robot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    setServerMessage(null);

    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('phone', formState.phone);
    formData.append('subject', formState.subject);
    formData.append('message', formState.message);
    formData.append('requestCall', String(formState.requestCall));
    formData.append('g-recaptcha-response', recaptchaToken!);
    // Honeypot field
    const websiteUrl = (e.target as HTMLFormElement).website_url.value;
    if(websiteUrl) {
        setIsLoading(false);
        return;
    }
    formData.append('website_url', websiteUrl);

    try {
        const response = await fetch('/api/contact-handler.php', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok && result.success) {
            setSubmitted(true);
        } else {
            setServerMessage(result.message || 'An error occurred. Please try again.');
            window.grecaptcha.reset();
            setRecaptchaToken(null);
        }
    } catch (error) {
        console.error('Submission error:', error);
        setServerMessage('An unexpected network error occurred. Please try again later.');
        window.grecaptcha.reset();
        setRecaptchaToken(null);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div>
      <Seo
        title="Contact Sri Lanka's Leading Security Company"
        description="Get in touch with KayJay Security, Sri Lanka's most trusted security provider. Contact us for professional security guards, cash transit services, or a custom security solution."
        keywords="contact security company, security services contact, kayjay security address, security solutions sri lanka"
        imageUrl="https://picsum.photos/1200/630?random=15"
      />
      <PageHeader title="Contact Us" subtitle="We're here to help. Reach out to Sri Lanka's No.1 security service provider with your needs and we'll respond promptly." />

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* General Contact Info */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
            {generalContactInfo.map((info, index) => (
                <div key={info.title} data-aos="fade-up" data-aos-delay={index * 100}>
                    <ContactInfoCard title={info.title} icon={info.icon}>
                        {info.content}
                    </ContactInfoCard>
                </div>
            ))}
          </div>

          {/* Office Locations */}
          <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-kayjay-green mb-4">Our Offices</h2>
              <p className="text-lg text-gray-700">Visit us for a personal consultation.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Head Office */}
              <div data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                      <div className="flex items-start mb-4">
                          <FaMapMarkerAlt className="h-8 w-8 text-kayjay-green mr-4 mt-1 flex-shrink-0"/>
                          <div>
                              <h3 className="text-2xl font-bold text-kayjay-green">Head Office</h3>
                              <address className="not-italic text-gray-600">
                                  618, Aluthmawatha Road,<br/>
                                  Colombo 15, Sri Lanka.
                              </address>
                          </div>
                      </div>
                      <a href="https://www.google.com/maps/search/?api=1&query=Kay+Jay+Group+Colombo+15" target="_blank" rel="noopener noreferrer" className="font-bold text-kayjay-gold hover:underline mb-6 inline-block">View on Map</a>
                      <div className="rounded-lg shadow-xl overflow-hidden aspect-video mt-auto">
                          <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.297433890332!2d79.86593967499708!3d6.963691993033588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2585675555555%3A0x199343336a538260!2sKay%20Jay%20Group!5e0!3m2!1sen!2slk!4v1722442253389!5m2!1sen!2slk" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              allowFullScreen={true} 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              title="KayJay Security Head Office Location"
                          ></iframe>
                      </div>
                  </div>
              </div>

              {/* Corporate Office */}
              <div data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                      <div className="flex items-start mb-4">
                          <FaMapMarkerAlt className="h-8 w-8 text-kayjay-green mr-4 mt-1 flex-shrink-0"/>
                          <div>
                              <h3 className="text-2xl font-bold text-kayjay-green">Corporate Office</h3>
                              <address className="not-italic text-gray-600">
                                  No 337/A Nawala Rd,<br/>
                                  Sri Jayawardenepura Kotte,<br/>
                                  Sri Lanka, 10100.
                              </address>
                          </div>
                      </div>
                      <a href="https://www.google.com/maps/search/?api=1&query=No+337/A+Nawala+Rd,+Sri+Jayawardenepura+Kotte" target="_blank" rel="noopener noreferrer" className="font-bold text-kayjay-gold hover:underline mb-6 inline-block">View on Map</a>
                      <div className="rounded-lg shadow-xl overflow-hidden aspect-video mt-auto">
                          <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.028972621003!2d79.90159297499616!3d6.88673399311101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2b55555555%3A0x2db401a5573752e!2sKay%20Jay%20Security!5e0!3m2!1sen!2slk!4v1722442345631!5m2!1sen!2slk" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              allowFullScreen={true} 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              title="KayJay Security Corporate Office Location"
                          ></iframe>
                      </div>
                  </div>
              </div>

          </div>
        </div>
      </section>

      <BranchNetworkMap />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-kayjay-green mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-700">Feel free to send us your project details. We’ll respond promptly with a tailored proposal for top security solutions to meet your requirements.</p>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md shadow-md" role="alert">
                  <p className="font-bold text-lg">Thank You!</p>
                  <p>Your message has been received. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {serverMessage && (
                    <div className="sm:col-span-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                      <p>{serverMessage}</p>
                    </div>
                  )}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number {formState.requestCall ? <span className="text-red-500">*</span> : '(Optional)'}</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      value={formState.phone} 
                      onChange={handleChange} 
                      required={formState.requestCall}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                   <div className="sm:col-span-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" name="subject" id="subject" value={formState.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center">
                      <input
                        id="requestCall"
                        name="requestCall"
                        type="checkbox"
                        checked={formState.requestCall}
                        onChange={handleChange}
                        className="h-4 w-4 text-kayjay-green border-gray-300 rounded focus:ring-kayjay-gold"
                      />
                      <label htmlFor="requestCall" className="ml-3 block text-sm font-medium text-gray-700">
                        Request a call back
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={5} value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                   <div className="sm:col-span-2">
                    <ReCaptchaV2
                      sitekey="6LdWJAwsAAAAAHP6OmRNkRtKR4vz4c1AU3t1UApk"
                      onVerify={(token) => {
                        setRecaptchaToken(token);
                        if (errors.recaptcha) {
                          setErrors(prev => ({...prev, recaptcha: ''}));
                        }
                      }}
                    />
                    {errors.recaptcha && <p className="text-red-500 text-sm mt-1">{errors.recaptcha}</p>}
                  </div>
                   <div className="sm:col-span-2 text-right">
                    <button type="submit" disabled={isLoading} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-full text-kayjay-green bg-kayjay-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-transform transform hover:scale-105 disabled:bg-yellow-300 disabled:cursor-not-allowed">
                      {isLoading ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
                  {/* Honeypot field for bot protection */}
                  <div className="absolute left-[-5000px]" aria-hidden="true">
                    <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
                  </div>
                </form>
              )}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

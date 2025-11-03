
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactInfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-blue text-kayjay-gold mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-kayjay-blue mb-3">{title}</h3>
    <div className="text-gray-600 space-y-1">{children}</div>
  </div>
);

const contactInfo = [
    { title: "Head Office", icon: <FaMapMarkerAlt className="h-8 w-8" />, content: <><p>618, Aluthmawatha Road,</p><p>Colombo 15, Sri Lanka</p></> },
    { title: "Phone", icon: <FaPhoneAlt className="h-8 w-8" />, content: <><p><a href="tel:+94112522302" className="hover:text-kayjay-gold">+94 (11) 252 2302</a></p><p><a href="tel:+94112529242" className="hover:text-kayjay-gold">+94 (11) 252 9242</a></p><p><a href="tel:+94112526060" className="hover:text-kayjay-gold">+94 (11) 252 6060</a></p><p><a href="tel:+94114891888" className="hover:text-kayjay-gold">+94 (11) 489 1888</a></p></> },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setServerMessage(null);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('phone', formState.phone);
    formData.append('subject', formState.subject);
    formData.append('message', formState.message);
    formData.append('requestCall', String(formState.requestCall));

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
        }
    } catch (error) {
        console.error('Submission error:', error);
        setServerMessage('An unexpected network error occurred. Please try again later.');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div>
      <Seo
        title="Contact Sri Lanka's Top Security Company"
        description="Get in touch with KayJay Security. As a leading private security company in Sri Lanka, we are ready to discuss your needs for professional security guards and top security solutions."
        imageUrl="https://picsum.photos/1200/630?random=15"
      />
      <PageHeader title="Contact Us" subtitle="We're here to help. Reach out to Sri Lanka's No.1 security service provider with your needs and we'll respond promptly." />

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
                <div key={info.title} data-aos="fade-up" data-aos-delay={index * 100}>
                    <ContactInfoCard title={info.title} icon={info.icon}>
                        {info.content}
                    </ContactInfoCard>
                </div>
            ))}
          </div>
          
          <div className="mt-16 md:mt-24" data-aos="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Find Us Here</h2>
              <p className="text-lg text-gray-700">Visit our head office in Colombo for a personal consultation.</p>
            </div>
            <div className="rounded-lg shadow-2xl overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!3m2!1sen!2slk!4v1761888387711!5m2!1sen!2slk!6m8!1m7!1siKYUudPD3zcQ1_SK83BApw!2m2!1d6.96368666818841!2d79.86851459127769!3f311.48483!4f0!5f0.7820865974627469" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KayJay Security Head Office Location"
                ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-700">Feel free to send us your project details. We’ll respond promptly with a tailored proposal for top security solutions to meet your requirements.</p>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md shadow-md" role="alert">
                  <p className="font-bold text-lg">Thank You!</p>
                  <p>Your message has been received. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {serverMessage && (
                    <div className="sm:col-span-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                      <p>{serverMessage}</p>
                    </div>
                  )}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
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
                  </div>
                   <div className="sm:col-span-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" name="subject" id="subject" required value={formState.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center">
                      <input
                        id="requestCall"
                        name="requestCall"
                        type="checkbox"
                        checked={formState.requestCall}
                        onChange={handleChange}
                        className="h-4 w-4 text-kayjay-blue border-gray-300 rounded focus:ring-kayjay-gold"
                      />
                      <label htmlFor="requestCall" className="ml-3 block text-sm font-medium text-gray-700">
                        Request a call back
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={5} required value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold"></textarea>
                  </div>
                   <div className="sm:col-span-2 text-right">
                    <button type="submit" disabled={isLoading} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-full text-kayjay-blue bg-kayjay-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-transform transform hover:scale-105 disabled:bg-yellow-300 disabled:cursor-not-allowed">
                      {isLoading ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
                  {/* Honeypot field for bot protection */}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
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
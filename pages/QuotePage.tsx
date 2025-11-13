
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';

const services = [
  'Manned Guard Services',
  'Electronic Security (CCTV, Alarms)',
  'Retail Security',
  'In-Store Civil Detectives',
  'Cash-in-Transit (CIT)',
  'Cash Management Solutions',
  'Pre-employment Checks',
  'Security Training',
  'Logistics (Prime Movers)',
  'Other (Please specify in message)',
];

const QuotePage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedServices(prev => 
      checked ? [...prev, value] : prev.filter(service => service !== value)
    );
     if (errors.services) {
        setErrors(prevErrors => ({ ...prevErrors, services: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;

    if (selectedServices.length === 0) {
        newErrors.services = "Please select at least one service.";
    }

    if (!formState.name.trim()) newErrors.name = 'Full Name is required.';
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formState.phone.trim()) {
        newErrors.phone = 'Phone Number is required.';
    } else if (!phoneRegex.test(formState.phone)) {
        newErrors.phone = 'Please enter a valid phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerMessage(null);

    if (!validate()) {
        return;
    }

    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('company', formState.company);
    formData.append('email', formState.email);
    formData.append('phone', formState.phone);
    formData.append('message', formState.message);
    formData.append('services', selectedServices.join(', '));

    try {
        const response = await fetch('/api/quote-handler.php', {
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
        title="Request a Quote | KayJay Security Solutions"
        description="Get a tailored security quote from Sri Lanka's No.1 security service provider. Select your required services, from professional guards to cash management, and we'll provide a custom solution."
        imageUrl="https://picsum.photos/1200/630?random=17"
      />
      <PageHeader title="Request a Quote" subtitle="Let us tailor a security solution that meets your exact needs. Please provide your details below." />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-kayjay-light-gray p-8 rounded-lg shadow-xl" data-aos="fade-up">
            {submitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md" role="alert">
                <p className="font-bold text-lg">Thank You!</p>
                <p>Your quote request has been received. Our team will review your requirements and get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {serverMessage && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                    <p>{serverMessage}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-kayjay-green mb-6 border-b-2 border-kayjay-gold pb-2">Select Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => (
                      <div key={service} className="flex items-center">
                        <input
                          id={service}
                          name="services"
                          type="checkbox"
                          value={service}
                          onChange={handleServiceChange}
                          className="h-5 w-5 text-kayjay-green border-gray-300 rounded focus:ring-kayjay-gold"
                        />
                        <label htmlFor={service} className="ml-3 block text-sm font-medium text-gray-700">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                   {errors.services && <p className="text-red-500 text-sm mt-2">{errors.services}</p>}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-kayjay-green mb-6 border-b-2 border-kayjay-gold pb-2">Your Details</h3>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                      <input type="text" name="company" id="company" value={formState.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Additional Details</label>
                  <textarea name="message" id="message" rows={5} value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" placeholder="Please provide any additional details about your security needs, location, or specific requirements."></textarea>
                </div>

                <div className="text-right">
                  <button type="submit" disabled={isLoading} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-full text-kayjay-green bg-kayjay-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-transform transform hover:scale-105 disabled:bg-yellow-300 disabled:cursor-not-allowed">
                    {isLoading ? 'Submitting...' : 'Submit Request'}
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

export default QuotePage;
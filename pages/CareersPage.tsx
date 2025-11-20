
import React, { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ReCaptchaV2 from '../components/ReCaptchaV2';
import { FaUpload } from 'react-icons/fa';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const CareersPage: React.FC = () => {
  const jobOpportunities = [
    'Security Guard',
    'Surveillance & Technical Support',
    'Administration & Operations',
    'Trainer / Instructor',
    'Other',
  ];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    position: jobOpportunities[0],
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
       if (errors.cvFile) {
        setErrors(prevErrors => ({...prevErrors, cvFile: ''}));
      }
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

    if (!formState.phone.trim()) {
        newErrors.phone = 'Phone Number is required.';
    } else if (!phoneRegex.test(formState.phone)) {
        newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!cvFile) {
        newErrors.cvFile = 'CV file is required. Please upload your CV.';
    } else if (cvFile.size > 5 * 1024 * 1024) { // 5MB limit
        newErrors.cvFile = 'File size must be less than 5MB.';
    }

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
    formData.append('position', formState.position);
    formData.append('coverLetter', formState.coverLetter);
    if (cvFile) {
      formData.append('cvFile', cvFile);
    }
    formData.append('g-recaptcha-response', recaptchaToken!);
    // Honeypot field
    const websiteUrl = (e.target as HTMLFormElement).website_url.value;
    if(websiteUrl) {
        setIsLoading(false);
        return;
    }
    formData.append('website_url', websiteUrl);

    try {
        const response = await fetch('/api/careers-handler.php', {
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
        title="Security Guard Jobs & Careers in Sri Lanka | Join KayJay"
        description="Build your career with Sri Lanka's leading private security company. We offer security guard jobs and other opportunities for dedicated professionals. Apply today!"
        keywords="security careers, security guard jobs sri lanka, security jobs colombo, join security company"
        imageUrl="/images/og-careers.jpg"
      />
      <PageHeader title="Join KayJay Security" subtitle="Build a meaningful career with Sri Lanka's No.1 security service provider, a team that values integrity, responsibility, and service." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Opportunities */}
            <div className="bg-kayjay-light-gray p-8 rounded-lg" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-2xl font-bold text-kayjay-green mb-6">Opportunities for Security Guards in Sri Lanka</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Professional Security Guard</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Surveillance & Technical Support</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Administration & Operations</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Trainer / Instructor</li>
              </ul>
            </div>
            
            {/* Requirements */}
            <div className="bg-kayjay-light-gray p-8 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-kayjay-green mb-6">Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Clean background record</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Basic physical fitness</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Strong sense of responsibility</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Good communication skills</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Willingness to undergo training & assessments</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Ready to start your career with a leader in Sri Lankan security? Fill out the form below to apply.</p>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto bg-white text-kayjay-dark-gray p-8 rounded-lg shadow-2xl" data-aos="fade-up" data-aos-delay="100">
              {submitted ? (
                 <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md" role="alert">
                  <p className="font-bold text-lg">Application Received!</p>
                  <p>Thank you for your interest in KayJay Security. If your qualifications match our needs, we will be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {serverMessage && (
                    <div className="sm:col-span-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                      <p>{serverMessage}</p>
                    </div>
                  )}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                    <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                    <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" required />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                   <div className="sm:col-span-1">
                    <label htmlFor="position" className="block text-sm font-medium">Position Applied For</label>
                    <select id="position" name="position" value={formState.position} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold sm:text-sm rounded-md">
                        {jobOpportunities.map(job => <option key={job}>{job}</option>)}
                    </select>
                  </div>
                   <div className="sm:col-span-2">
                     <label className="block text-sm font-medium">Upload CV</label>
                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-kayjay-green hover:text-kayjay-gold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-kayjay-gold">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="cvFile" type="file" ref={fileInputRef} onChange={handleFileChange} className="sr-only" accept=".pdf,.doc,.docx" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                            {cvFile && <p className="text-sm font-semibold text-green-600 pt-2">Selected: {cvFile.name}</p>}
                        </div>
                     </div>
                     {errors.cvFile && <p className="text-red-500 text-sm mt-1">{errors.cvFile}</p>}
                   </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="coverLetter" className="block text-sm font-medium">Cover Letter (Optional)</label>
                    <textarea name="coverLetter" id="coverLetter" rows={5} value={formState.coverLetter} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold"></textarea>
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
                    <button type="submit" disabled={isLoading} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-full text-white bg-kayjay-green hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-transform transform hover:scale-105 disabled:bg-kayjay-green/50 disabled:cursor-not-allowed">
                      {isLoading ? 'Submitting...' : 'Submit Application'}
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

export default CareersPage;

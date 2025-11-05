
import React, { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import { FaUpload } from 'react-icons/fa';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
        setServerMessage('CV file is required. Please upload your CV.');
        return;
    }

    setIsLoading(true);
    setServerMessage(null);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('phone', formState.phone);
    formData.append('position', formState.position);
    formData.append('coverLetter', formState.coverLetter);
    if (cvFile) {
      formData.append('cvFile', cvFile);
    }

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
        title="Security Careers in Sri Lanka | Join KayJay Security"
        description="Join the team at Sri Lanka's No.1 private security company. We offer meaningful careers for professional security guards with opportunities for growth and development."
        imageUrl="https://picsum.photos/1200/630?random=14"
      />
      <PageHeader title="Join KayJay Security" subtitle="Build a meaningful career with Sri Lanka's No.1 security service provider, a team that values integrity, responsibility, and service." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Opportunities */}
            <div className="bg-kayjay-light-gray p-8 rounded-lg" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-2xl font-bold text-kayjay-blue mb-6">Opportunities for Security Guards in Sri Lanka</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Professional Security Guard</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Surveillance & Technical Support</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Administration & Operations</li>
                <li className="flex items-center"><span className="text-kayjay-gold mr-3">◆</span> Trainer / Instructor</li>
              </ul>
            </div>
            
            {/* Requirements */}
            <div className="bg-kayjay-light-gray p-8 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-kayjay-blue mb-6">Requirements</h3>
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

      <section className="py-16 md:py-24 bg-kayjay-blue text-white">
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
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {serverMessage && (
                    <div className="sm:col-span-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                      <p>{serverMessage}</p>
                    </div>
                  )}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                    <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                    <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <input type="tel" name="phone" id="phone" required value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
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
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-kayjay-blue hover:text-kayjay-gold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-kayjay-gold">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="cvFile" type="file" ref={fileInputRef} onChange={handleFileChange} className="sr-only" accept=".pdf,.doc,.docx" required />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                            {cvFile && <p className="text-sm font-semibold text-green-600 pt-2">Selected: {cvFile.name}</p>}
                        </div>
                     </div>
                   </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="coverLetter" className="block text-sm font-medium">Cover Letter (Optional)</label>
                    <textarea name="coverLetter" id="coverLetter" rows={5} value={formState.coverLetter} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold"></textarea>
                  </div>
                   <div className="sm:col-span-2 text-right">
                    <button type="submit" disabled={isLoading} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-full text-white bg-kayjay-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-transform transform hover:scale-105 disabled:bg-kayjay-blue/50 disabled:cursor-not-allowed">
                      {isLoading ? 'Submitting...' : 'Submit Application'}
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

export default CareersPage;

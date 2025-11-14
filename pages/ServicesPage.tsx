import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ServiceSidebar from '../components/ServiceSidebar';
// FIX: `FaCctv` does not exist in `react-icons/fa`. Replaced with `FaTv`.
import { FaStore, FaUserSecret, FaGavel, FaTv, FaConciergeBell, FaUserShield } from 'react-icons/fa';

const ServiceCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-green text-kayjay-gold mb-6 flex-shrink-0">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-kayjay-green mb-4">{title}</h3>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);

const servicesData = [
    { title: "Retail Trained Officers", icon: <FaStore className="h-8 w-8" />, content: "Specially trained guards for retail outlets, ensuring a safe and secure shopping environment." },
    { title: "In-Store Civil Detectives", icon: <FaUserSecret className="h-8 w-8" />, content: "Discreet undercover loss-prevention agents to protect your assets and minimize shrinkage." },
    { title: "Civil Recovery Management", icon: <FaGavel className="h-8 w-8" />, content: "Professional handling of recoveries, disputes, and security enforcement with tact and authority." },
    { title: "Electronic Security Systems", icon: <FaTv className="h-8 w-8" />, content: "State-of-the-art CCTV systems, access control, intrusion alarms, and advanced sensors." },
    { title: "Customer Service Officers", icon: <FaConciergeBell className="h-8 w-8" />, content: "Highly-trained front desk, visitor handling, and reception support personnel." },
    { title: "Professional Security Guards", icon: <FaUserShield className="h-8 w-8" />, content: "Certified and trained security guards screened to the highest standards for competence and trustworthiness." },
];

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Comprehensive Security Solutions in Sri Lanka"
        description="Explore a full spectrum of security services in Sri Lanka by KayJay, the nation's trusted provider. From professional security guards to electronic surveillance, we have you covered."
        keywords="security solutions sri lanka, professional security guards, electronic security, cash transit, security services, manned guarding"
        imageUrl="https://picsum.photos/1200/630?random=3"
      />
      <PageHeader title="Our Top Security Solutions" subtitle="A wide spectrum of professional security services in Sri Lanka to meet both commercial and residential needs." />

      <div className="bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 py-16 md:py-24">
                <ServiceSidebar />
                <main className="flex-1 min-w-0 space-y-16">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {servicesData.map((service, index) => (
                                <div key={service.title} data-aos="fade-up" data-aos-delay={index * 50}>
                                    <ServiceCard title={service.title} icon={service.icon}>
                                        <p>{service.content}</p>
                                    </ServiceCard>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-kayjay-green mb-4">Pre-employment Checks & Testing</h2>
                                <p className="text-lg text-gray-700 mb-6">Before recruitment, every candidate for our security services in Sri Lanka undergoes a rigorous vetting process to ensure only reliable individuals are deployed.</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Background / criminal record verification</li>
                                    <li>Aptitude testing</li>
                                    <li>Psychological and integrity assessments</li>
                                </ul>
                            </div>
                            <div>
                                <img src="https://picsum.photos/800/600?random=3" alt="A professional conducting a background check for a private security company in Sri Lanka" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <img src="https://picsum.photos/800/600?random=4" alt="Professional security guards in Sri Lanka during a training session" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-bold text-kayjay-green mb-4">Training & Development</h2>
                                <p className="text-lg text-gray-700">We conduct extensive training courses—practical, theoretical, and scenario-based—for both local and international clients. Officers are trained in surveillance, emergency response, client handling, and technology usage.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-kayjay-green mb-4">Cash Transit & Management</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">As a trusted security provider in Sri Lanka, we deliver total cash management solutions designed to protect cash during transportation. Our protocols, armored vehicles, and trained personnel ensure maximum protection.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
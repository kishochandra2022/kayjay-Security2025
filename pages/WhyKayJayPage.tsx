
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { FaShieldAlt, FaUsers, FaTrophy, FaBullseye, FaClipboardCheck, FaMicrochip } from 'react-icons/fa';

const DifferentiatorCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-blue text-kayjay-gold mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-kayjay-blue mb-3">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
);

const differentiators = [
    { title: "Integrated Approach", icon: <FaShieldAlt className="h-8 w-8" />, content: "We don’t just supply guards or systems—we integrate both to form layered security that is robust and responsive." },
    { title: "Experienced Personnel", icon: <FaUsers className="h-8 w-8" />, content: "All our professional security guards are meticulously screened, certified, and continuously trained to handle any situation with professionalism." },
    { title: "Proven Track Record", icon: <FaTrophy className="h-8 w-8" />, content: "With over 45 years of trusted security services in Sri Lanka, our respected reputation stands as testament to our capabilities." },
    { title: "Client-Centered Solutions", icon: <FaBullseye className="h-8 w-8" />, content: "Each contract is customized to the client’s specific assets, risk profile, and operational environment for maximum effectiveness." },
    { title: "Reliability & Accountability", icon: <FaClipboardCheck className="h-8 w-8" />, content: "Our operations are structured for complete accountability, transparency, and an efficient, rapid response when you need it most." },
    { title: "Technological Edge", icon: <FaMicrochip className="h-8 w-8" />, content: "We leverage the latest in surveillance and access control technology to provide you with a modern security infrastructure." }
];

const WhyKayJayPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Why Choose KayJay | Trusted Security Provider in Sri Lanka"
        description="Discover why we are a top-rated private security company in Sri Lanka. Our integrated approach, experienced professional security guards, and proven track record set us apart."
        imageUrl="https://picsum.photos/1200/630?random=13"
      />
      <PageHeader title="Why Choose KayJay Security?" subtitle="As the leading private security company in Sri Lanka, we combine manpower and electronic security for holistic, high-impact solutions." />
      
      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, index) => (
                <div key={d.title} data-aos="fade-up" data-aos-delay={index * 100}>
                    <DifferentiatorCard title={d.title} icon={d.icon}>
                        {d.content}
                    </DifferentiatorCard>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Ready for Unparalleled Security?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">Partner with a leader in Sri Lankan security. Let us build a tailored solution that brings you peace of mind.</p>
          <Link to="/request-a-quote" className="bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyKayJayPage;
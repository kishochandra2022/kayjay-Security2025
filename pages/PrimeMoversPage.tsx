import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ServiceSidebar from '../components/ServiceSidebar';
import { FaShieldAlt, FaDollarSign, FaBox, FaWeightHanging, FaTrophy, FaHandshake } from 'react-icons/fa';

const FeatureCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-green text-kayjay-gold mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-kayjay-green mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
);

const features = [
    { title: "Safety", icon: <FaShieldAlt className="h-8 w-8" />, content: "We place serious focus on safety. We are known to be specialists with high level of safety standard handling. Our drivers are experienced with loading processes with strictest safety requirements." },
    { title: "Cost Effective", icon: <FaDollarSign className="h-8 w-8" />, content: "Guaranteed for cheaper than standard road freight. We can pick your equipment up from your business, houses and dealers or wherever they are, we move them for you." },
    { title: "Fully Enclosed", icon: <FaBox className="h-8 w-8" />, content: "No stones, insects, cracked glass or etc to contend with on arrival of your valuable assets." },
    { title: "Weight is Not an Issue", icon: <FaWeightHanging className="h-8 w-8" />, content: "We have 40 feet Trailers and Prime Movers. Use our service to experience the difference in handling any load." },
    { title: "Quality", icon: <FaTrophy className="h-8 w-8" />, content: "Quality is a natural outcome of our focus on safety and precision. Our fleet is well- equipped for every job and our drivers are very experienced." },
    { title: "Trust", icon: <FaHandshake className="h-8 w-8" />, content: "Pickup and delivery dates are guaranteed, ensuring reliability and peace of mind for all our clients." }
];

const PrimeMoversPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="KayJay Prime Movers | Logistics by Sri Lanka's No.1 Security Company"
        description="KayJay Prime Movers offers a wide range of cost-effective and safe logistical services in Sri Lanka. As part of a trusted security company, we handle your transportation needs with the highest standards."
        imageUrl="https://picsum.photos/1200/630?random=6"
      />
      <PageHeader title="KAYJAY PRIME MOVERS" subtitle="Seamless & Secure Transportation Solutions Across Sri Lanka." />
      
      <div className="bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 py-16 md:py-24">
                <ServiceSidebar />
                <main className="flex-1 min-w-0 space-y-16">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src="https://picsum.photos/800/600?random=6" alt="A large transportation truck from KayJay Prime Movers, part of a leading security company in Sri Lanka" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-kayjay-green mb-4">A Legacy of Trust, A Future in Motion</h2>
                                <div className="text-gray-700 space-y-4">
                                    <p>
                                    Gaining over 40 years of experience, Kayjay Group has become an iconic name in Security. We are a modern, vision-driven, and fast developing group of companies. Now we have move forward with transportation services in Sri Lanka. We offer a wide range of logistical services to meet the complex needs of companies.
                                    </p>
                                    <p>
                                    We thoroughly believe that the key to success is to always integrate with our customers to make their transport solutions as seamless as possible. We are committed to realizing their logistics needs at an optimum cost. Our strength lies in the wealth of our experience of working with so many different industries, by handling their logistic services. As one of the fastest growing logistic infrastructure providers, our main aim is to manage operations smoothly so that goods are at the right place at the right time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-center text-kayjay-green mb-12">Our Commitment to Excellence</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={feature.title} data-aos-delay={index * 100}>
                                    <FeatureCard title={feature.title} icon={feature.icon}>
                                        {feature.content}
                                    </FeatureCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-kayjay-green mb-10">Key Clients</h2>
                            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-600">
                                <p className="text-xl font-semibold">Jacobi Carbons Lanka (Pvt) Ltd</p>
                                <p className="text-xl font-semibold">Dart Global Logistics (Pvt) Ltd</p>
                                <p className="text-xl font-semibold">Tajit & Company (Pvt) Ltd</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeMoversPage;
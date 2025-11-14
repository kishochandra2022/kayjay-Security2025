import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ServiceSidebar from '../components/ServiceSidebar';
import { FaCheck } from 'react-icons/fa';

const CashManagementPage: React.FC = () => {
    const clients = [
        "Citibank", "NDB Bank", "DFCC Bank", "Seylan Bank", "LOLC Finance", "LB Finance", 
        "Arpico Finance", "LankaTiles", "Cargills", "Singer Finance", "ODEL", 
        "Cinnamon Hotels", "John Keells Logistics", "United Motors", "Mobitel", "Public Bank", 
        "UniMo", "Perera & Sons", "Nawaloka Hospitals", "UltraTech Cement", "LECO"
    ];
    
    const branches = [
        "Colombo 15 (BCP)", "Jaffna", "Batticaloa", "Anuradhapura", "Kurunegala", "Kandy",
        "Bandarawela", "Rathnapura", "Gampaha", "Matara", "Kalutara"
    ];

  return (
    <div>
      <Seo
        title="ISO Certified Cash Management Solutions in Sri Lanka"
        description="KayJay's Cash Management division provides premier end-to-end cash handling, ATM management, and secure logistics solutions, solidifying our position as Sri Lanka's trusted security provider."
        keywords="cash management sri lanka, atm management, secure logistics, cash handling, iso 9001, financial operations"
        imageUrl="https://picsum.photos/1200/630?random=7"
      />
      <PageHeader 
        title="KAYJAY Cash Management" 
        subtitle="ISO 9001:2015 Certified | Over 45 Years of Industry Leadership" 
      />
      
      <div className="bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 py-16 md:py-24">
                <ServiceSidebar />
                <main className="flex-1 min-w-0 space-y-16">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img src="https://picsum.photos/800/600?random=7" alt="A secure cash handling and processing facility by a top security company in Sri Lanka" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy"/>
                            </div>
                            <div className="text-lg text-gray-700 space-y-4">
                                <h2 className="text-3xl font-bold text-kayjay-green mb-4">About Our Cash Management Services</h2>
                                <p>KAYJAY Cash Management is Sri Lanka’s premier provider of secure, end-to-end cash handling solutions. With over three decades of experience, we’ve earned the trust of leading banks, corporates, and hospitality brands through our commitment to professionalism, integrity, and innovation.</p>
                                <p>Our specialized ARM division ensures the highest standards in asset protection, financial logistics, and operational efficiency. We are a trusted security provider, continuously evolving through cutting-edge technology, rigorous training, and global best practices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-kayjay-light-gray p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-kayjay-green mb-3">Our Vision</h3>
                                <p className="text-gray-600">To be the most preferred total cash management solutions provider in Sri Lanka.</p>
                            </div>
                            <div className="bg-kayjay-light-gray p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-kayjay-green mb-3">Our Mission</h3>
                                <p className="text-gray-600">To deliver the highest standards of service by empowering our team, enhancing stakeholder relationships, and cultivating a culture of excellence and integrity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-center text-kayjay-green mb-12">Our Services</h2>
                        <div className="overflow-x-auto rounded-lg shadow-lg">
                            <table className="min-w-full bg-white">
                                <thead className="bg-kayjay-green text-white">
                                    <tr>
                                        <th className="text-left py-4 px-6 font-semibold">Category</th>
                                        <th className="text-left py-4 px-6 font-semibold">Services</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b">
                                        <td className="py-4 px-6 font-medium">Cash Logistics</td>
                                        <td className="py-4 px-6">Cash-in-transit, secure armed guard services, vault facilities</td>
                                    </tr>
                                    <tr className="bg-kayjay-light-gray border-b">
                                        <td className="py-4 px-6 font-medium">ATM & SSD Management</td>
                                        <td className="py-4 px-6">Replenishment, maintenance, reconciliation, journal roll replacement</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 px-6 font-medium">Financial Operations</td>
                                        <td className="py-4 px-6">Salary packeting & distribution, teller services, foreign currency handling</td>
                                    </tr>
                                    <tr className="bg-kayjay-light-gray border-b">
                                        <td className="py-4 px-6 font-medium">Technology & Reporting</td>
                                        <td className="py-4 px-6">Real-time cash tracking, dashboards, audit trails, exception alerts</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-medium">Compliance & Security</td>
                                        <td className="py-4 px-6">Role-based access, customizable reports, central bank deposits</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-kayjay-green mb-4">Fleet & Infrastructure</h2>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> GPS-enabled, CCTV-equipped soft-skin vehicles with engine force-stop systems.</li>
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Compliant with international security protocols.</li>
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Deployment tailored to client requirements.</li>
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Vault facilities maintained to global safety standards.</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-kayjay-green mb-4">Our Team of Professional Security Guards</h2>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Dedicated operational units for each service vertical.</li>
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> 100% vetting and training prior to deployment.</li>
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Certified in weapons handling and operational procedures.</li>
                                    <li className="flex items-start"><FaCheck className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Adherence to high professional and security benchmarks.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
      
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-center text-kayjay-green mb-12">Our Branch Network</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                            {branches.map(branch => (
                                <div key={branch} className="bg-kayjay-light-gray p-4 rounded-lg">
                                    <p className="font-semibold text-kayjay-green">{branch}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center text-gray-600">
                             <p><span className="font-bold">Corporate Office:</span> No. 337/A Nawala Rd, Sri Jayawardenepura Kotte, 10100</p>
                             <p><span className="font-bold">Head Office:</span> No. 500, Nawala Road, Rajagiriya</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-center text-kayjay-green mb-12">Our Valued Clients</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 text-center">
                            {clients.map(client => (
                                <div key={client}>
                                    <p className="text-gray-700 font-medium">{client}</p>
                                </div>
                            ))}
                            <div className="text-gray-700 font-medium">...and many more.</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CashManagementPage;
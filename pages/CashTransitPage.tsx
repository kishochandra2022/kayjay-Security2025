import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ServiceSidebar from '../components/ServiceSidebar';
import { 
    FaShieldAlt, 
    FaTruck, 
    FaCreditCard, 
    FaExchangeAlt, 
    FaCar, 
    FaCalculator, 
    FaHandHoldingUsd,
    FaShippingFast,
    FaThumbsUp,
    FaSyncAlt,
    FaCogs,
    FaCheckCircle,
    FaBuilding
} from 'react-icons/fa';

const ServiceCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-kayjay-light-gray p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-blue text-kayjay-gold mb-5 flex-shrink-0">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-kayjay-blue mb-3">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const IconListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="text-kayjay-gold mr-3 mt-1 flex-shrink-0"><FaCheckCircle /></span>
        <span>{children}</span>
    </li>
);

const CashTransitPage: React.FC = () => {
  const services = [
    { icon: <FaTruck className="h-8 w-8"/>, title: "Armored Vehicle Services", description: "Secure collection and delivery service using our state-of-the-art armored vehicle fleet." },
    { icon: <FaCreditCard className="h-8 w-8"/>, title: "ATM Replenishment", description: "Cash replenishment and first-line maintenance services for ATM networks of banks." },
    { icon: <FaExchangeAlt className="h-8 w-8"/>, title: "Cash-In-Transit (CIT)", description: "Secure movement of cash and high-value items within a bank’s branch network." },
    { icon: <FaCar className="h-8 w-8"/>, title: "Non-Armored Secure Transport", description: "Discreet and secure transportation for assets that don't require armored vehicles." },
    { icon: <FaCalculator className="h-8 w-8"/>, title: "Cash Counting & Processing", description: "Accurate and efficient cash counting, sorting, and processing in our secure facilities." },
    { icon: <FaHandHoldingUsd className="h-8 w-8"/>, title: "Cash Pickup & Delivery (CPD)", description: "Secure pickup & delivery of cash and cheques for large corporate houses & business outlets." },
  ];

  const benefits = [
      { icon: <FaShippingFast className="h-8 w-8"/>, title: "Faster", description: "Save time with quick cash processing and avoid wasting employee time in bank queues." },
      { icon: <FaShieldAlt className="h-8 w-8"/>, title: "Safer", description: "Your cash is secured from the moment we touch it, using sophisticated armored vehicles and eliminating employee risk." },
      { icon: <FaThumbsUp className="h-8 w-8"/>, title: "Reliability", description: "We set high SLAs and meet them. We provide year-round service, including weekends and out-of-hours." },
      { icon: <FaSyncAlt className="h-8 w-8"/>, title: "Flexibility", description: "Order cash when you need it and choose your collection/delivery slots. Quality customer support is always available." },
      { icon: <FaCogs className="h-8 w-8"/>, title: "Efficiency", description: "Our solutions integrate with your POS, eliminate uninsured losses, reduce insurance costs, and cut admin expenses." },
  ];

  const vaultFeatures = [
      "Access control system",
      "Heat or smoke sensor inside vault",
      "Motion sensors",
      "Emergency telephone and/or panic/hold-up alarm",
      "CCTV camera coverage to monitor vault access covering 24 hrs and recordings",
      "Door contact-magnetic (electric) sensor",
      "Locking day gate (Grill gate)",
      "Duel control locking system",
      "Emergency lights",
      "Central Monitoring Station (CMS)",
  ];

  return (
    <div>
      <Seo
        title="Secure Cash Transit Services in Sri Lanka"
        description="Secure your assets with our professional cash transit and management solutions. As a trusted security provider in Sri Lanka, we offer armed escorts, secure vehicles, and real-time tracking."
        imageUrl="https://picsum.photos/1200/630?random=5"
      />
      <PageHeader title="Cash Transit & Cash Management" subtitle="Secure solutions from a trusted security provider that safeguard your cash assets through every link of the chain." />
      
      <div className="bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 py-16 md:py-24">
                <ServiceSidebar />
                <main className="flex-1 min-w-0 space-y-16">

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Total Cash Management Solutions</h2>
                                <p className="text-lg text-gray-700 mb-6">KayJay Security Services provides total cash management solutions that protect the valuable cash during logistics. KayJay Cash Solutions combines everything we know about cash handling and security. Our infrastructure is more secure, our technology’s smarter and our partnerships with banks are deeper.</p>
                                <p className="text-gray-700">It all comes together to keep your cash flowing smoothly, swiftly and safely around your business. We will take care to handle cash in a reliable way. The cash services segment is gradually evolving as a key and fast-growing service offering within the private security services industry.</p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/800/600?random=5" alt="A secure armored vehicle for private security services in Sri Lanka" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-center text-kayjay-blue mb-12">Our Cash Transit Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={service.title} data-aos-delay={index * 100}>
                                    <ServiceCard title={service.title} icon={service.icon}>
                                        {service.description}
                                    </ServiceCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-blue">Why Choose KayJay Cash Services?</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Kayjay having the experience in providing cash handling facilities for many years have now geared our services with modern technology of GPS tracking of all the vehicles involved in cash operations. This will enable us as to monitor the vehicle movements at any given time of the day. For all our personal who are in the cash management team we have obtained a due diligence by our personal division. We will make sure the right money is safer in the right place at the right time.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={benefit.title} data-aos-delay={index * 100} className="bg-kayjay-light-gray p-6 rounded-lg shadow-md text-center">
                                     <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-blue text-kayjay-gold mb-5">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-kayjay-blue mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
      
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <img src="https://picsum.photos/800/600?random=8" alt="A high-security vault door" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy" />
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="flex items-center mb-4">
                                    <FaBuilding className="h-10 w-10 text-kayjay-blue mr-4"/>
                                    <h2 className="text-3xl font-bold text-kayjay-blue">State-of-the-Art Vault Facility</h2>
                                </div>
                                <p className="text-gray-700 mb-6">We operate an in-house vault constructed to UL Class 2-6 standards with an Alpha door. Our total facility includes collection of funds, sorting, bundling, transferring to the Central Bank, and holding the balance in our vault overnight. Our 24/7 Central Monitoring Station (CMS) links CCTV, GPS, and alarms to a central location for integrated safety, ready to dispatch a special armed guard service team and communicate with police, hospitals, and fire stations in an emergency.</p>
                                <h3 className="text-2xl font-bold text-kayjay-blue mb-4">The Vault Security System</h3>
                                 <ul className="space-y-3 text-gray-700">
                                    {vaultFeatures.map(feature => (
                                        <IconListItem key={feature}>{feature}</IconListItem>
                                    ))}
                                </ul>
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

export default CashTransitPage;

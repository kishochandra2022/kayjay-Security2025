import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import ServiceSidebar from '../components/ServiceSidebar';
import { 
    FaShoppingCart, 
    FaCalendarCheck, 
    FaUniversity, 
    FaIndustry, 
    FaUserTie, 
    FaBuilding,
    FaCheckCircle
} from 'react-icons/fa';

const IconListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="text-kayjay-gold mr-3 mt-1 flex-shrink-0"><FaCheckCircle /></span>
        <span>{children}</span>
    </li>
);

const SectionCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl" data-aos="fade-up">
        <div className="flex items-center mb-6">
            <div className="bg-kayjay-blue text-kayjay-gold rounded-full p-3 mr-4">
                {icon}
            </div>
            <h2 className="text-3xl font-bold text-kayjay-blue">{title}</h2>
        </div>
        <div className="text-gray-700 space-y-4">
            {children}
        </div>
    </div>
);

const SecurityPersonnelPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Security Personnel Services | KayJay Security Sri Lanka"
        description="Expert security personnel for retail, events, public, and industrial sectors. Kay Jay provides trained officers, civil detectives, and integrated solutions."
        imageUrl="https://picsum.photos/1200/630?random=19"
      />
      <PageHeader 
        title="KAY JAY SECURITY PERSONNEL" 
        subtitle="Expertly Trained Personnel for Every Sector" 
      />
      
      <div className="bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 py-16 md:py-24">
                <ServiceSidebar />
                <main className="flex-1 min-w-0 space-y-16">
                  {/* Sectors */}
                  <SectionCard title="Retail, Restaurant & Supermarket Sector" icon={<FaShoppingCart className="h-8 w-8"/>}>
                    <p>"Kay Jay Security Personnel are generally perceived as providing static guarding services, however they also have the proven ability to fulfill an expert customer services role." The present day´s retail customers demand more from their shopping experience: more time, more choice and more information. The staff employed to protect your store and its staff must also be able to act as your ambassadors by enhancing the retail experience for shoppers, therefore attracting new visitors. Kay Jay have the expertise and resources to provide the calibre of trained personnel that meet the needs of such positions.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-kayjay-blue mb-3">In Retail Stores we provide:</h3>
                        <ul className="space-y-2">
                          <IconListItem>Retail trained officers</IconListItem>
                          <IconListItem>In-store civil detectives</IconListItem>
                          <IconListItem>Civil recovery management</IconListItem>
                          <IconListItem>Electronic security solutions (CCTV, Access control)</IconListItem>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-kayjay-blue mb-3">In Shopping Centers we provide:</h3>
                        <ul className="space-y-2">
                          <IconListItem>Customer service officers</IconListItem>
                          <IconListItem>Guard tour patrolling</IconListItem>
                          <IconListItem>CCTV monitoring and Control room staff</IconListItem>
                          <IconListItem>Footfall analysis</IconListItem>
                        </ul>
                      </div>
                    </div>
                  </SectionCard>

                  <SectionCard title="Special Events" icon={<FaCalendarCheck className="h-8 w-8"/>}>
                    <p>Kay Jay knows that unique events require unique security solutions. We can provide the appropriate solutions for one-off occasions such as sporting and entertainment events. We can provide security for concerts, corporate functions, exhibitions, and public gatherings, ensuring a safe and orderly environment for all attendees.</p>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3 mt-6">Event services include:</h3>
                    <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      <IconListItem>Access Control & Crowd Management</IconListItem>
                      <IconListItem>VIP Protection</IconListItem>
                      <IconListItem>Perimeter Security</IconListItem>
                      <IconListItem>Emergency Response Planning</IconListItem>
                      <IconListItem>Parking and Traffic Control</IconListItem>
                      <IconListItem>CCTV monitoring</IconListItem>
                    </ul>
                  </SectionCard>

                  <SectionCard title="Public Sector (Banking, Hotels, etc)" icon={<FaUniversity className="h-8 w-8"/>}>
                    <p>If your security team is dealing with the public 24 hours a day, you have to be confident that they are recruited and trained to the highest possible standards. The public's perception of your organisation will be determined in part by the attitudes and behaviour of your security team. You expect them to treat the public with empathy and understanding and to react professionally to any security situation. Kay Jay has over thirty five years experience in providing security teams to the public sector in a wide variety of roles.</p>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3 mt-6">We provide security personnel for:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <ul className="space-y-2">
                            <IconListItem>Hospitals</IconListItem>
                            <IconListItem>Banks</IconListItem>
                            <IconListItem>Courts</IconListItem>
                        </ul>
                        <ul className="space-y-2">
                            <IconListItem>Schools, Colleges and Universities</IconListItem>
                            <IconListItem>Museums and Art Galleries</IconListItem>
                            <IconListItem>Government Institutions</IconListItem>
                        </ul>
                        <ul className="space-y-2">
                            <IconListItem>Hotels</IconListItem>
                            <IconListItem>Public transport hubs</IconListItem>
                        </ul>
                    </div>
                  </SectionCard>

                  <SectionCard title="Industrial Sector" icon={<FaIndustry className="h-8 w-8"/>}>
                    <p>The first person a client will speak to when visiting an office is a member of the security team. Their impressions of that company, and their culture, are formed on the basis of that first exchange. Kay Jay has many years of experience in providing security teams that meet these exacting requirements, and of ensuring that a clients first impressions are highly favourable.</p>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3 mt-6">We provide guarding to the following sectors:</h3>
                     <ul className="space-y-2 grid grid-cols-2 md:grid-cols-3 gap-x-8">
                        <IconListItem>Residential guarding</IconListItem>
                        <IconListItem>Garment factories</IconListItem>
                        <IconListItem>Factories FTZ</IconListItem>
                        <IconListItem>Tea industries</IconListItem>
                        <IconListItem>NGO & Embassies</IconListItem>
                        <IconListItem>Hotels</IconListItem>
                        <IconListItem>Warehouses</IconListItem>
                        <IconListItem>Large/small offices</IconListItem>
                        <IconListItem>Showrooms</IconListItem>
                        <IconListItem>Bare lands</IconListItem>
                     </ul>
                  </SectionCard>

                  <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl" data-aos="fade-up">
                      <div className="text-center mb-12">
                          <h2 className="text-3xl md:text-4xl font-bold text-kayjay-blue">TSS Solution (Total Security Solution)</h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                          <div>
                              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Objectives of TSS</h3>
                              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                  <li>Reduction in Operation Cost (Reduce Man Power).</li>
                                  <li>Using new technology for Security.</li>
                              </ul>
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Our Solution</h3>
                              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                  <li>Deployment of Trained Security guards</li>
                                  <li>Implementation of electronic security systems</li>
                                  <li>Implementation of central monitoring officers and a CMS station at site</li>
                                  <li>Constant supervision</li>
                                  <li>Prompt and effective after sales services</li>
                              </ul>
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Benefits of TSS</h3>
                               <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                  <li>Electronic Evidence, Footages will be available for all moments.</li>
                                  <li>Constant Supervision and increase in security productiveness.</li>
                                  <li>No initial cost for Electronic Security Systems with KJE Rental Program.</li>
                                  <li>Daily, Weekly, Monthly surveillance reports as per clients’ requirement.</li>
                              </ul>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
                          <div>
                              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">CMS Job Role</h3>
                              <p className="text-gray-700">The Central Monitoring Station (CMS) operator is responsible for 24/7 CCTV monitoring, ensuring all cameras are serviceable, and maintaining a Daily Occurrence Book (DOB). They must report any irregularities, security lapses, or system obstructions immediately. The CMS operator plays a crucial role in emergency response, acting as per instructions for fire, smoke, or other critical situations.</p>
                          </div>
                          <div>
                               <h3 className="text-2xl font-bold text-kayjay-blue mb-3">OIC Job Role</h3>
                               <p className="text-gray-700">The Officer-In-Charge (OIC) is responsible for preparing duty rosters, ensuring all guards adhere to their schedules, and maintaining the proper cadre of security personnel on site. The OIC supervises the team to guarantee that all security protocols are followed correctly and efficiently.</p>
                          </div>
                      </div>
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <SectionCard title="Security Consulting" icon={<FaUserTie className="h-8 w-8"/>}>
                          <ul className="space-y-2">
                            <IconListItem>Physical Safety and Security Tours of Each Property.</IconListItem>
                            <IconListItem>Review of Incident Reports & Other Foresee-ability Issues</IconListItem>
                            <IconListItem>Property Manual Review and Preparation</IconListItem>
                            <IconListItem>International Travel Security Consulting & Protection Service</IconListItem>
                            <IconListItem>Review of Property Security Procedures and Equipment</IconListItem>
                            <IconListItem>Management and Employee Safety & Security training</IconListItem>
                            <IconListItem>In-house Security Rules and Procedures</IconListItem>
                          </ul>
                      </SectionCard>
                      <SectionCard title="Industries We Cover" icon={<FaBuilding className="h-8 w-8"/>}>
                          <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            <IconListItem>Electronic Security Services</IconListItem>
                            <IconListItem>Armed Transport Services</IconListItem>
                            <IconListItem>Residential Protection</IconListItem>
                            <IconListItem>Corporate Protection</IconListItem>
                            <IconListItem>Wage packet Services</IconListItem>
                            <IconListItem>Healthcare Facilities</IconListItem>
                            <IconListItem>Residential Complexes</IconListItem>
                            <IconListItem>Corporate Buildings</IconListItem>
                            <IconListItem>Loss Prevention</IconListItem>
                            <IconListItem>Retail Venues</IconListItem>
                            <IconListItem>Parking Lots</IconListItem>
                            <IconListItem>Government institutions</IconListItem>
                            <IconListItem>Night Patrol</IconListItem>
                            <IconListItem>Hotel Security</IconListItem>
                          </ul>
                      </SectionCard>
                  </div>
                </main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPersonnelPage;

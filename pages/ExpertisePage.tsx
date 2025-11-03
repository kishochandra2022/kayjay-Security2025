import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import { 
    FaCertificate, 
    FaClipboardList, 
    FaUserTie, 
    FaIdCard, 
    FaBookOpen, 
    FaClock, 
    FaUserShield, 
    FaFileSignature, 
    FaDoorOpen, 
    FaFireExtinguisher,
    FaCheckCircle
} from 'react-icons/fa';

const IconListItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
    <li className="flex items-start">
        <span className="text-kayjay-gold mr-3 mt-1 flex-shrink-0">{icon}</span>
        <span>{children}</span>
    </li>
);

const ExpertisePage: React.FC = () => {
  return (
    <div>
      <Seo
        title="Expertise & Training | Professional Security Guards Sri Lanka"
        description="Discover the expertise that makes us a top security provider in Sri Lanka, including pre-employment checks and extensive training for our professional security guards."
        imageUrl="https://picsum.photos/1200/630?random=16"
      />
      <PageHeader 
        title="Our Expertise & Training" 
        subtitle="Reinforcing quality through comprehensive training and strict operational standards." 
      />
      
      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Training Courses Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl" data-aos="fade-up">
            <div className="flex items-center mb-6">
                <FaCertificate className="h-10 w-10 text-kayjay-blue mr-4"/>
                <h2 className="text-3xl font-bold text-kayjay-blue">Security Training Courses</h2>
            </div>
            <p className="text-gray-700 mb-6">KayJay Security provides comprehensive security training courses for local and international establishments, offering accreditation opportunities to develop management skills within the security sector. Our courses are designed for both established and aspiring managers.</p>
            <h3 className="text-xl font-bold text-kayjay-blue mb-4">Course Durations & Delivery</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                <li>Short-term courses (2 working days)</li>
                <li>Intense programs (up to 15 working days)</li>
                <li>Courses are conducted by well-trained officers at the client's location for convenience.</li>
            </ul>
            <h3 className="text-xl font-bold text-kayjay-blue mb-4">Key Areas Covered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
                <IconListItem icon={<FaCheckCircle />}>Health and Safety policy and procedures</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Security Legislation</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Principles of budgets and budgetary control</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Principles and application of contingency planning</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Disaster recovery & Risk analysis</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Electronic security</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Recruitment and selection</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Team building and leadership</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Conflict and Stress management</IconListItem>
                <IconListItem icon={<FaCheckCircle />}>Project planning</IconListItem>
            </div>
          </div>

          {/* Company Standards Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl" data-aos="fade-up">
             <div className="flex items-center mb-6">
                <FaClipboardList className="h-10 w-10 text-kayjay-blue mr-4"/>
                <h2 className="text-3xl font-bold text-kayjay-blue">Internal Company Training & Standards</h2>
            </div>
             <p className="text-gray-700 mb-8">Kay Jay Security conducts training that exceeds our competitors. The knowledge of our management team is passed on to our new employees. In addition to Ministry of Defense mandated certification, all personnel attend rigorous company training programs.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-kayjay-light-gray p-4 rounded-lg">
                    <div className="flex items-center text-lg font-semibold text-kayjay-blue mb-2"><FaUserTie className="mr-3"/>Uniforms & ID</div>
                    <p className="text-sm text-gray-600">Training on proper uniform standards and issuance of official ID cards.</p>
                </div>
                 <div className="bg-kayjay-light-gray p-4 rounded-lg">
                    <div className="flex items-center text-lg font-semibold text-kayjay-blue mb-2"><FaBookOpen className="mr-3"/>Standing Orders</div>
                    <p className="text-sm text-gray-600">Detailed explanation of Standing Orders with instructions for strict adherence.</p>
                </div>
                 <div className="bg-kayjay-light-gray p-4 rounded-lg">
                    <div className="flex items-center text-lg font-semibold text-kayjay-blue mb-2"><FaClock className="mr-3"/>Punching Procedure</div>
                    <p className="text-sm text-gray-600">Instruction on the correct procedure for Guard Tour Punching.</p>
                </div>
                <div className="bg-kayjay-light-gray p-4 rounded-lg">
                    <div className="flex items-center text-lg font-semibold text-kayjay-blue mb-2"><FaUserShield className="mr-3"/>Professional Conduct</div>
                    <p className="text-sm text-gray-600">Respectful conduct, understanding duties, and fulfilling responsibilities.</p>
                </div>
                <div className="bg-kayjay-light-gray p-4 rounded-lg">
                    <div className="flex items-center text-lg font-semibold text-kayjay-blue mb-2"><FaFileSignature className="mr-3"/>Documentation</div>
                    <p className="text-sm text-gray-600">Maintaining a clear, legible incident log (IB) and coordinating with management.</p>
                </div>
                <div className="bg-kayjay-light-gray p-4 rounded-lg">
                    <div className="flex items-center text-lg font-semibold text-kayjay-blue mb-2"><FaDoorOpen className="mr-3"/>Gate Pass & Checks</div>
                    <p className="text-sm text-gray-600">Proper procedures for Gate Passes, body frisking, and thorough physical checks.</p>
                </div>
             </div>
          </div>

          {/* Fire Training Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl" data-aos="fade-up">
            <div className="flex items-center mb-6">
                <FaFireExtinguisher className="h-10 w-10 text-kayjay-blue mr-4"/>
                <h2 className="text-3xl font-bold text-kayjay-blue">Fire Safety & Emergency Training</h2>
            </div>
            <p className="text-gray-700 mb-8">Our personnel are extensively trained in fire prevention, emergency response, and evacuation procedures to ensure the safety of your premises and people.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3">Understanding Fire</h3>
                    <ul className="space-y-2 text-gray-600">
                        <IconListItem icon={<FaCheckCircle />}>Composition and Types of Fires</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Identifying causes and preventive measures</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Physical protective measures and system checks</IconListItem>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3">Emergency Response Protocol</h3>
                    <ul className="space-y-2 text-gray-600">
                        <IconListItem icon={<FaCheckCircle />}>Immediate actions: Alarm, disconnect power</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Contacting emergency services (Police, Fire Brigade)</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Proper use of fire equipment (CO2, Dry Powder, etc.)</IconListItem>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3">Evacuation & Drills</h3>
                    <ul className="space-y-2 text-gray-600">
                        <IconListItem icon={<FaCheckCircle />}>Fire Drills and Evacuation Systems</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Knowledge of emergency exits, assembly points</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Assisting in casualty evacuation and first aid</IconListItem>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-kayjay-blue mb-3">Incident Management</h3>
                    <ul className="space-y-2 text-gray-600">
                        <IconListItem icon={<FaCheckCircle />}>Securing the area and preventing unauthorized entry</IconListItem>
                        <IconListItem icon={<FaCheckCircle />}>Accurate and timely incident recording in IB</IconListItem>
                        {/* FIX: Corrected the closing tag from </prebuiltVoiceConfig> to </IconListItem> */}
                        <IconListItem icon={<FaCheckCircle />}>Coordination with management and authorities</IconListItem>
                    </ul>
                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
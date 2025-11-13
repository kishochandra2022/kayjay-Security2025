import React from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import { FaUserTie, FaBalanceScale, FaBrain, FaHandshake, FaEye, FaFlagCheckered } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Seo
        title="About Sri Lanka's Top Security Company"
        description="Learn about KayJay Security, a leading private security company in Sri Lanka with over 45 years of experience. Discover our mission to provide the best professional security guards and solutions."
        imageUrl="https://picsum.photos/1200/630?random=2"
      />
      <PageHeader title="About KayJay Security" subtitle="Over 45 Years of Trusted Security Services in Sri Lanka." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img src="https://picsum.photos/800/600?random=2" alt="The KayJay Security company office building" className="rounded-lg shadow-xl w-full h-96 object-cover" loading="lazy"/>
            </div>
            <div className="text-lg text-gray-700 space-y-4" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-kayjay-green mb-4">Our Story as a Top Security Company in Sri Lanka</h2>
              <p>KayJay Security is a private limited company with over 45 years of trusted service in the security and surveillance industry. As a leading private security company in Sri Lanka, we specialize in safeguarding assets, people, and infrastructure across the nation, bringing together decades of operational experience and evolving technical capability.</p>
              <p>With our deep roots and sustained presence in this field, we have earned the trust of numerous institutions and individuals. Our mission is to deliver best-in-class security solutions—comprehensive, customized, and effectively executed by our team of professional security guards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-green text-kayjay-gold mb-6">
                <FaEye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-kayjay-green mb-3">Our Vision</h3>
              <p className="text-gray-600">To be the most preferred provider of security services in Sri Lanka.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-green text-kayjay-gold mb-6">
                <FaFlagCheckered className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-kayjay-green mb-3">Our Mission</h3>
              <p className="text-gray-600">To achieve the highest standards in our business operations via strategic management decisions, motivating our personnel, and most importantly maintaining a good relationship with our clients.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-kayjay-green mb-12" data-aos="fade-up">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6" data-aos="zoom-in" data-aos-delay="0">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                    <FaUserTie className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-kayjay-green">Professionalism & Integrity</h4>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                    <FaBalanceScale className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-kayjay-green">Accountability & Discretion</h4>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                    <FaBrain className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-kayjay-green">Continuous Learning</h4>
            </div>
            <div className="p-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-light-gray text-kayjay-green mb-6">
                    <FaHandshake className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-kayjay-green">Client-Centric Approach</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
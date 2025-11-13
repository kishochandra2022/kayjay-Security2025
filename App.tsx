
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyKayJayPage from './pages/WhyKayJayPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import CashTransitPage from './pages/CashTransitPage';
import ExpertisePage from './pages/ExpertisePage';
import PrimeMoversPage from './pages/PrimeMoversPage';
import CashManagementPage from './pages/CashManagementPage';
import QuotePage from './pages/QuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import SecurityPersonnelPage from './pages/SecurityPersonnelPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<ServicesPage />} />
          <Route path="/why-kayjay" element={<WhyKayJayPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cash-transit" element={<CashTransitPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/prime-movers" element={<PrimeMoversPage />} />
          <Route path="/cash-management" element={<CashManagementPage />} />
          <Route path="/request-a-quote" element={<QuotePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/security-personnel" element={<SecurityPersonnelPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ServicesIndex from "./pages/services/ServicesIndex";
import ItConsulting from "./pages/services/ItConsulting";
import ManagedServices from "./pages/services/ManagedServices";
import CloudSolutions from "./pages/services/CloudSolutions";
import Cybersecurity from "./pages/services/Cybersecurity";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import DataAnalytics from "./pages/services/DataAnalytics";
import AboutPage from "./pages/About";
import IndustriesPage from "./pages/Industries";
import ContactPage from "./pages/ContactPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/it-consulting" element={<ItConsulting />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route
            path="/services/digital-transformation"
            element={<DigitalTransformation />}
          />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

// Notes:
// The app routing no longer exposes a case studies page which matches the request to remove case study content.
// Each route points to a specific page component so structure is easy to follow for new developers.
// Header and footer remain shared across all routes so updates to navigation chrome are centralized.

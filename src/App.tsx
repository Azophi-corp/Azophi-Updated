import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// pages (note the ./)
import Home from "./pages/Home";
import ServicesIndex from "./pages/services/ServicesIndex";
import ItConsulting from "./pages/services/ItConsulting";
import ManagedServices from "./pages/services/ManagedServices";
import CloudSolutions from "./pages/services/CloudSolutions";
import Cybersecurity from "./pages/services/Cybersecurity";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import About from "./pages/About";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import ContactPage from "./pages/ContactPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
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
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

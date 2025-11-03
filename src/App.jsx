import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import HeroSection from "./components/Home/HeroSection";
import OurSolution from "./components/Home/OurSolution";
import TPSCapabilities from "./components/Home/TPSCapabilities";
import OurFinancialSolutions from "./components/Home/OurFinancialSolutions";
import IntegrationCapabilities from "./components/Home/IntegrationCapabilities.jsx";
import Footer from "./components/Footer.jsx";
import TPSEcosystem from "./components/Home/TPSEcosystem.jsx";
import ContactSection from "./components/ContactSection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Paint ONE background glow on the wrapper so it appears under Header + Hero */}
      <div
        className="relative"
        style={{
          /* circular soft glow, 20% orange, positioned near the logo */
          background:
            "radial-gradient(348px 348px at 560px 90px, #F4803433 0%, transparent 70%)",
        }}
      >
        <Header />
        <HeroSection />
        <OurSolution />
        <TPSCapabilities />
        <OurFinancialSolutions />
        <IntegrationCapabilities />
        <TPSEcosystem />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
  
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

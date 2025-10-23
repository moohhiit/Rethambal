import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage';
import { FeaturesPage } from './Pages/FeaturesPage';
import { AboutPage } from './Pages/AboutPage';
import { PricingPage } from './Pages/PricingPage';
import { DemoPage } from './Pages/DemoPage';
import { ContactPage } from './Pages/ContactPage';
import { Footer } from './Components/Footer';
import ScrollToTop from './Components/ScrolltoTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <main className="flex-grow px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Optional Footer */}
       <Footer/>
        </div>
    </Router>
  );
}

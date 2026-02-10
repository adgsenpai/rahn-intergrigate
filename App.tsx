import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Login, Register } from './components/AuthPages';
import { DocsPage, AboutPage, ContactPage, PlaceholderPage } from './components/ContentPages';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/company/about" element={<AboutPage />} />
            <Route path="/company/contact" element={<ContactPage />} />
            
            {/* Generic Placeholders for other links */}
            <Route path="/solutions/*" element={<PlaceholderPage name="Solutions" />} />
            <Route path="/resources/*" element={<PlaceholderPage name="Resources" />} />
            <Route path="*" element={<PlaceholderPage name="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
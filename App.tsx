import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BelajarGallery from './pages/BelajarGallery';
import BelajarDetail from './pages/BelajarDetail';
import TokoGallery from './pages/TokoGallery';
import TokoDetail from './pages/TokoDetail';
import BlogGallery from './pages/BlogGallery';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/belajar" element={<BelajarGallery />} />
            <Route path="/belajar/:id" element={<BelajarDetail />} />
            <Route path="/toko" element={<TokoGallery />} />
            <Route path="/toko/:id" element={<TokoDetail />} />
            <Route path="/blog" element={<BlogGallery />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
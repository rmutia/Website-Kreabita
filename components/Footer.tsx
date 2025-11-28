import React from 'react';
import { Link } from 'react-router-dom';
import { Codepen, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// Custom SVG for Threads Icon
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 12c0 4.5-3.5 8-8 8s-8-3.5-8-8 3.5-8 8-8 8 3.5 8 8v1.5c0 1.5-1 2.5-2.5 2.5S14 15 14 13.5V12a3 3 0 1 0-3 3h.5" />
  </svg>
);

// Custom SVG for TikTok Icon
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black border-t-4 border-black py-16 px-4 mt-auto relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none text-black">
        <Codepen className="w-64 h-64" />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-3 h-3 bg-orange-500"></div>
              <div className="w-3 h-3 bg-pink-400"></div>
              <div className="w-3 h-3 bg-emerald-400"></div>
              <div className="w-3 h-3 bg-sky-400"></div>
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase">Kreabita</span>
          </div>
          <p className="max-w-sm text-gray-700 mb-8 leading-relaxed font-medium">
            Menemani anak bertumbuh di era digital dengan langkah yang nyaman dan penuh hati.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Threads" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ThreadsIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <TiktokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-black uppercase tracking-wider text-sm border-b-2 border-black pb-2 inline-block">Menu</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li><Link to="/" className="hover:text-emerald-600 hover:pl-2 transition-all">Beranda</Link></li>
            <li><Link to="/belajar" className="hover:text-emerald-600 hover:pl-2 transition-all">Belajar</Link></li>
            <li><Link to="/toko" className="hover:text-emerald-600 hover:pl-2 transition-all">Toko</Link></li>
            <li><Link to="/blog" className="hover:text-emerald-600 hover:pl-2 transition-all">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-black uppercase tracking-wider text-sm border-b-2 border-black pb-2 inline-block">Hubungi Kami</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@kreabita.id</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 812 3456 7890</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jakarta Selatan, ID</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t-2 border-gray-100 text-center">
        <p className="text-xs text-gray-500 font-mono">
          © 2023 Kreabita Education. Made with <span className="text-red-500">♥</span> for Kids.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
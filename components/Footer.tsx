import React from 'react';
import { Link } from 'react-router-dom';
import { Codepen, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-black py-16 px-4 mt-auto relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
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
          <p className="max-w-sm text-gray-400 mb-8 leading-relaxed">
            Membangun generasi inovator masa depan melalui pendidikan teknologi yang menyenangkan dan inklusif.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">Menu</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-emerald-400 hover:pl-2 transition-all">Beranda</Link></li>
            <li><Link to="/belajar" className="hover:text-emerald-400 hover:pl-2 transition-all">Belajar</Link></li>
            <li><Link to="/toko" className="hover:text-emerald-400 hover:pl-2 transition-all">Toko</Link></li>
            <li><Link to="/blog" className="hover:text-emerald-400 hover:pl-2 transition-all">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">Hubungi Kami</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@kreabita.id</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 812 3456 7890</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jakarta Selatan, ID</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-600 font-mono">
          © 2023 Kreabita Education. Made with <span className="text-red-500">♥</span> for Kids.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
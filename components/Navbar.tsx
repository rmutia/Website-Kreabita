import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label, colorClass, activeClass }: { to: string; label: string; colorClass: string; activeClass: string }) => (
    <Link 
      to={to} 
      className={`text-sm font-medium hover:underline decoration-2 underline-offset-4 ${colorClass} ${isActive(to) ? 'underline' : ''}`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black px-4 py-3 md:px-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="cursor-pointer group flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 bg-orange-500"></div>
            <div className="w-2 h-2 bg-pink-400"></div>
            <div className="w-2 h-2 bg-emerald-400"></div>
            <div className="w-2 h-2 bg-sky-400"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-black">
            Kreabita
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/belajar" label="Belajar" colorClass="hover:text-emerald-600 decoration-emerald-500" activeClass="text-emerald-600" />
          <NavLink to="/toko" label="Toko" colorClass="hover:text-sky-600 decoration-sky-500" activeClass="text-sky-600" />
          <NavLink to="/blog" label="Blog" colorClass="hover:text-pink-600 decoration-pink-500" activeClass="text-pink-600" />
          <NavLink to="/about" label="Tentang" colorClass="hover:text-orange-600 decoration-orange-500" activeClass="text-orange-600" />
        </div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-1 border-2 border-black brutal-shadow-sm active:shadow-none bg-white transition-all"
        >
          {isOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-black p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
           <NavLink to="/belajar" label="Belajar" colorClass="hover:text-emerald-600 decoration-emerald-500" activeClass="text-emerald-600" />
           <NavLink to="/toko" label="Toko" colorClass="hover:text-sky-600 decoration-sky-500" activeClass="text-sky-600" />
           <NavLink to="/blog" label="Blog" colorClass="hover:text-pink-600 decoration-pink-500" activeClass="text-pink-600" />
           <NavLink to="/about" label="Tentang" colorClass="hover:text-orange-600 decoration-orange-500" activeClass="text-orange-600" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
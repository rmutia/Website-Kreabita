import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Code2, BrainCircuit, GraduationCap, ArrowRight, ShoppingBag, Newspaper } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section>
      {/* Hero with Animation */}
      <div className="border-b-2 border-black bg-white relative overflow-hidden min-h-[500px] flex items-center">
        {/* Animated Background Pixels */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 py-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block bg-sky-200 border-2 border-black px-3 py-1 text-xs font-mono font-semibold mb-6 brutal-shadow-sm transform -rotate-1">
              🚀 Portal Edukasi Digital Anak
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-6">
              Belajar Itu <br />
              <span className="text-orange-500 bg-black px-2">Seru!</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-8 max-w-lg leading-relaxed">
              Gabungkan imajinasi dan teknologi. Dari koding hingga robotik, semua ada di Kreabita.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/belajar" className="bg-emerald-400 text-black px-8 py-4 border-2 border-black font-semibold text-lg brutal-shadow hover:bg-emerald-500 transition-all active:translate-y-1 active:shadow-none flex items-center gap-2">
                <Rocket className="w-5 h-5 stroke-[1.5]" /> Mulai Petualangan
              </Link>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative hidden lg:block h-full min-h-[400px]">
            <div className="absolute top-10 right-10 w-64 h-64 bg-orange-400 border-2 border-black brutal-shadow-lg z-10 animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-24 h-24 text-white stroke-[1.5]" />
              </div>
            </div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-pink-400 border-2 border-black brutal-shadow z-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-16 h-16 text-white stroke-[1.5]" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-sky-400 border-2 border-black brutal-shadow-sm z-0 rotate-12"></div>
          </div>
        </div>
      </div>

      {/* Home Menu Previews */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Belajar Card */}
          <Link to="/belajar" className="group cursor-pointer relative block">
            <div className="absolute inset-0 bg-emerald-500 border-2 border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative bg-white border-2 border-black p-8 h-full flex flex-col justify-between">
              <div>
                <GraduationCap className="w-10 h-10 mb-4 text-emerald-600 stroke-[1.5]" />
                <h3 className="text-3xl font-semibold tracking-tight mb-2">Belajar</h3>
                <p className="text-gray-600">Akses modul interaktif pemrograman, desain, dan logika.</p>
              </div>
              <div className="mt-8 flex justify-end">
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform stroke-[1.5]" />
              </div>
            </div>
          </Link>

          {/* Toko Card */}
          <Link to="/toko" className="group cursor-pointer relative block">
            <div className="absolute inset-0 bg-sky-500 border-2 border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative bg-white border-2 border-black p-8 h-full flex flex-col justify-between">
              <div>
                <ShoppingBag className="w-10 h-10 mb-4 text-sky-600 stroke-[1.5]" />
                <h3 className="text-3xl font-semibold tracking-tight mb-2">Toko</h3>
                <p className="text-gray-600">Beli peralatan robotik, buku panduan, dan merchandise.</p>
              </div>
              <div className="mt-8 flex justify-end">
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform stroke-[1.5]" />
              </div>
            </div>
          </Link>

          {/* Blog Card */}
          <Link to="/blog" className="group cursor-pointer relative block">
            <div className="absolute inset-0 bg-pink-500 border-2 border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative bg-white border-2 border-black p-8 h-full flex flex-col justify-between">
              <div>
                <Newspaper className="w-10 h-10 mb-4 text-pink-600 stroke-[1.5]" />
                <h3 className="text-3xl font-semibold tracking-tight mb-2">Blog</h3>
                <p className="text-gray-600">Artikel terbaru seputar teknologi dan pendidikan anak.</p>
              </div>
              <div className="mt-8 flex justify-end">
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform stroke-[1.5]" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Home;
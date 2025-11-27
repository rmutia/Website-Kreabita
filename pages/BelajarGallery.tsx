import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Bot, Clock } from 'lucide-react';

const BelajarGallery: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="bg-emerald-100 border-b-2 border-black py-16 px-4">
        <div className="container mx-auto">
            {/* pattern grid applied via inline style for dynamic background simulation or just a wrapper */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <span className="text-xs font-mono bg-black text-white px-2 py-1">KURIKULUM</span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-2 mb-4">Pusat Belajar</h2>
            <p className="text-lg font-medium text-emerald-900">Pilih topik yang menarik minatmu.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Topic 1 */}
          <Link to="/belajar/logika-dasar" className="bg-white border-2 border-black p-0 cursor-pointer group brutal-shadow hover:-translate-y-1 transition-all block">
            <div className="h-48 bg-orange-100 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
              <Code className="w-20 h-20 text-orange-200 absolute -right-4 -bottom-4 transform rotate-12 stroke-[1.5]" />
              <Code className="w-16 h-16 text-orange-500 relative z-10 stroke-[1.5]" />
            </div>
            <div className="p-6">
              <span className="bg-orange-500 text-white text-xs font-mono px-2 py-1 mb-3 inline-block">CODING</span>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Logika Dasar</h3>
              <p className="text-sm text-gray-600 mb-4">Belajar algoritma tanpa pusing dengan visual block.</p>
              <div className="flex items-center gap-2 text-xs font-mono border-t border-gray-200 pt-3">
                <Clock className="w-3 h-3" /> 4 Jam
                <span className="mx-1">•</span>
                12 Modul
              </div>
            </div>
          </Link>

          {/* Topic 2 */}
          <div className="bg-white border-2 border-black p-0 cursor-pointer group brutal-shadow hover:-translate-y-1 transition-all">
            <div className="h-48 bg-sky-100 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
              <Palette className="w-20 h-20 text-sky-200 absolute -right-4 -bottom-4 transform rotate-12 stroke-[1.5]" />
              <Palette className="w-16 h-16 text-sky-500 relative z-10 stroke-[1.5]" />
            </div>
            <div className="p-6">
              <span className="bg-sky-500 text-white text-xs font-mono px-2 py-1 mb-3 inline-block">DESIGN</span>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Desain Kreatif</h3>
              <p className="text-sm text-gray-600 mb-4">Membuat karakter pixel art dan vektor sederhana.</p>
              <div className="flex items-center gap-2 text-xs font-mono border-t border-gray-200 pt-3">
                <Clock className="w-3 h-3" /> 3 Jam
                <span className="mx-1">•</span>
                8 Modul
              </div>
            </div>
          </div>

          {/* Topic 3 */}
          <div className="bg-white border-2 border-black p-0 cursor-pointer group brutal-shadow hover:-translate-y-1 transition-all">
            <div className="h-48 bg-pink-100 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
              <Bot className="w-20 h-20 text-pink-200 absolute -right-4 -bottom-4 transform rotate-12 stroke-[1.5]" />
              <Bot className="w-16 h-16 text-pink-500 relative z-10 stroke-[1.5]" />
            </div>
            <div className="p-6">
              <span className="bg-pink-500 text-white text-xs font-mono px-2 py-1 mb-3 inline-block">ROBOTIK</span>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Robot Pintar</h3>
              <p className="text-sm text-gray-600 mb-4">Merakit dan memprogram robot sederhana.</p>
              <div className="flex items-center gap-2 text-xs font-mono border-t border-gray-200 pt-3">
                <Clock className="w-3 h-3" /> 6 Jam
                <span className="mx-1">•</span>
                15 Modul
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelajarGallery;
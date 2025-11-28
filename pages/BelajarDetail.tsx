import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Circle, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const BelajarDetail: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-gray-50 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex-shrink-0 h-auto lg:h-auto">
          <div className="p-5 border-b-2 border-black bg-orange-100">
            <Link to="/belajar" className="text-xs font-bold uppercase tracking-wide mb-2 hover:underline block">← Kembali</Link>
            <h3 className="font-semibold text-xl tracking-tight leading-tight">
              Logika Pemrograman Dasar
            </h3>
          </div>
          <div className="overflow-y-auto">
            <div className="p-4 space-y-2">
              <p className="text-xs font-mono text-gray-500 uppercase font-bold mb-2">BAB 1: Pengenalan</p>
              <button className="w-full text-left px-4 py-3 text-sm font-medium bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(100,100,100,0.5)] flex items-center gap-2">
                <PlayCircle className="w-4 h-4" /> Intro
              </button>
              <button className="w-full text-left px-4 py-3 text-sm font-medium bg-white hover:bg-orange-50 border-2 border-transparent hover:border-black transition-all flex items-center gap-2">
                <Circle className="w-4 h-4 text-gray-300" /> Algoritma
              </button>
              <button className="w-full text-left px-4 py-3 text-sm font-medium bg-white hover:bg-orange-50 border-2 border-transparent hover:border-black transition-all flex items-center gap-2">
                <Circle className="w-4 h-4 text-gray-300" /> Flowchart
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow bg-white p-6 lg:p-16">
          <div className="max-w-3xl mx-auto">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded border border-emerald-800 mb-4 inline-block">Video Lesson</span>
            <h1 className="text-4xl font-semibold tracking-tight mb-6">Pengenalan Computational Thinking</h1>
            
            <div className="aspect-video bg-black w-full border-2 border-black mb-8 relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight space-y-6">
              <p>
                Computational Thinking (CT) adalah kemampuan berpikir untuk menyelesaikan masalah secara menyeluruh, logis, dan teratur. Ini adalah pondasi utama sebelum kita menyentuh kode program apapun.
              </p>
              <div className="bg-yellow-50 border-l-4 border-orange-500 p-4 my-6">
                <p className="font-semibold text-orange-800 m-0">Tips Penting:</p>
                <p className="m-0 text-sm">Jangan terburu-buru menulis kode. Pahami masalahnya dulu, pecah menjadi bagian kecil (dekomposisi).</p>
              </div>
              <h3>4 Pilar CT:</h3>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-200 border border-black flex items-center justify-center font-bold text-sm">1</div>
                  <span>Decomposition (Penguraian)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-sky-200 border border-black flex items-center justify-center font-bold text-sm">2</div>
                  <span>Pattern Recognition (Pengenalan Pola)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-200 border border-black flex items-center justify-center font-bold text-sm">3</div>
                  <span>Abstraction (Abstraksi)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-200 border border-black flex items-center justify-center font-bold text-sm">4</div>
                  <span>Algorithm (Algoritma)</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between mt-16 pt-8 border-t-2 border-gray-100">
              <button className="flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed" disabled>
                <ChevronLeft className="w-4 h-4" /> Sebelumnya
              </button>
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800">
                Materi Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelajarDetail;
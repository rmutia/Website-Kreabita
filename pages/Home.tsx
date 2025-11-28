import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Code2, BrainCircuit, ArrowRight, Code, Palette, Bot, Clock, BookOpen, Plus, Cpu, Shirt, Sticker, Lightbulb, Trophy, Gamepad2 } from 'lucide-react';

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1) relative to window center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="animate-in fade-in duration-500">
      {/* Hero with Animation - Centered Layout */}
      <div className="relative border-b-2 border-black bg-yellow-50 min-h-[650px] flex flex-col items-center justify-center overflow-hidden p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Floating Decorative Elements with Parallax */}
        {/* Element 1: Code2 (Orange) */}
        <div 
          className="absolute top-10 left-10 md:top-32 md:left-24 hidden md:block transition-transform duration-200 ease-out will-change-transform"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
        >
            <div className="animate-float" style={{ animationDelay: '0s' }}>
                <div className="bg-orange-400 border-2 border-black p-4 brutal-shadow -rotate-6 transform hover:scale-110 transition-transform cursor-pointer hover:rotate-0">
                    <Code2 className="w-10 h-10 text-white stroke-[2]" />
                </div>
            </div>
        </div>

        {/* Element 2: BrainCircuit (Sky) */}
        <div 
          className="absolute top-20 right-10 md:top-40 md:right-32 hidden md:block transition-transform duration-200 ease-out will-change-transform"
          style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
        >
             <div className="animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="bg-sky-400 border-2 border-black p-4 brutal-shadow rotate-12 transform hover:scale-110 transition-transform cursor-pointer hover:rotate-0">
                    <BrainCircuit className="w-10 h-10 text-white stroke-[2]" />
                </div>
            </div>
        </div>

        {/* Element 3: Palette (Pink) */}
        <div 
          className="absolute bottom-20 left-20 hidden md:block transition-transform duration-200 ease-out will-change-transform"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
        >
            <div className="animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="bg-pink-400 border-2 border-black p-3 brutal-shadow rotate-3 transform hover:scale-110 transition-transform cursor-pointer hover:rotate-0">
                    <Palette className="w-8 h-8 text-white stroke-[2]" />
                </div>
            </div>
        </div>
        
        {/* Pixel Rain (Background) */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
          <div className="pixel"></div>
          <div className="pixel"></div>
          <div className="pixel"></div>
        </div>

        {/* Main Content (Centered) */}
        <div className="relative z-10 max-w-4xl text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-full mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-bold tracking-wide uppercase">Portal Edukasi Digital Anak</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8 text-black">
              Teknologi yang <br/>
              <span className="relative inline-block mt-2">
                  <span className="relative z-10 px-4">Terasa Dekat</span>
                  <div className="absolute inset-0 bg-emerald-300 transform -rotate-2 border-2 border-black -z-0 translate-y-2"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
              Mengubah ide-ide digital menjadi cerita yang mudah diikuti dan kegiatan kreatif yang hangat bagi anak-anak.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/belajar" className="w-full sm:w-auto bg-black text-white px-8 py-4 border-2 border-black font-bold text-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]">
                  <Rocket className="w-5 h-5" /> Mulai Petualangan
                </Link>
                <Link to="/about" className="w-full sm:w-auto px-8 py-4 font-bold text-lg border-2 border-transparent hover:border-black hover:bg-white transition-all flex items-center justify-center gap-2">
                  Tentang Kami <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
      </div>

      {/* Featured Learning Topics */}
      <section className="py-20 px-4 bg-emerald-50/50 border-b-2 border-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-mono bg-emerald-500 text-white px-2 py-1 mb-2 inline-block">KURIKULUM</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Topik Belajar Terpilih</h2>
            </div>
            <Link to="/belajar" className="hidden md:flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Topic 1 */}
            <Link to="/belajar/logika-dasar" className="bg-white border-2 border-black p-0 cursor-pointer group brutal-shadow-sm hover:brutal-shadow hover:-translate-y-1 transition-all block">
              <div className="h-40 bg-orange-100 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
                <Code className="w-16 h-16 text-orange-500 relative z-10 stroke-[1.5]" />
              </div>
              <div className="p-6">
                <span className="bg-orange-500 text-white text-xs font-mono px-2 py-1 mb-3 inline-block">CODING</span>
                <h3 className="text-xl font-semibold tracking-tight mb-2">Logika Dasar</h3>
                <div className="flex items-center gap-2 text-xs font-mono border-t border-gray-200 pt-3">
                  <Clock className="w-3 h-3" /> 4 Jam
                </div>
              </div>
            </Link>

            {/* Topic 2 */}
            <div className="bg-white border-2 border-black p-0 cursor-pointer group brutal-shadow-sm hover:brutal-shadow hover:-translate-y-1 transition-all">
              <div className="h-40 bg-sky-100 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
                <Palette className="w-16 h-16 text-sky-500 relative z-10 stroke-[1.5]" />
              </div>
              <div className="p-6">
                <span className="bg-sky-500 text-white text-xs font-mono px-2 py-1 mb-3 inline-block">DESIGN</span>
                <h3 className="text-xl font-semibold tracking-tight mb-2">Desain Kreatif</h3>
                <div className="flex items-center gap-2 text-xs font-mono border-t border-gray-200 pt-3">
                  <Clock className="w-3 h-3" /> 3 Jam
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-white border-2 border-black p-0 cursor-pointer group brutal-shadow-sm hover:brutal-shadow hover:-translate-y-1 transition-all">
              <div className="h-40 bg-pink-100 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
                <Bot className="w-16 h-16 text-pink-500 relative z-10 stroke-[1.5]" />
              </div>
              <div className="p-6">
                <span className="bg-pink-500 text-white text-xs font-mono px-2 py-1 mb-3 inline-block">ROBOTIK</span>
                <h3 className="text-xl font-semibold tracking-tight mb-2">Robot Pintar</h3>
                <div className="flex items-center gap-2 text-xs font-mono border-t border-gray-200 pt-3">
                  <Clock className="w-3 h-3" /> 6 Jam
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link to="/belajar" className="inline-flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
               Lihat Semua Kurikulum <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-sky-50/50 border-b-2 border-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-mono bg-sky-500 text-white px-2 py-1 mb-2 inline-block">MERCHANDISE</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Produk Toko Pilihan</h2>
            </div>
            <Link to="/toko" className="hidden md:flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
              Lihat Katalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Product 1 */}
            <Link to="/toko/detail" className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[4px_4px_0px_0px_rgba(14,165,233,1)] transition-all">
              <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-6 group-hover:bg-sky-50 transition-colors">
                <BookOpen className="w-16 h-16 text-gray-800 stroke-[1]" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-md leading-tight mb-1">Buku: Petualangan Si Bot</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono font-bold text-sm">Rp 125.000</span>
                  <button className="bg-sky-500 border border-black p-1.5 text-white hover:bg-sky-600">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <div className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] transition-all">
              <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-6 group-hover:bg-emerald-50 transition-colors">
                <Cpu className="w-16 h-16 text-gray-800 stroke-[1]" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-md leading-tight mb-1">Starter Kit Arduino</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono font-bold text-sm">Rp 250.000</span>
                  <button className="bg-emerald-500 border border-black p-1.5 text-white hover:bg-emerald-600">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[4px_4px_0px_0px_rgba(244,114,182,1)] transition-all">
              <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-6 group-hover:bg-pink-50 transition-colors">
                <Shirt className="w-16 h-16 text-gray-800 stroke-[1]" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-md leading-tight mb-1">Kaos "Future Coder"</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono font-bold text-sm">Rp 95.000</span>
                  <button className="bg-pink-500 border border-black p-1.5 text-white hover:bg-pink-600">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] transition-all">
              <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-6 group-hover:bg-orange-50 transition-colors">
                <Sticker className="w-16 h-16 text-gray-800 stroke-[1]" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-md leading-tight mb-1">Sticker Pack</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono font-bold text-sm">Rp 25.000</span>
                  <button className="bg-orange-500 border border-black p-1.5 text-white hover:bg-orange-600">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/toko" className="inline-flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
               Lihat Semua Produk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-mono bg-pink-500 text-white px-2 py-1 mb-2 inline-block">JURNAL</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tulisan Terbaru</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
              Baca Blog Lainnya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Link to="/blog/detail" className="cursor-pointer group block">
              <div className="bg-gray-200 aspect-[16/9] border-2 border-black mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-orange-500 stroke-[1.5]" />
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] font-mono border border-black px-1 bg-white">TIPS</span>
                <span className="text-[10px] font-mono text-gray-500">12 Okt 2023</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:underline decoration-2 decoration-pink-500 underline-offset-4 leading-tight">Mengapa Coding Penting untuk Anak Usia Dini?</h3>
            </Link>

            {/* Blog Post 2 */}
            <article className="cursor-pointer group">
              <div className="bg-gray-200 aspect-[16/9] border-2 border-black mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-emerald-500 stroke-[1.5]" />
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] font-mono border border-black px-1 bg-white">PRESTASI</span>
                <span className="text-[10px] font-mono text-gray-500">05 Okt 2023</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:underline decoration-2 decoration-pink-500 underline-offset-4 leading-tight">Siswa Kreabita Menang Kompetisi Robotik Nasional</h3>
            </article>

            {/* Blog Post 3 */}
            <article className="cursor-pointer group">
              <div className="bg-gray-200 aspect-[16/9] border-2 border-black mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-sky-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <Gamepad2 className="w-12 h-12 text-sky-500 stroke-[1.5]" />
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] font-mono border border-black px-1 bg-white">TUTORIAL</span>
                <span className="text-[10px] font-mono text-gray-500">28 Sep 2023</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:underline decoration-2 decoration-pink-500 underline-offset-4 leading-tight">Cara Membuat Game Sederhana dengan Scratch</h3>
            </article>
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
               Baca Blog Lainnya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Trophy, Gamepad2 } from 'lucide-react';

const BlogGallery: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="bg-pink-100 border-b-2 border-black py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Jurnal Kreabita</h2>
          <p className="text-lg font-medium text-pink-900">Inspirasi, Tips, dan Cerita dari Dunia Edukasi.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Blog Post 1 */}
          <Link to="/blog/detail" className="cursor-pointer group block">
            <div className="bg-gray-200 aspect-[4/3] border-2 border-black mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Lightbulb className="w-16 h-16 text-orange-500 stroke-[1.5]" />
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs font-mono border border-black px-1 py-0.5 bg-white">TIPS PARENTING</span>
              <span className="text-xs font-mono text-gray-500 py-0.5">12 Okt 2023</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:underline decoration-2 decoration-pink-500 underline-offset-4">Mengapa Coding Penting untuk Anak Usia Dini?</h3>
            <p className="text-gray-600 line-clamp-3 leading-relaxed">Coding bukan hanya tentang komputer, tapi tentang melatih cara berpikir sistematis dan pemecahan masalah.</p>
          </Link>

          {/* Blog Post 2 */}
          <article className="cursor-pointer group">
            <div className="bg-gray-200 aspect-[4/3] border-2 border-black mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Trophy className="w-16 h-16 text-emerald-500 stroke-[1.5]" />
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs font-mono border border-black px-1 py-0.5 bg-white">PRESTASI</span>
              <span className="text-xs font-mono text-gray-500 py-0.5">05 Okt 2023</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:underline decoration-2 decoration-pink-500 underline-offset-4">Siswa Kreabita Menang Kompetisi Robotik Nasional</h3>
            <p className="text-gray-600 line-clamp-3 leading-relaxed">Selamat kepada tim Garuda Muda yang berhasil menyabet medali emas di kategori line follower.</p>
          </article>

          {/* Blog Post 3 */}
          <article className="cursor-pointer group">
            <div className="bg-gray-200 aspect-[4/3] border-2 border-black mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-sky-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 text-sky-500 stroke-[1.5]" />
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs font-mono border border-black px-1 py-0.5 bg-white">TUTORIAL</span>
              <span className="text-xs font-mono text-gray-500 py-0.5">28 Sep 2023</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:underline decoration-2 decoration-pink-500 underline-offset-4">Cara Membuat Game Sederhana dengan Scratch</h3>
            <p className="text-gray-600 line-clamp-3 leading-relaxed">Panduan langkah demi langkah membuat game "Tangkap Apel" dalam waktu kurang dari 30 menit.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogGallery;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers } from 'lucide-react';

const BlogDetail: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog" className="mb-8 flex items-center gap-2 font-semibold text-sm hover:underline decoration-2 text-gray-500 hover:text-black w-fit">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
        </Link>

        <header className="mb-10 text-center">
          <span className="bg-orange-100 text-orange-800 border border-orange-200 px-3 py-1 text-xs font-bold rounded-full mb-4 inline-block">TIPS PARENTING</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Mengapa Coding Penting untuk Anak Usia Dini?</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full border border-black"></div>
              <span className="font-medium text-black">Sarah Pendidik</span>
            </div>
            <span>•</span>
            <span>12 Oktober 2023</span>
            <span>•</span>
            <span>5 Menit Baca</span>
          </div>
        </header>

        <div className="aspect-video bg-orange-50 border-2 border-black mb-12 flex items-center justify-center">
           <Layers className="w-32 h-32 text-orange-300 stroke-[1]" />
        </div>

        <div className="prose prose-lg mx-auto prose-headings:font-bold prose-a:text-pink-600">
          <p className="lead text-xl text-gray-700 font-medium">Di era digital ini, memahami teknologi bukan lagi pilihan, melainkan kebutuhan. Tapi, apakah anak-anak perlu belajar "menulis kode" sejak dini?</p>
          
          <p>Jawabannya bukan semata-mata agar mereka menjadi programmer di masa depan. Belajar coding mengajarkan keterampilan yang jauh lebih fundamental.</p>

          <h3>1. Computational Thinking</h3>
          <p>Anak belajar memecah masalah besar menjadi bagian-bagian kecil yang dapat dikelola. Ini adalah skill hidup yang penting.</p>

          <h3>2. Kreativitas Tanpa Batas</h3>
          <p>Coding adalah kanvas modern. Anak bisa menciptakan game, cerita interaktif, dan animasi sesuai imajinasi mereka.</p>

          <blockquote className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 not-italic font-medium text-gray-800">
            "Setiap orang di negara ini harus belajar memprogram komputer, karena itu mengajarkanmu cara berpikir." — Steve Jobs
          </blockquote>

          <h3>Kesimpulan</h3>
          <p>Memperkenalkan coding sejak dini bukan untuk memaksa anak bekerja, tapi memberi mereka alat untuk berekspresi di dunia digital.</p>
        </div>

        <div className="mt-16 pt-10 border-t-2 border-black">
          <h3 className="font-bold text-2xl mb-6">Artikel Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-4 hover:border-black transition-colors cursor-pointer">
              <h4 className="font-bold mb-2">Screen Time yang Sehat</h4>
              <p className="text-sm text-gray-500">Bagaimana menyeimbangkan gadget dan aktivitas fisik.</p>
            </div>
            <div className="border border-gray-200 p-4 hover:border-black transition-colors cursor-pointer">
              <h4 className="font-bold mb-2">Review Aplikasi Logika</h4>
              <p className="text-sm text-gray-500">5 Aplikasi terbaik untuk melatih otak anak.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
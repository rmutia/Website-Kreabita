import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Plus } from 'lucide-react';

const TokoDetail: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-12">
        <Link to="/toko" className="mb-8 flex items-center gap-2 font-semibold text-sm hover:underline decoration-2 text-gray-500 hover:text-black w-fit">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Toko
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-black p-12 flex items-center justify-center brutal-shadow">
               <BookOpen className="w-40 h-40 text-gray-800 stroke-[1]" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-white border-2 border-black cursor-pointer hover:bg-sky-50 transition-colors"></div>
              <div className="aspect-square bg-white border-2 border-black cursor-pointer hover:bg-sky-50 transition-colors"></div>
              <div className="aspect-square bg-white border-2 border-black cursor-pointer hover:bg-sky-50 transition-colors"></div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-sky-200 border border-black px-2 py-1 text-xs font-mono font-bold">BEST SELLER</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Petualangan Si Bot: Volume 1</h1>
            <p className="text-3xl font-mono font-bold mb-8 text-sky-600">Rp 125.000</p>
            
            <div className="prose text-gray-700 mb-10">
              <p>Buku cerita bergambar yang interaktif. Mengajak anak memahami konsep dasar logika algoritma melalui kisah robot kecil yang mencari jalan pulang. Dilengkapi dengan puzzle di setiap bab.</p>
              <ul className="list-disc pl-5 mt-4 space-y-1">
                <li>Hardcover Premium</li>
                <li>64 Halaman Full Color</li>
                <li>Bonus Bookmark Robot</li>
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t-2 border-gray-100 flex gap-4">
              <div className="flex items-center border-2 border-black">
                <button className="px-4 py-3 hover:bg-gray-100 font-bold">-</button>
                <input type="text" defaultValue="1" className="w-12 text-center font-bold focus:outline-none bg-transparent" />
                <button className="px-4 py-3 hover:bg-gray-100 font-bold">+</button>
              </div>
              <button className="flex-1 bg-black text-white font-semibold text-lg border-2 border-black hover:bg-sky-500 hover:text-black transition-all flex items-center justify-center gap-2 brutal-shadow active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokoDetail;
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Cpu, Shirt, Sticker, Plus } from 'lucide-react';

const TokoGallery: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="bg-sky-100 border-b-2 border-black py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Toko Kreabita</h2>
          <p className="text-lg font-medium text-sky-900">Merchandise &amp; Alat Bantu Belajar</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <Link to="/toko/detail" className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[8px_8px_0px_0px_rgba(14,165,233,1)] transition-all">
            <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-8 group-hover:bg-sky-50 transition-colors">
              <BookOpen className="w-24 h-24 text-gray-800 stroke-[1]" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg leading-tight mb-2">Buku: Petualangan Si Bot</h3>
              <p className="text-xs text-gray-500 mb-4">Edisi Hardcover</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono font-bold text-lg">Rp 125.000</span>
                <button className="bg-sky-500 border border-black p-2 text-white hover:bg-sky-600">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          {/* Product 2 */}
          <div className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all">
            <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-8 group-hover:bg-emerald-50 transition-colors">
              <Cpu className="w-24 h-24 text-gray-800 stroke-[1]" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg leading-tight mb-2">Starter Kit Arduino</h3>
              <p className="text-xs text-gray-500 mb-4">Termasuk Board &amp; Kabel</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono font-bold text-lg">Rp 250.000</span>
                <button className="bg-emerald-500 border border-black p-2 text-white hover:bg-emerald-600">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[8px_8px_0px_0px_rgba(244,114,182,1)] transition-all">
            <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-8 group-hover:bg-pink-50 transition-colors">
              <Shirt className="w-24 h-24 text-gray-800 stroke-[1]" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg leading-tight mb-2">Kaos "Future Coder"</h3>
              <p className="text-xs text-gray-500 mb-4">Ukuran Anak S-XL</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono font-bold text-lg">Rp 95.000</span>
                <button className="bg-pink-500 border border-black p-2 text-white hover:bg-pink-600">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white border-2 border-black flex flex-col cursor-pointer group hover:shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transition-all">
            <div className="aspect-square bg-gray-100 border-b-2 border-black flex items-center justify-center p-8 group-hover:bg-orange-50 transition-colors">
              <Sticker className="w-24 h-24 text-gray-800 stroke-[1]" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg leading-tight mb-2">Sticker Pack</h3>
              <p className="text-xs text-gray-500 mb-4">Isi 20 pcs Vinyl</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono font-bold text-lg">Rp 25.000</span>
                <button className="bg-orange-500 border border-black p-2 text-white hover:bg-orange-600">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokoGallery;
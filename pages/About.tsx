import React from 'react';

const About: React.FC = () => {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block p-4 border-2 border-black bg-white brutal-shadow mb-8 rotate-3">
          <div className="grid grid-cols-2 gap-1 w-16 h-16 mx-auto">
            <div className="bg-orange-500"></div><div className="bg-pink-400"></div>
            <div className="bg-emerald-400"></div><div className="bg-sky-400"></div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Tentang Kreabita</h1>
        
        {/* Founder Note Container */}
        <div className="max-w-3xl mx-auto border-2 border-black bg-white brutal-shadow text-left relative mt-12">
          <div className="bg-gray-50 border-b-2 border-black px-8 py-4 flex items-center justify-between">
             <span className="font-mono text-xs uppercase tracking-widest font-bold text-gray-500">Founder's Note</span>
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full border border-black bg-red-400"></div>
               <div className="w-3 h-3 rounded-full border border-black bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full border border-black bg-green-400"></div>
             </div>
          </div>
          
          <div className="p-8 md:p-12 prose prose-lg prose-p:text-gray-800 prose-p:font-medium leading-relaxed">
            <p>Saya memulai Kreabita dengan satu tujuan sederhana: membuat belajar teknologi terasa dekat dan menyenangkan. Ketika saya mempelajari coding dan AI, saya sering merasa bahwa dunia teknologi tampak rumit karena cara penyampaiannya tidak selalu ramah untuk pemula. Padahal, konsep yang sulit bisa terasa lebih ringan ketika dipadukan dengan cerita, gambar, dan aktivitas yang mengundang rasa ingin tahu.</p>

            <p>Dari situlah Kreabita tumbuh. Saya ingin menghadirkan ruang belajar yang hangat, di mana teknologi tidak terlihat menakutkan, namun menjadi sesuatu yang bisa dijelajahi perlahan. Di Kreabita, saya mengubah ide-ide digital menjadi cerita yang mudah diikuti dan kegiatan kreatif yang membantu anak mengenal dunia teknologi dengan cara yang lembut.</p>

            <p>Harapan saya, Kreabita dapat menjadi tempat yang mengajak setiap anak untuk berani mencoba dan penasaran pada hal-hal baru. Tempat bagi orang tua dan guru untuk menemukan inspirasi, sambil menemani anak bertumbuh di era digital dengan langkah yang nyaman dan penuh hati.</p>
          </div>

          <div className="bg-yellow-100 border-t-2 border-black px-8 py-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full border-2 border-white shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wide">Kreabita Founder</p>
              <p className="text-xs text-gray-600">Sleman, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex gap-8 justify-center flex-wrap">
          <div className="text-center p-4">
            <div className="text-3xl font-bold font-mono">10k+</div>
            <div className="text-xs text-gray-500 uppercase">Siswa</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold font-mono">500+</div>
            <div className="text-xs text-gray-500 uppercase">Modul</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold font-mono">50+</div>
            <div className="text-xs text-gray-500 uppercase">Sekolah Partner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
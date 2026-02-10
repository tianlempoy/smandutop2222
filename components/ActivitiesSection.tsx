
import React from 'react';
import { Cpu, Camera, Palette, Music, Trophy, Code, Users } from 'lucide-react';

const ActivitiesSection: React.FC = () => {
  const activities = [
    { title: 'Cyber Research', icon: <Code />, cat: 'TECH', desc: 'Pengembangan software & cybersecurity standar nasional.' },
    { title: 'Digital Arts', icon: <Palette />, cat: 'ARTS', desc: 'Eksplorasi desain grafis, animasi, dan multimedia kreatif.' },
    { title: 'Robotika', icon: <Cpu />, cat: 'TECH', desc: 'Pemrograman sistem kontrol hardware dan automasi cerdas.' },
    { title: 'Broadcasting', icon: <Camera />, cat: 'MEDIA', desc: 'Produksi konten visual dan jurnalistik digital sekolah.' },
    { title: 'Legacy Choir', icon: <Music />, cat: 'CULTURE', desc: 'Paduan suara dengan harmoni Minahasa yang megah.' },
    { title: 'Elite Athletics', icon: <Trophy />, cat: 'SPORTS', desc: 'Pembinaan atletik dan bela diri berprestasi tinggi.' },
  ];

  return (
    <section className="py-48 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
        <div className="mb-32 flex flex-col lg:flex-row justify-between items-end gap-16">
          <div className="reveal active">
            <span className="text-[#C5A059] font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Holistic Ecosystem</span>
            <h2 className="text-6xl md:text-[110px] font-medium text-[#0F172A] tracking-tighter leading-none font-serif-prestige">
              Ekosistem <br /> <span className="text-slate-200 italic font-light lowercase">Kreativitas.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right reveal active">
            <p className="text-slate-400 text-2xl font-light italic leading-relaxed font-serif-prestige">
              "Menyediakan ruang eksplorasi tanpa batas di mana minat dan bakat bertransformasi menjadi kompetensi nyata."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((act, i) => (
            <div key={i} className="ivory-card group p-14 rounded-[60px] reveal active" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-20 h-20 rounded-[30px] bg-slate-50 group-hover:bg-[#0F172A] flex items-center justify-center text-[#C5A059] group-hover:text-white mb-12 shadow-sm transition-all duration-700">
                {act.icon}
              </div>
              <span className="text-[10px] font-black text-[#C5A059] tracking-[0.4em] uppercase mb-4 block">{act.cat}</span>
              <h4 className="text-3xl font-black text-[#0F172A] mb-8 transition-colors tracking-tight">{act.title}</h4>
              <p className="text-slate-400 text-xl font-light italic font-serif-prestige leading-relaxed">
                "{act.desc}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-[#0F172A] rounded-[80px] p-16 lg:p-28 text-white relative overflow-hidden reveal active">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/10 rounded-full blur-[150px] -mr-40 -mt-40"></div>
           <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
              <div className="max-w-3xl">
                 <div className="flex items-center space-x-6 mb-10">
                   <Users className="h-6 w-6 text-[#C5A059]" />
                   <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#C5A059]">Join the Community</span>
                 </div>
                 <h3 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-10 leading-none font-serif-prestige">Dapatkan <br/><span className="text-[#C5A059] italic">Legacy 2026.</span></h3>
                 <p className="text-slate-400 text-2xl font-light leading-relaxed italic font-serif-prestige">Membangun karakter kepemimpinan melalui pengembangan diri yang strategis dan berdampak luas.</p>
              </div>
              <button className="bg-[#C5A059] text-white px-16 py-8 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all shadow-2xl active:scale-95">
                Lihat Jadwal Kegiatan
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

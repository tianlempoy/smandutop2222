
import React from 'react';
import { Target, Compass, Book, Brain, Zap, Heart, ShieldCheck, Crown, UserCheck, ChevronRight } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const SchoolProfile: React.FC = () => {
  const mottoValues = [
    {
      title: 'Cerdas',
      desc: 'Mengutamakan perkembangan intelektual dan literasi digital yang tajam di era informasi global.',
      icon: <Brain className="h-8 w-8" />,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Terampil',
      desc: 'Membekali siswa dengan keahlian praktis dan kreativitas yang siap bersaing di dunia profesional.',
      icon: <Zap className="h-8 w-8" />,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Bermartabat',
      desc: 'Menjunjung tinggi etika, moralitas, dan kearifan lokal Minahasa dalam setiap langkah kehidupan.',
      icon: <Heart className="h-8 w-8" />,
      color: 'text-red-600 bg-red-50'
    }
  ];

  const osisLeadership = [
    { name: 'Preysi Pesik', role: 'Ketua OSIS', icon: <Crown /> },
    { name: 'Esterlita Suoth', role: 'Wakil Ketua OSIS', icon: <UserCheck /> },
    { name: 'Chika Korompis', role: 'Sekretaris I', icon: <Book /> },
    { name: 'Firen Gahung', role: 'Bendahara I', icon: <ShieldCheck /> }
  ];

  return (
    <div className="bg-[#FDFCFB]">
      {/* Profile Section Header */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 opacity-10">
          <img src={SCHOOL_ASSETS.HERO_BUILDING} className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto reveal active">
            <span className="text-[#C5A059] font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">The Academic Identity</span>
            <h1 className="text-6xl md:text-[100px] font-medium text-white mb-10 tracking-tighter leading-none font-serif-prestige">
              Tradisi & <br /> <span className="text-slate-500 italic font-light lowercase">Eksistensi.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl mx-auto font-serif-prestige italic">
              SMA Negeri 2 Tompaso: Wadah pembentukan intelektual dan spiritual di jantung peradaban Minahasa.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Ivory Style */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="reveal">
              <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter mb-12 uppercase italic">VISI <span className="text-slate-200">KAMI.</span></h2>
              <p className="text-4xl font-serif-prestige italic text-slate-500 leading-tight border-l-4 border-[#C5A059] pl-10 py-2">
                "Menjadi lembaga pendidikan unggul yang melahirkan insan cerdas, terampil, dan bermartabat berlandaskan iman, ilmu, dan teknologi."
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter mb-12 uppercase italic">MISI <span className="text-slate-200">UTAMA.</span></h2>
              <ul className="space-y-10">
                {[
                  "Menyelenggarakan pembelajaran berbasis teknologi mutakhir (AI & Cloud).",
                  "Mengembangkan minat bakat siswa melalui kompetisi global.",
                  "Menanamkan karakter luhur dan kearifan budaya lokal.",
                  "Membangun kolaborasi strategis dengan institusi ternama."
                ].map((misi, i) => (
                  <li key={i} className="flex items-start space-x-6 group">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#C5A059] group-hover:bg-[#0F172A] group-hover:text-white transition-all shrink-0">
                      <ChevronRight size={18} />
                    </div>
                    <p className="text-xl font-light text-slate-500 leading-snug group-hover:text-[#0F172A] transition-colors">{misi}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Gold Accents */}
      <section className="py-40 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 reveal">
            <span className="text-[#C5A059] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Core Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter leading-none">Filosofi <br/><span className="text-slate-200 underline decoration-[#C5A059]/20">Pendidikan.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {mottoValues.map((motto, idx) => (
              <div key={idx} className="ivory-card p-16 rounded-[60px] group reveal">
                <div className={`mb-12 w-20 h-20 ${motto.color} rounded-[30px] flex items-center justify-center shadow-sm transform group-hover:rotate-12 transition-transform duration-700`}>
                  {motto.icon}
                </div>
                <h4 className="text-3xl font-black text-[#0F172A] mb-6 tracking-tight">{motto.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light italic font-serif-prestige text-lg">
                  "{motto.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 reveal">
            <span className="text-[#C5A059] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Student Leadership</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter leading-none">Suara <br /><span className="text-slate-200 italic">Siswa.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {osisLeadership.map((leader, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[48px] hover:bg-[#0F172A] transition-all duration-700 hover:-translate-y-4 reveal">
                <div className="w-16 h-16 bg-white group-hover:bg-[#C5A059] rounded-2xl flex items-center justify-center text-[#C5A059] group-hover:text-white mb-10 transition-colors shadow-sm">
                  {leader.icon}
                </div>
                <span className="text-[9px] font-black text-[#C5A059] tracking-[0.3em] uppercase mb-2 block">{leader.role}</span>
                <h4 className="text-2xl font-black text-[#0F172A] group-hover:text-white transition-colors">{leader.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolProfile;

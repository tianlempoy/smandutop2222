
import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Play, ShieldCheck } from 'lucide-center'; // Perbaikan typo 'center' di file asli jika masih ada, namun instruksi sebelumnya sudah fix. Menggunakan 'react'
import { ArrowRight as ArrowRightIcon, Sparkles as SparklesIcon, Play as PlayIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0F1E] pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute inset-0 transform scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]">
          <img 
            src={SCHOOL_ASSETS.HERO_BUILDING} 
            alt="Gedung Utama SMAN 2 Tompaso" 
            className="w-full h-full object-cover opacity-60 grayscale-[20%]"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A0F1E]/40 z-10 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/80 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-transparent to-transparent z-20"></div>
        <div className="absolute top-0 left-1/4 w-[50%] h-[30%] bg-white/5 blur-[120px] rounded-full z-15 pointer-events-none"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-8 lg:px-20 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-8 space-y-12 reveal active">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-[#C5A059]"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#C5A059] flex items-center drop-shadow-md">
                  <SparklesIcon className="w-3 h-3 mr-3" />
                  Institusi Bersejarah
                </span>
              </div>
              
              <h1 className="text-[9vw] lg:text-[130px] font-medium text-white leading-[0.9] tracking-tighter font-serif-prestige drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                Warisan <br /> 
                <span className="italic font-light text-[#C5A059]">Keunggulan.</span>
              </h1>
            </div>

            <p className="max-w-3xl text-xl lg:text-3xl font-light leading-relaxed text-white/80 font-serif-prestige italic drop-shadow-lg">
              "Membina komunitas intelektual yang cerdas, terampil, dan bermartabat di jantung Minahasa melalui inovasi pendidikan tanpa batas."
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-6">
              <button className="bg-[#C5A059] text-white px-12 py-7 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-[#0A0F1E] transition-all shadow-2xl flex items-center justify-center space-x-6 group active:scale-95">
                <span>Daftar Sekarang (PPDB)</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <a 
                href="https://www.youtube.com/watch?v=ky3IooXZYH4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 px-10 py-7 group border border-white/20 rounded-full hover:border-[#C5A059] transition-all active:scale-95 bg-white/5 backdrop-blur-md shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all shadow-sm">
                  <PlayIcon size={14} className="fill-current ml-1" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white drop-shadow-md">Video Profil</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 relative reveal active hidden lg:block" style={{ transitionDelay: '0.4s' }}>
             <div className="bg-[#0A0F1E]/80 backdrop-blur-3xl p-10 lg:p-14 rounded-[40px] shadow-3xl border border-white/10 max-w-[340px] hover:translate-y-[-10px] transition-transform duration-700 group/seal relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover/seal:bg-[#C5A059]/10 transition-colors"></div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                    <ShieldCheckIcon size={16} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C5A059]/60">Integritas Institusi</span>
                </div>
                
                <div className="relative inline-block mb-2">
                  <p className="text-[140px] font-light text-white tracking-tighter leading-none font-serif-prestige italic drop-shadow-[0_10px_30px_rgba(197,160,89,0.25)] select-none">
                    B
                  </p>
                  <div className="absolute -bottom-2 left-0 w-2/3 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent"></div>
                </div>

                <div className="mt-8 space-y-1">
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-white leading-relaxed">
                    Akreditasi
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] opacity-80">
                    NASIONAL BAN-S/M
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Pusat Akademik Terverifikasi</span>
                   <div className="flex -space-x-1">
                      <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></div>
                   </div>
                </div>
              </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

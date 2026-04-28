'use client';

import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Star,
  ExternalLink,
  ChevronRight,
  Beer,
  ArrowRight
} from 'lucide-react';

export default function TopBeerPage() {
  const whatsappLink = "https://chat.whatsapp.com/C9Y9bnFb2Wp4C3mRjKjBX9";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=R.+Dr.+Frederico+Bastos,+324+-+Fragata,+Pelotas+-+RS";
  const instagramLink = "https://www.instagram.com/topbeer_/";
  const phoneNumber = "(53) 98402-7386";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* High-End Hero Section */}
      <section className="relative h-screen overflow-hidden bg-stone-950 flex flex-col items-center justify-center border-b border-stone-800">
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none overflow-hidden">
          <span className="font-display text-[35vw] font-black italic tracking-tighter leading-none whitespace-nowrap text-stone-100">PELOTAS</span>
        </div>

        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Distribuidora de Bebidas • Pelotas RS
          </div>
          
          <h1 className="font-display text-8xl md:text-[11rem] font-black italic tracking-tighter leading-[0.85] mb-6 text-stone-100">
            TOP<br/>
            <span className="text-amber-500">BEER</span>
          </h1>
          
          <p className="text-stone-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 font-medium">
            Sua conveniência premium em Pelotas. Cervejas geladas, destilados e a melhor resenha da região.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-16 px-10 bg-amber-500 text-stone-950 rounded-2xl font-black uppercase text-sm flex items-center gap-3 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              Peça Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 px-10 border-2 border-stone-800 text-stone-100 rounded-2xl font-black uppercase text-sm flex items-center gap-3 hover:bg-stone-800 active:scale-95 transition-all"
              whileHover={{ y: -2 }}
            >
              <Instagram className="w-5 h-5" />
              Siga-nos
            </motion.a>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-stone-900 border border-stone-800 rounded-2xl">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase font-black tracking-widest text-stone-400">Entrega Rápida Ativa</span>
        </div>
      </section>

      {/* Info Grid - Connoisseur Style */}
      <section className="bg-stone-950 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Stats / Hours Card */}
          <motion.div {...fadeIn} className="flex flex-col gap-8 p-10 rounded-[2.5rem] bg-stone-900/50 border border-stone-800 lg:col-span-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black uppercase italic text-stone-400">Horários</h2>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            
            <div className="space-y-6">
              <div className="p-5 bg-stone-950 border border-stone-800 rounded-2xl">
                <div className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-2">Segunda - Sábado</div>
                <div className="text-3xl font-black text-amber-500 italic">08:00 - 00:00</div>
              </div>
              <div className="p-5 bg-stone-950 border border-stone-800 rounded-2xl opacity-60">
                <div className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-2">Domingo</div>
                <div className="text-3xl font-black text-stone-300 italic">Consultar</div>
              </div>
            </div>

            <div className="p-6 bg-amber-500 rounded-2xl flex items-center justify-between">
              <span className="text-stone-950 font-black uppercase text-[10px] tracking-widest">Peça antes da meia noite</span>
              <Beer className="w-5 h-5 text-stone-950" />
            </div>
          </motion.div>

          {/* Leaderboard / Brand Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col gap-8 p-10 rounded-[2.5rem] bg-stone-900/50 border border-stone-800 md:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black uppercase italic text-stone-400">Favoritas da Galera</h2>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Os Mais Pedidos</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { rank: '01', name: 'Brahma Duplo Malte', cat: 'Cerveja' },
                { rank: '02', name: 'Corona Extra', cat: 'Long Neck' },
                { rank: '03', name: 'Absolut Vodka', cat: 'Destilado' },
                { rank: '04', name: 'Baly Energy', cat: 'Mixer' },
              ].map((item) => (
                <div key={item.rank} className="group flex items-center gap-5 p-5 rounded-2xl bg-stone-800/30 border border-stone-700/30 hover:bg-stone-800 transition-all cursor-default">
                  <span className="text-4xl font-black text-stone-700 group-hover:text-amber-500 italic transition-colors leading-none">{item.rank}</span>
                  <div className="flex-1">
                    <h3 className="font-black uppercase text-sm tracking-tight text-stone-200">{item.name}</h3>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold font-mono">{item.cat}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-700 group-hover:text-amber-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location / Final Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="flex flex-col gap-8 p-10 rounded-[2.5rem] bg-stone-900 border border-stone-800 md:col-span-3 lg:col-span-3">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-stone-950" />
                  </div>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4">LOCALIZAÇÃO</h3>
                  <p className="text-stone-400 text-lg mb-6 leading-relaxed">
                    Estamos localizados estrategicamente no Fragata para atender toda Pelotas com rapidez e eficiência.
                  </p>
                  <div className="space-y-1 text-stone-100 font-bold mb-8">
                    <p>R. Dr. Frederico Bastos, 324</p>
                    <p>Fragata, Pelotas - RS</p>
                    <p className="text-stone-500 text-sm italic">Próximo ao quartel</p>
                  </div>
                  <a 
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-500 font-black uppercase text-xs tracking-widest hover:underline underline-offset-4"
                  >
                    Ver no Google Maps <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="bg-stone-950 p-8 rounded-3xl border border-stone-800 flex flex-col justify-center items-center text-center">
                  <div className="text-stone-500 text-[10px] font-black uppercase tracking-widest mb-2">WhatsApp Direct</div>
                  <a href={`tel:${phoneNumber.replace(/\D/g,'')}`} className="text-4xl md:text-5xl font-black italic text-stone-100 mb-6 hover:text-amber-500 transition-colors">
                    {phoneNumber}
                  </a>
                  <p className="text-stone-500 text-sm mb-8">Atendimento rápido para pedidos e orçamentos de eventos.</p>
                  <div className="flex gap-4">
                    <a href={instagramLink} className="w-14 h-14 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center hover:bg-stone-800 transition-all">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center hover:bg-stone-800 transition-all">
                      <Facebook className="w-6 h-6 text-stone-400" />
                    </a>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* Footer Branded */}
      <footer className="bg-stone-950 py-20 px-6 border-t border-stone-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
                <Beer className="w-5 h-5 text-stone-950" />
              </div>
              <span className="text-3xl font-black italic tracking-tighter uppercase text-amber-500">TOP BEER</span>
            </div>
            <p className="text-stone-600 text-xs font-bold uppercase tracking-widest">Distribuidora de Bebidas • Pelotas RS</p>
          </div>
          
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Produtos</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Localização</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>

          <div className="text-right text-[10px] text-stone-700 font-bold uppercase tracking-[0.2em]">
            © 2024 Top Beer. Built for Connoisseurs.
          </div>
        </div>
      </footer>
    </main>
  );
}

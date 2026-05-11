import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const scrollToSolutions = () => {
    const element = document.getElementById('solutions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-4 px-6 lg:px-12 bg-navy overflow-hidden">
      {/* Immersive Background Image (Clearer & Full-screen) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Office Background" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy text-white"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-sm border border-white/10 flex flex-col justify-center relative overflow-hidden bg-navy/40 backdrop-blur-sm min-h-[500px]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] z-0"></div>
          <div className="relative z-10 p-6 lg:p-24">
            <span className="text-gold font-bold text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 lg:mb-6 block">{t('hero.title')}</span>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif leading-tight mb-6 lg:mb-8 font-light text-white flex flex-col gap-1 lg:gap-2">
              <span dangerouslySetInnerHTML={{ __html: t('hero.title.camera') }}></span>
              <span dangerouslySetInnerHTML={{ __html: t('hero.title.internet') }}></span>
              <span dangerouslySetInnerHTML={{ __html: t('hero.title.office') }}></span>
            </h1>
            <div className="text-white/80 text-base lg:text-lg max-w-3xl leading-relaxed mb-8 lg:mb-10">
              <div className="text-gold font-bold mb-3 lg:mb-4 text-lg lg:text-xl leading-snug">
                {t('hero.tagline')}
              </div>
              <p className="text-white/70 italic text-sm lg:text-base">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-16">
              <button 
                onClick={scrollToSolutions}
                className="bg-gold text-navy px-10 py-4 font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-gold/20"
              >
                {t('hero.cta')}
              </button>
            </div>

            {/* Integrated Stats / Experience */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pt-12 border-t border-white/10">
              {[
                { value: '07+', label: t('stats.years'), desc: t('stats.years.desc') },
                { value: '1500+', label: t('stats.projects'), desc: t('stats.projects.desc') },
                { value: '500+', label: t('stats.partners'), desc: t('stats.partners.desc') },
                { value: '98%', label: t('stats.satisfaction'), desc: t('stats.satisfaction.desc') },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl lg:text-5xl font-thin text-gold mb-1">{stat.value}</span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-gold/70 font-light mb-1">{stat.label}</span>
                  <span className="text-[9px] lg:text-[10px] text-white/30 uppercase tracking-widest font-light">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

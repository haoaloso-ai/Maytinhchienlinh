import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();
  return (
    <section id="about-section" className="py-16 lg:py-24 bg-navy px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <span className="text-gold font-bold text-[10px] lg:text-xs tracking-[0.3em] uppercase mb-4 block">{t('nav.about')}</span>
            <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6 lg:mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t('about.title') }}>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <div className="text-white/70 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
              <p className="mb-6">
                {t('about.description')}
              </p>
              <p className="italic border-l-2 border-gold pl-5 lg:pl-6 py-2 text-sm lg:text-lg text-gold/90">
                {t('about.philosophy')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

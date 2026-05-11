import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PARTNERS = [
  { name: 'Imou', logo: '/images/regenerated_image_1778053282409.png' },
  { name: 'Hikvision', logo: '/images/regenerated_image_1778053283146.png' },
  { name: 'HP', logo: '/images/regenerated_image_1778127170837.png' },
  { name: 'Dell', logo: '/images/regenerated_image_1778053642908.png' },
  { name: 'Asus', logo: '/images/regenerated_image_1778053643663.png' },
  { name: 'Huawei', logo: '/images/regenerated_image_1778127172126.png' },
  { name: 'TP-Link', logo: '/images/regenerated_image_1778053918944.png' },
  { name: 'Ezviz', logo: '/images/regenerated_image_1778137300305.png' },
  { name: 'Dahua', logo: '/images/regenerated_image_1778137301107.png' },
  { name: 'Gigabyte', logo: '/images/regenerated_image_1778137590884.png' },
  { name: 'Netis', logo: '/images/regenerated_image_1778137591793.png' },
];

export default function Partners() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(7);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(3);
      else if (window.innerWidth < 1024) setItemsToShow(5);
      else setItemsToShow(7);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const maxIdx = Math.max(0, PARTNERS.length - itemsToShow);
        return prev < maxIdx ? prev + 1 : 0;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, itemsToShow]);

  const maxIndex = Math.max(0, PARTNERS.length - itemsToShow);
  const safeStartIndex = Math.min(startIndex, maxIndex);

  const handleNext = () => {
    if (safeStartIndex < maxIndex) {
      setStartIndex(prev => prev + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (safeStartIndex > 0) {
      setStartIndex(prev => prev - 1);
    } else {
      setStartIndex(maxIndex);
    }
  };

  return (
    <section 
      className="py-20 bg-navy border-t border-white/5 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-4 block">{t('nav.partners')}</span>
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">{t('partners.title')}</h2>
        </div>
        
        <div className="relative group/partners">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-30px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 p-2 text-gold/40 hover:text-gold transition-colors focus:outline-none"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-[-30px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 p-2 text-gold/40 hover:text-gold transition-colors focus:outline-none"
          >
            <ChevronRight size={32} />
          </button>

          <div className="overflow-hidden">
            <motion.div 
              className="flex items-center transition-opacity duration-500"
              animate={{ x: `-${safeStartIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {PARTNERS.map((partner) => (
                <div 
                  key={partner.name} 
                  style={{ minWidth: `${100 / itemsToShow}%` }} 
                  className="px-0.5 flex justify-center transition-all cursor-pointer"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-8 md:h-10 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PRODUCTS = [
  {
    name: 'Camera WiFi Ngoài Trời Imou Cruiser 2 5MP',
    brand: 'IMOU',
    image: '/src/assets/images/regenerated_image_1778052104259.jpg',
  },
  {
    name: 'Camera IP Hồng Ngoại Hikvision 2MP',
    brand: 'HIKVISION',
    image: '/src/assets/images/regenerated_image_1778052105728.webp',
  },
  {
    name: 'Đầu Ghi Hình NVR Hikvision 8 Kênh 4K',
    brand: 'HIKVISION',
    image: '/src/assets/images/regenerated_image_1778034127820.jpg',
  },
  {
    name: 'Laptop HP EliteBook 840 G10 i7',
    brand: 'HP',
    image: '/src/assets/images/regenerated_image_1778052107467.webp',
  },
  {
    name: 'Laptop Dell XPS 15 9530 i9 2023',
    brand: 'DELL',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Thiết Bị Wifi 6 TP-Link Archer AX73',
    brand: 'TP-LINK',
    image: '/src/assets/images/regenerated_image_1778052696459.png',
  },
  {
    name: 'Máy In Laser Brother HL-L2366DW',
    brand: 'BROTHER',
    image: '/src/assets/images/regenerated_image_1778052700673.png',
  },
  {
    name: 'Máy In Phun Màu Canon PIXMA G3010',
    brand: 'CANON',
    image: '/src/assets/images/regenerated_image_1778052703848.png',
  },
  {
    name: 'HP GAMING VICTUS 16 RYZEN 5 6600H',
    brand: 'HP',
    image: '/src/assets/images/regenerated_image_1778052705785.png',
  }
];

export default function Products() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const maxIdx = Math.max(0, PRODUCTS.length - itemsToShow);
        return prev < maxIdx ? prev + 1 : 0;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, itemsToShow]);

  const maxIndex = Math.max(0, PRODUCTS.length - itemsToShow);
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
      id="products-section" 
      className="py-16 bg-navy text-white overflow-hidden px-6 md:px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">{t('products.tagline')}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light">{t('products.title')}</h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-navy transition-all focus:outline-none backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-navy transition-all focus:outline-none backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden -mx-2">
            <motion.div 
              className="flex"
              animate={{ x: `-${safeStartIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {PRODUCTS.map((prod) => (
                <div 
                  key={prod.name} 
                  style={{ minWidth: `${100 / itemsToShow}%` }} 
                  className="px-2"
                >
                  <div className="group bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-gold/50 transition-colors duration-500 flex flex-col h-full">
                    <div className="relative h-48 sm:h-56 bg-white/5 overflow-hidden">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-navy text-[9px] font-black px-2 py-1 uppercase tracking-widest rounded-sm shadow-lg">
                          {prod.brand}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center text-center bg-navy-dark/20 group-hover:bg-navy-dark/40 transition-colors">
                      <h3 className="font-bold text-xs sm:text-sm line-clamp-2 group-hover:text-gold transition-colors font-sans leading-relaxed tracking-wide">
                        {prod.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


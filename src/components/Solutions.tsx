import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Monitor, Server, Wifi, ArrowRight, X, Phone, Mail, Facebook, MessageCircle, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';
import { useContacts } from '../contexts/ContactContext';
import InboxModal from './InboxModal';
import AdminLoginModal from './AdminLoginModal';

export default function Solutions() {
  const { t } = useLanguage();
  const { 
    isContactModalOpen, 
    setIsContactModalOpen, 
    isQuoteModalOpen, 
    setIsQuoteModalOpen,
    isInboxModalOpen,
    setIsInboxModalOpen
  } = useModal();
  const { addMessage } = useContacts();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage(formData.name, formData.phone, formData.content);
    setFormData({ name: '', phone: '', content: '' });
    setIsQuoteModalOpen(false);
    // Success feedback could be added here
    alert('Cảm ơn bạn! Thông tin đã được gửi thành công.');
  };

  const SOLUTIONS = [
    {
      icon: <Camera className="w-10 h-10" />,
      title: t('nav.solutions.camera'),
      desc: t('nav.solutions.camera.desc'),
      image: '/regenerated_image_1777391093063.png',
      color: 'gold'
    },
    {
      icon: <Wifi className="w-10 h-10" />,
      title: t('nav.solutions.internet'),
      desc: t('nav.solutions.internet.desc'),
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
      color: 'white'
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: t('nav.solutions.office'),
      desc: t('nav.solutions.office.desc'),
      image: '/src/assets/images/regenerated_image_1778033026197.jpg',
      color: 'white'
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: t('nav.solutions.server'),
      desc: t('nav.solutions.server.desc'),
      image: '/src/assets/images/regenerated_image_1778033028064.jpg',
      color: 'white'
    }
  ];

  return (
    <section id="solutions-section" className="py-20 bg-navy px-6 lg:px-12 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-[0.45] grayscale-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-4 block">{t('solutions.tagline')}</span>
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">{t('solutions.title')}</h2>
        </div>

        {/* 4 Large Bento Cells */}
        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          {SOLUTIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-navy-dark min-h-[220px] lg:min-h-[350px] flex flex-col lg:flex-row"
            >
              <div className="w-full lg:w-[45%] h-[100px] lg:h-full relative overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-1 p-3 lg:p-10 flex flex-col justify-center relative">
                <div className="text-gold mb-2 lg:mb-6 group-hover:scale-110 transition-transform origin-left">
                  <div className="scale-75 lg:scale-100 origin-left">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xs lg:text-2xl font-bold uppercase tracking-wider mb-1 lg:mb-4 group-hover:text-gold transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-2 lg:mb-8 text-[10px] lg:text-sm line-clamp-2 lg:line-clamp-none">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1 lg:gap-2 text-gold text-[8px] lg:text-xs font-bold uppercase tracking-[0.1em] lg:tracking-[0.2em] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all">
                  {t('hero.cta')} <ArrowRight size={12} className="lg:w-[14px] lg:h-[14px]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Block */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-6 rounded-sm border border-gold/30 p-8 lg:p-12 bg-white/5 flex flex-col items-center text-center gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <div className="max-w-3xl">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block">{t('solutions.cta.tagline')}</span>
            <h3 className="text-3xl md:text-5xl font-serif font-light mb-6 text-white leading-tight" dangerouslySetInnerHTML={{ __html: t('solutions.cta.title') }}>
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {t('solutions.cta.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full bg-gold text-navy px-6 py-4 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold/20 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {t('solutions.cta.button').toUpperCase()}
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="w-full bg-gold text-navy px-6 py-4 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold/20 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {t('solutions.hotline').toUpperCase()}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-navy-dark border border-gold/30 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold z-20"></div>
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-gold transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto p-6 md:p-12">
                <div className="text-center mb-8 md:mb-10 mt-4 md:mt-0">
                  <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-2 block">Cửa Hàng</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">MÁY TÍNH CHIẾN LINH</h3>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {/* Hotline */}
                  <a 
                    href="tel:0373545903" 
                    className="flex items-center gap-4 p-3 md:p-4 border border-white/5 bg-white/5 hover:border-gold/50 hover:bg-gold/5 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Phone size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5 md:mb-1">Hotline Tư Vấn</p>
                      <div className="text-base md:text-lg font-bold text-white tracking-widest leading-tight">
                        <p>0373 545 903</p>
                        <p>0888 545 903</p>
                        <p>0937 118 586</p>
                      </div>
                    </div>
                  </a>

                  {/* Gmail */}
                  <a 
                    href="mailto:maytinhchienlinh@gmail.com" 
                    className="flex items-center gap-4 p-3 md:p-4 border border-white/5 bg-white/5 hover:border-gold/50 hover:bg-gold/5 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Mail size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5 md:mb-1">Email Hỗ Trợ</p>
                      <p className="text-sm md:text-base font-bold text-white">maytinhchienlinh@gmail.com</p>
                    </div>
                  </a>

                  {/* Socials */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <a 
                      href="https://www.facebook.com/share/18ce4dDCQF/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 border border-white/5 bg-white/5 hover:border-gold/50 hover:bg-gold/5 transition-all group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <Facebook size={20} className="md:w-6 md:h-6" />
                      </div>
                      <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/60">Facebook</span>
                    </a>
                    <a 
                      href="https://zalo.me/0373545903" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 border border-white/5 bg-white/5 hover:border-gold/50 hover:bg-gold/5 transition-all group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <MessageCircle size={20} className="md:w-6 md:h-6" />
                      </div>
                      <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/60">Zalo</span>
                    </a>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 pt-6 border-t border-white/5 text-center px-4">
                  <p className="text-white/40 text-[9px] md:text-[10px] leading-relaxed italic uppercase tracking-wider">
                    "Giải pháp công nghệ chuyên nghiệp cho doanh nghiệp của bạn"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Quote/Consultation Request Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-navy-dark border border-gold/30 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold z-20"></div>
              <button 
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-gold transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto p-6 md:p-12">
                <div className="text-center mb-6 md:mb-8 mt-4 md:mt-0">
                  <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-2 block">Liên Hệ Tư Vấn</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-3 md:mb-4">Để Lại Thông Tin</h3>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
                    Chúng tôi sẽ liên hệ cho bạn
                  </p>
                </div>

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gold mb-1.5 md:mb-2">Họ và Tên</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-gold/50 transition-colors uppercase text-xs md:text-sm tracking-wider"
                        placeholder="NHẬP HỌ TÊN CỦA BẠN"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gold mb-1.5 md:mb-2">Số Điện Thoại Liên Lạc</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-gold/50 transition-colors uppercase text-xs md:text-sm tracking-wider"
                        placeholder="NHẬP SỐ ĐIỆN THOẠI"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gold mb-1.5 md:mb-2">Nội Dung Cần Tư Vấn</label>
                      <textarea 
                        rows={3}
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-gold/50 transition-colors uppercase text-xs md:text-sm tracking-wider resize-none"
                        placeholder="MÔ TẢ CHI TIẾT NHU CẦU CỦA BẠN"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-gold text-navy font-black text-xs md:text-sm py-3.5 md:py-4 uppercase tracking-[0.3em] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-gold/10"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <InboxModal />
      <AdminLoginModal />
    </section>
  );
}

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 text-sm">
          {/* Brand Info */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-8">
              <Logo size="md" />
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-bold text-lg tracking-wider text-gold uppercase">{t('hero.title')}</span>
                <span className="text-[10px] tracking-[0.2em] opacity-70 uppercase text-white/50">Technology Solutions</span>
              </div>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed italic max-w-xl">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap justify-start gap-4 sm:gap-8">
              {[
                { name: 'Facebook', src: '/src/assets/images/regenerated_image_1778139501851.jpg', url: 'https://www.facebook.com/share/18ce4dDCQF/' },
                { name: 'Zalo', src: '/src/assets/images/regenerated_image_1778139498203.jpg', url: 'https://zalo.me/0373545903' },
                { name: 'TikTok', src: '/src/assets/images/regenerated_image_1778139498972.jpg', url: 'https://www.tiktok.com/@user55366205701676?_r=1&_t=ZS-96B0Pfvd95l' },
                { name: 'Messenger', src: '/src/assets/images/regenerated_image_1778139499883.png', url: 'https://m.me/nguyen.xuan.hao.908802?hash=Abad6JrrkGVHdrJG&source=qr' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target={social.url !== '#' ? "_blank" : undefined}
                  rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300 group overflow-hidden"
                >
                  <img 
                    src={social.src} 
                    alt={social.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] mb-8 text-xs">{t('footer.contact')}</h4>
            <ul className="flex flex-col gap-6 text-white/60 items-start text-left">
              <li className="flex flex-col sm:flex-row items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span className="max-w-md">212 Khu phố Đông Thái, Xã Vĩnh Bảo, TP Hải Phòng</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <span> Hotline: 0373 545 903 - 0888 545 903 - 0937 118 586</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-gold font-bold text-xs">MST:</span>
                <span className="text-white/60">0202189252</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <span>maytinhchienlinh@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] uppercase tracking-widest">
          <p>{t('footer.rights')}</p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center rounded-sm transition-all group"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

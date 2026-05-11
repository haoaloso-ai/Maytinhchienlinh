import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Globe, User } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

const MENU_ITEMS = [
  {
    titleKey: 'nav.solutions',
    submenu: [
      { nameKey: 'nav.solutions.camera', descKey: 'nav.solutions.camera.desc' },
      { nameKey: 'nav.solutions.internet', descKey: 'nav.solutions.internet.desc' },
      { nameKey: 'nav.solutions.server', descKey: 'nav.solutions.server.desc' },
      { nameKey: 'nav.solutions.office', descKey: 'nav.solutions.office.desc' },
    ]
  },
  {
    titleKey: 'nav.products',
    submenu: [
      { nameKey: 'nav.products.camera', descKey: 'nav.products.camera.desc' },
      { nameKey: 'nav.products.computer', descKey: 'nav.products.computer.desc' },
      { nameKey: 'nav.products.printer', descKey: 'nav.products.printer.desc' },
      { nameKey: 'nav.products.network', descKey: 'nav.products.network.desc' },
    ]
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { setIsContactModalOpen } = useModal();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-navy text-white border-b border-gold/30">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 border-b border-white/5 text-xs font-bold uppercase tracking-[0.1em]">
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><Phone size={15} className="text-gold" /> Hotline: 0373 545 903 - 0888 545 903 - 0937 118 586</span>
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 hover:text-gold transition-colors py-1 px-2 border border-white/5 rounded-sm bg-white/5"
            >
              <Globe size={15} className="text-gold" /> {t('lang.' + language)}
            </button>
            {langMenuOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-navy border border-white/10 shadow-xl overflow-hidden z-50">
                {(['vi', 'en', 'zh'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors ${language === lang ? 'text-gold' : 'text-white'}`}
                  >
                    {t(`lang.${lang}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-6 items-center">
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Logo size="sm" />
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-bold text-[13px] sm:text-base lg:text-lg tracking-wider text-gold uppercase whitespace-nowrap">{t('hero.title')}</span>
            <span className="text-[8px] sm:text-[10px] tracking-[0.2em] opacity-70">TECHNOLOGY SOLUTIONS</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center h-full">
          {MENU_ITEMS.map((item) => (
            <li 
              key={item.titleKey} 
              className="relative group py-2"
              onMouseEnter={() => setActiveSubmenu(item.titleKey)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <a 
                href="#" 
                className="flex items-center gap-1 font-medium text-[13px] uppercase tracking-wide hover:text-gold transition-all duration-300 group"
              >
                {t(item.titleKey)}
                {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </a>
              
              {/* Mega Menu Content */}
              {item.submenu && activeSubmenu === item.titleKey && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-4 w-[400px] bg-white text-navy shadow-2xl rounded-sm p-6 grid grid-cols-1 gap-4"
                >
                  <div className="absolute top-0 left-4 -mt-2 w-4 h-4 bg-white rotate-45"></div>
                  {item.submenu.map((sub) => (
                    <div key={sub.nameKey} className="group/item cursor-pointer">
                      <h4 className="font-bold text-sm group-hover/item:text-gold transition-colors">{t(sub.nameKey)}</h4>
                      <p className="text-xs text-navy/60">{t(sub.descKey)}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <button className="lg:hidden p-1 sm:p-2 text-white hover:text-gold transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Mobile/Tablet Language Selector */}
          <div className="lg:hidden relative">
             <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-gold border border-gold/20 rounded-sm px-1.5 sm:px-2.5 py-1.5 sm:py-2 bg-white/5 uppercase transition-all hover:border-gold/50"
              >
                <Globe size={12} /> {language}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-navy border border-white/10 shadow-2xl rounded-sm overflow-hidden z-50">
                  {(['vi', 'en', 'zh'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-gold hover:text-navy transition-all ${language === lang ? 'text-gold' : 'text-white'}`}
                    >
                      {t(`lang.${lang}`)}
                    </button>
                  ))}
                </div>
              )}
          </div>

          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="hidden sm:block gold-gradient text-navy font-bold text-sm px-6 py-2 rounded-sm hover:brightness-110 transition-all shadow-lg shadow-gold/20"
          >
            {t('footer.contact').toUpperCase()}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 right-0 w-full h-screen bg-navy z-[60] lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Logo size="sm" />
                <span className="font-sans font-bold text-sm tracking-wider text-gold uppercase">{t('hero.title')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white">
                <X size={28} />
              </button>
            </div>
            
            <ul className="flex-1 px-6 py-8 flex flex-col gap-8 overflow-y-auto">
              {MENU_ITEMS.map((item) => (
                <li key={item.titleKey} className="border-b border-white/5 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold uppercase tracking-wider text-gold">{t(item.titleKey)}</span>
                  </div>
                  {item.submenu && (
                    <div className="grid grid-cols-1 gap-4 pl-4">
                      {item.submenu.map((sub) => (
                        <div key={sub.nameKey}>
                          <h4 className="font-bold text-sm text-white/90">{t(sub.nameKey)}</h4>
                          <p className="text-[10px] text-white/40">{t(sub.descKey)}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="p-6 border-t border-white/10 bg-navy-dark">
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full gold-gradient text-navy font-bold py-4 rounded-sm shadow-xl shadow-gold/10"
              >
                {t('footer.contact').toUpperCase()}
              </button>
              <div className="mt-6 flex justify-center gap-6 text-white/40">
                 <Phone size={20} />
                 <div className="relative">
                    <button onClick={() => setLangMenuOpen(!langMenuOpen)}><Globe size={20} /></button>
                    {langMenuOpen && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-navy border border-white/10 shadow-xl overflow-hidden z-50">
                        {(['vi', 'en', 'zh'] as Language[]).map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              setLanguage(lang);
                              setLangMenuOpen(false);
                              setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-4 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors text-white"
                          >
                            {t(`lang.${lang}`)}
                          </button>
                        ))}
                      </div>
                    )}
                 </div>
                 <User size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/AuthContext';
import { useContacts } from '../contexts/ContactContext';

export default function AdminLoginModal() {
  const { isAdminLoginModalOpen, setIsAdminLoginModalOpen, setIsInboxModalOpen } = useModal();
  const { login } = useAuth();
  const { markAllAsRead } = useContacts();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (login(password)) {
      setIsAdminLoginModalOpen(false);
      setIsInboxModalOpen(true);
      markAllAsRead();
      setPassword('');
    } else {
      setError('Mật khẩu không chính xác');
    }
  };

  return (
    <AnimatePresence>
      {isAdminLoginModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAdminLoginModalOpen(false)}
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm bg-navy-dark border border-gold/30 rounded-sm shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold z-20"></div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4 border border-gold/20 shadow-inner">
                  <Lock size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-white">Xác thực Admin</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Vui lòng đăng nhập để xem thư</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Mật khẩu</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                      <input 
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full bg-white/5 border border-white/10 pl-10 pr-12 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors text-sm tracking-wider"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-[10px] uppercase tracking-widest text-center font-bold"
                  >
                    {error}
                  </motion.p>
                )}

                <button 
                  type="submit"
                  className="w-full gold-gradient py-4 text-navy font-black uppercase tracking-[0.2em] text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold/20"
                >
                  Đăng nhập
                </button>
              </form>
            </div>

            <button 
              onClick={() => setIsAdminLoginModalOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

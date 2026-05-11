import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, User, Trash2 } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import { useContacts } from '../contexts/ContactContext';
import { useAuth } from '../contexts/AuthContext';

export default function InboxModal() {
  const { isInboxModalOpen, setIsInboxModalOpen } = useModal();
  const { messages, deleteMessage } = useContacts();
  const { isAdmin } = useAuth();

  if (!isAdmin) return null;

  return (
    <AnimatePresence>
      {isInboxModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsInboxModalOpen(false)}
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-navy-dark border border-gold/30 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold z-20"></div>
            <div className="flex justify-between items-center p-6 border-b border-white/10 relative z-20">
              <div className="flex items-center gap-3">
                <Mail className="text-gold" size={24} />
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Tin nhắn đã nhận</h3>
              </div>
              <button 
                onClick={() => setIsInboxModalOpen(false)}
                className="text-white/40 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-20">
                  <Mail size={48} className="mx-auto text-white/10 mb-4" />
                  <p className="text-white/40 uppercase tracking-widest text-sm">Hòm thư trống</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className="p-6 bg-white/5 border border-white/10 rounded-sm hover:border-gold/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                          <User size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-wider">{msg.name}</h4>
                          <p className="text-xs text-white/40">{new Date(msg.createdAt).toLocaleString('vi-VN')}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteMessage(msg.id)}
                        className="p-2 text-white/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gold/80">
                        <Phone size={16} />
                        <span className="text-sm font-mono tracking-wider">{msg.phone}</span>
                      </div>
                      <div className="bg-navy/50 p-4 rounded-sm border border-white/5">
                        <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">
                          {msg.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="p-6 border-t border-white/10 bg-navy text-center">
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
                Tổng số tin nhắn: {messages.length}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

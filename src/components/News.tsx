import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NEWS = [
  {
    title: 'Xu hướng ứng dụng Trí tuệ nhân tạo (AI) trong giám sát an ninh 2026',
    date: '22 Tháng 4, 2026',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    category: 'CÔNG NGHỆ'
  },
  {
    title: 'Tầm quan trọng của hệ thống hạ tầng mạng đối với chuyển đổi số doanh nghiệp',
    date: '20 Tháng 4, 2026',
    author: 'Tech Expert',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
    category: 'GIẢI PHÁP'
  },
  {
    title: 'Lựa chọn máy chủ phù hợp cho doanh nghiệp vừa và nhỏ (SME)',
    date: '18 Tháng 4, 2026',
    author: 'Infrastructure Mgr',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600',
    category: 'TƯ VẤN'
  }
];

export default function News() {
  return (
    <section className="py-12 bg-navy px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Góc nhìn chuyên gia</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Tin tức & <span className="text-gold italic">Sự kiện</span></h2>
          </div>
          <button className="text-xs font-bold text-white/50 hover:text-gold transition-colors uppercase tracking-[0.2em] border-b border-white/10 pb-1">Xem tất cả</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {NEWS.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer rounded-sm border border-white/10 bg-white/5 p-6 hover:border-gold/50 transition-all"
            >
              <div className="relative overflow-hidden mb-6 rounded-sm aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 text-[9px] text-white/40 font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1 text-gold">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-4 group-hover:text-gold transition-colors leading-tight font-sans">
                {post.title}
              </h3>
              <a href="#" className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest group-hover:text-gold transition-all uppercase">
                Đọc bài viết <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
